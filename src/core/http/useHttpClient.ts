import { TimeoutError } from '@core/error/timeout';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { getLocalStorage } from '@shared/utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { ApiError, StatusError, UnknownError } from '@core/error';
import { env } from '@core/Enviroment';
import { ApiResponse, ApiSuccessResponse, HttpRequest } from './protocols';

export const UseHttpClient: () => {
  sendExternalRequest: <T extends object>(
    requestData: HttpRequest
  ) => Promise<
    ApiError | UnknownError | TimeoutError | StatusError | ApiSuccessResponse<T>
  >;
  sendApiRequest: <T extends object>(
    requestData: HttpRequest
  ) => Promise<
    ApiError | UnknownError | TimeoutError | StatusError | ApiSuccessResponse<T>
  >;
} = () => {
  const navigate = useNavigate();

  const apiUrl = env.VITE_API_BASE_URL;
  const sendApiRequest = async <T extends object>(requestData: HttpRequest) => {
    return axios
      .request<ApiResponse<T>>({
        url: `${apiUrl}${requestData.url}`,
        method: requestData.method,
        data: requestData.body,
        headers: requestData.headers,
        timeout: 300000, // 5 min
        responseType: requestData.responseType,
      } as AxiosRequestConfig<T>)
      .then((res) => {
        return res as ApiResponse<T>;
      })
      .catch((err) => {
        const obj = { ...err };

        if ('response' in err) {
          if (err.response?.data?.code || err.response?.data?.message) {
            if (obj.message)
              obj.message += `\n ${err.response?.data?.code} - ${err.response?.data?.message}`;
            else
              obj.message = `${err.response?.data?.code} - ${err.response?.data?.message}`;
          }
          obj.status = err.response.status;
          obj.statusText = err.response.statusText;
        }

        if (
          ('response' in err && err.response?.data.code === '999') ||
          ('response' in err && err.response?.data.code === 'KCB-40')
        ) {
          navigate(`/system-error`);
        }

        const getErrNetWork = err as AxiosError;
        if (getErrNetWork.code === 'ERR_NETWORK') {
          navigate(`/system-error`);
        }

        return err as TimeoutError;
      });
  };

  const sendExternalRequest = async <T extends object>(
    requestData: HttpRequest
  ) => {
    return axios
      .request<ApiResponse<T>>({
        url: `${requestData.url}`,
        method: requestData.method,
        data: requestData.body,
        headers: requestData.headers,
        timeout: 300000, // 5 min
      } as AxiosRequestConfig<T>)
      .then((res) => {
        return res as ApiResponse<T>;
      })
      .catch((err) => {
        const obj = { ...err };
        obj.url = `${apiUrl}${requestData.url}`;

        return err as TimeoutError;
      });
  };

  axios.interceptors.request.use((req) => {
    const token = getLocalStorage('@token');

    if (token && req.headers) req.headers.Authorization = `Bearer ${token}`;

    return req;
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return { sendApiRequest, sendExternalRequest } as const;
};

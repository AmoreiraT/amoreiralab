/// <reference types="vite/client.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_BASE_URL_DEV: string;
  readonly VITE_API_BASE_URL_SIT: string;
  readonly VITE_API_BASE_URL_UAT: string;
  readonly VITE_API_BASE_URL_PROD: string;
  readonly VITE_API_BASE_URL_LOCAL: string;
  readonly VITE_MUI_LICENSE_TOKEN: string;
  readonly VITE_AMBIENTE: string;

  readonly VITE_FB_API_KEY: string;
  readonly VITE_FB_AUTHD: string;
  readonly VITE_FB_PID: string;
  readonly VITE_FB_SBKT: string;
  readonly VITE_FACEBOOK_APP_ID: string;
  readonly VITE_FB_APPID: string;
  readonly VITE_FB_MID: string;
  readonly VITE_FB_MSID: string;
  readonly VITE_FB_FB_MID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

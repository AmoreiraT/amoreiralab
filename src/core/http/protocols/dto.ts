export interface BaseDto<T extends object> {
  columns: string[];
  list: T[];
}

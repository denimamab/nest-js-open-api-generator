//-----Types.File-----
export interface CreateUserDto  {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: any;
}

export function deserializeCreateUserDto(json: string): CreateUserDto {
  const data = JSON.parse(json) as CreateUserDto;
  initCreateUserDto(data);
  return data;
}

export function initCreateUserDto(_data: CreateUserDto) {
    return _data;
}

export function serializeCreateUserDto(_data: CreateUserDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateUserDto(_data as CreateUserDto);
  }
  return JSON.stringify(_data);
}

export function prepareSerializeCreateUserDto(_data: CreateUserDto): CreateUserDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateUserDto;
}

export interface GetUserDto  {
  id: number;
  name: string;
  email: string;
  [key: string]: any;
}

export function deserializeGetUserDto(json: string): GetUserDto {
  const data = JSON.parse(json) as GetUserDto;
  initGetUserDto(data);
  return data;
}

export function initGetUserDto(_data: GetUserDto) {
    return _data;
}

export function serializeGetUserDto(_data: GetUserDto | undefined) {
  if (_data) {
    _data = prepareSerializeGetUserDto(_data as GetUserDto);
  }
  return JSON.stringify(_data);
}

export function prepareSerializeGetUserDto(_data: GetUserDto): GetUserDto {
  const data: Record<string, any> = { ..._data };
  return data as GetUserDto;
}

export interface UpdateUserDto  {
  name: string;
  password: string;
  confirmPassword: string;
  [key: string]: any;
}

export function deserializeUpdateUserDto(json: string): UpdateUserDto {
  const data = JSON.parse(json) as UpdateUserDto;
  initUpdateUserDto(data);
  return data;
}

export function initUpdateUserDto(_data: UpdateUserDto) {
    return _data;
}

export function serializeUpdateUserDto(_data: UpdateUserDto | undefined) {
  if (_data) {
    _data = prepareSerializeUpdateUserDto(_data as UpdateUserDto);
  }
  return JSON.stringify(_data);
}

export function prepareSerializeUpdateUserDto(_data: UpdateUserDto): UpdateUserDto {
  const data: Record<string, any> = { ..._data };
  return data as UpdateUserDto;
}
import type { AxiosError } from 'axios'

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

export function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

export function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}

//-----/Types.File-----
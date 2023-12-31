//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client.types';
import type { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { throwException, isAxiosError } from '../axios-client.types';
import { getAxios, getBaseUrl } from './helpers';

export function createUser(body: Types.CreateUserDto, config?: AxiosRequestConfig | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/users";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = Types.serializeCreateUserDto(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigCreateUser,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            ..._requestConfigCreateUser?.headers,
            "Content-Type": "application/json",
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processCreateUser(_response);
    });
}

function processCreateUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 201) {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

export function getAllUsers(config?: AxiosRequestConfig | undefined): Promise<Types.GetUserDto[]> {
    let url_ = getBaseUrl() + "/users";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigGetAllUsers,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigGetAllUsers?.headers,
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetAllUsers(_response);
    });
}

function processGetAllUsers(response: AxiosResponse): Promise<Types.GetUserDto[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        if (Array.isArray(resultData200)) {
              result200 = resultData200.map(item => 
                Types.initGetUserDto(item)
              );
            }
        return Promise.resolve<Types.GetUserDto[]>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.GetUserDto[]>(null as any);
}

export function getUser(id: string, config?: AxiosRequestConfig | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/users/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigGetUser,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigGetUser?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetUser(_response);
    });
}

function processGetUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

export function updateUser(id: string, body: Types.UpdateUserDto, config?: AxiosRequestConfig | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/users/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = Types.serializeUpdateUserDto(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigUpdateUser,
        ...config,
        data: content_,
        method: "PATCH",
        url: url_,
        headers: {
            ..._requestConfigUpdateUser?.headers,
            "Content-Type": "application/json",
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processUpdateUser(_response);
    });
}

function processUpdateUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}

export function removeUser(id: string, config?: AxiosRequestConfig | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/users/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigRemoveUser,
        ...config,
        method: "DELETE",
        url: url_,
        headers: {
            ..._requestConfigRemoveUser?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processRemoveUser(_response);
    });
}

function processRemoveUser(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        return Promise.resolve<void>(null as any);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
}
let _requestConfigCreateUser: Partial<AxiosRequestConfig> | null;
export function getCreateUserRequestConfig() {
  return _requestConfigCreateUser;
}
export function setCreateUserRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigCreateUser = value;
}
export function patchCreateUserRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigCreateUser = patch(_requestConfigCreateUser ?? {});
}

let _requestConfigGetAllUsers: Partial<AxiosRequestConfig> | null;
export function getGetAllUsersRequestConfig() {
  return _requestConfigGetAllUsers;
}
export function setGetAllUsersRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigGetAllUsers = value;
}
export function patchGetAllUsersRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigGetAllUsers = patch(_requestConfigGetAllUsers ?? {});
}

let _requestConfigGetUser: Partial<AxiosRequestConfig> | null;
export function getGetUserRequestConfig() {
  return _requestConfigGetUser;
}
export function setGetUserRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigGetUser = value;
}
export function patchGetUserRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigGetUser = patch(_requestConfigGetUser ?? {});
}

let _requestConfigUpdateUser: Partial<AxiosRequestConfig> | null;
export function getUpdateUserRequestConfig() {
  return _requestConfigUpdateUser;
}
export function setUpdateUserRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigUpdateUser = value;
}
export function patchUpdateUserRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigUpdateUser = patch(_requestConfigUpdateUser ?? {});
}

let _requestConfigRemoveUser: Partial<AxiosRequestConfig> | null;
export function getRemoveUserRequestConfig() {
  return _requestConfigRemoveUser;
}
export function setRemoveUserRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigRemoveUser = value;
}
export function patchRemoveUserRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigRemoveUser = patch(_requestConfigRemoveUser ?? {});
}
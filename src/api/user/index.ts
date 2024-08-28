import {loginForm, loginResData, useResData} from "./type.ts";
import request from "../../utils/request.ts";

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/infog',
}

export const reqLogin = (data: loginForm) =>
    request.post<any, loginResData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
    request.get<any, useResData>(API.USERINFO_URL)

//退出登录
// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
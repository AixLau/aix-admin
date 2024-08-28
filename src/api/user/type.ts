// 登录传递参数
export interface loginForm {
    username: string,
    password: string
}

export interface dataType {
    token: string
}

// 登录接口返回数据
export interface loginResData {
    code: number,
    data: string
}

interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: Array<string>,
    buttons: Array<string>,
    routes: Array<string>
}

interface user {
    checkUser: userInfo
}

export interface useResData {
    code: number,
    data: user
}



import cookie from "cookie";
import Cookies from "js-cookie";

// export const getTokenSSRAndCSS = (ctx) => {
//     let token = '';
//     let userToken = null;
//     if(typeof window === "undefined") {
//         // SSR
//         const cookieStr = ctx?.req?.headers?.cookie || '';
//         token = cookie.parse(cookieStr).token;
//         userToken = parseJwt(token);
//     } else {
//         // CSR
//         token = Cookies.get('token') || '';
//     }

//     return [token, userToken];
// }

// export const validateEmail = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

export const ChangeMoney = (x) => {
    if (x === null || x === undefined) return '';
    return x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
import baseUserAxios from "../plugins/axios";
const baseRoute = "auth/"
const authApis = {
    login: (data) => {
        console.log(data);
        return baseUserAxios.post(baseRoute + 'login', data)
    },
    changePassword: (data) => {
        return baseUserAxios.post(baseRoute + 'confirm-account/change-password', data)
    },
    confirmAccount: (data) => {
        return baseUserAxios.post(baseRoute + 'confirm-account', data)
    },
};

export default authApis;
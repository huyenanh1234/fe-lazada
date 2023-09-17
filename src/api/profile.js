import baseUserAxios from "../plugins/axios";
import { getHeaderWithAuthorizationBearerToken } from "../helpers/common";
const baseRoute = 'profile/'

const profileApis = {
    show: () => {
        return baseUserAxios.get(baseRoute, {
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    update: (data) => {
        return baseUserAxios.put(baseRoute, data,{
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
};

export default profileApis;
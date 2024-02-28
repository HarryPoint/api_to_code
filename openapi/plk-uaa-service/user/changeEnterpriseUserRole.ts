import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/用户账号相关/changeEnterpriseUserRoleUsingPOST
*/
export default function fetchMethod(options: { data: IRequestForAnEnterpriseUserToChangeRoles }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/user/changeEnterpriseUserRole",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业用户更换角色请求 */
export interface IRequestForAnEnterpriseUserToChangeRoles {
    /** id */
    id: string;
    /** 更换角色id集 */
    roleIds: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

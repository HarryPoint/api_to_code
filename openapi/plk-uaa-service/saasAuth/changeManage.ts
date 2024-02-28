import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/changeManageUsingPOST
*/
export default function fetchMethod(options: { data: ITransferSuperAdministratorDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/saasAuth/changeManage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 转让超级管理员 DTO */
export interface ITransferSuperAdministratorDTO {
    /** 验证码 */
    verCode?: string;
    /** 转让用户id */
    changeUserId: string;
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

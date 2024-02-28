import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/服务Api相关/editBatchUsingPOST
*/
export default function fetchMethod(options: { data: IServeauthrequestdto }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/serveApi/editBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ServeAuthRequestDTO */
export interface IServeauthrequestdto {
    /** undefined */
    serveCode?: string;
    /** undefined */
    serveApis?: IRequestdto[];
}
/** ServeApiRequestDTO */
export interface IRequestdto {
    /** undefined */
    api?: string;
    /** undefined */
    isLogin?: ERequestdto_isLogin;
    /** undefined */
    checkMode?: ERequestdto_checkMode;
    /** undefined */
    permissionCode?: string;
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

export enum ERequestdto_isLogin {
    Y = "Y",
    N = "N"
}

export enum ERequestdto_checkMode {
    AND = "AND",
    OR = "OR"
}

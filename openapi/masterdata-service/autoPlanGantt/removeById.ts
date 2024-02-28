import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/甘特图相关/removeByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/masterdata-service/autoPlanGantt/removeById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«boolean» */
export interface IJSONResultboolean {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: boolean;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

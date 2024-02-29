import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17600/doc.html#/default/消息相关/getNotReadCountUsingGET
*/
export default function fetchMethod(options: { params: { clientCode?: string; enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultint>(
        {
            url: "/message-notification-service/message/getNotReadCount",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«int» */
export interface IJSONResultint {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/编码同步任务相关/applyCode10000UsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/masterdata-service/codeSyncTask/applyCode10000",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«string»» */
export interface IJSONResultListstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

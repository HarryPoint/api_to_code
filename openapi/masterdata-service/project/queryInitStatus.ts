import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目相关/queryInitStatusUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultstring2>(
        {
            url: "/masterdata-service/project/queryInitStatus",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string»_2 */
export interface IJSONResultstring2 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('INITIALIZING' | 'COMPLETE' | 'FAILED');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

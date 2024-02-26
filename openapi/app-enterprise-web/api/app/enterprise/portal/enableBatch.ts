import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/门户相关/enableBatchUsingPOST_3
*/
export default function fetchMethod(options: { data: IPortalEnabledRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/portal/enableBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 门户启用请求DTO */
export interface IPortalEnabledRequestDTO {
    /** 门户ID列表 */
    idList?: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

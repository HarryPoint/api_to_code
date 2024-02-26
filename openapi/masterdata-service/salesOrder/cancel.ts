import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/销售订单相关/cancelUsingPOST_2
*/
export default function fetchMethod(data: IIdInformation, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/salesOrder/cancel",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** id信息 */
export interface IIdInformation {
    /** id */
    id?: number;
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
    ts?: number;
}

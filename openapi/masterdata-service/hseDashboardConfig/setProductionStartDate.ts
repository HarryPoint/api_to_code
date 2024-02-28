import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/Hse大屏配置相关/setProductionStartDateUsingPOST
*/
export default function fetchMethod(options: { data: IProductionStartDateSetRequest }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/hseDashboardConfig/setProductionStartDate",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产开始日期-设置请求 */
export interface IProductionStartDateSetRequest {
    /** 生产开始日期 */
    productionStartDate?: number;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}

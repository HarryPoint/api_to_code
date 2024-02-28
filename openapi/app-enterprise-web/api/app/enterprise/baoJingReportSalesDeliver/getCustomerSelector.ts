import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/宝晶报表(销售发货分析)相关/getCustomerSelectorUsingGET_6
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListClientSelectsToReturnVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/getCustomerSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«客户选择返回VO»» */
export interface IJSONResultListClientSelectsToReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheCustomerChoosesToReturnToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 客户选择返回VO */
export interface ITheCustomerChoosesToReturnToVO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}

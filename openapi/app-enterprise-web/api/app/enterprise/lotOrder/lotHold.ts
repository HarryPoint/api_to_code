import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/lotHoldUsingPOST
*/
export default function fetchMethod(options: { data: IBatchWithholdDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/lotHold",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次扣留DTO */
export interface IBatchWithholdDTO {
    /** 批次id */
    id: string;
    /** 生产任务id */
    produceTaskId: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 备注 */
    remark?: string;
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
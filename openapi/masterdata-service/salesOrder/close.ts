import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/销售订单相关/closeUsingPOST_2
*/
export default function fetchMethod(options: { data: ISalesOrdersCloseTheDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/salesOrder/close",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 销售订单关闭 DTO */
export interface ISalesOrdersCloseTheDTO {
    /** 销售订单id */
    salesOrderId: string;
    /** 登录密码 */
    loginPassword?: string;
    /** 关闭原因 */
    closeRemark?: string;
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

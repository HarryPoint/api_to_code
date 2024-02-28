import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16400/doc.html#/default/销售订单相关/selectedMatchStandardTechnologyUsingPOST
*/
export default function fetchMethod(options: { data: ISelectedMatchStandardTechnologyRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrder/transferToProduceOrder/selectedMatchStandardTechnology",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** SelectedMatchStandardTechnologyRequestDTO */
export interface ISelectedMatchStandardTechnologyRequestDTO {
    /** 销售订单明细ID */
    salesOrderDetailId?: string;
    /** undefined */
    standardTechnologyId: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}

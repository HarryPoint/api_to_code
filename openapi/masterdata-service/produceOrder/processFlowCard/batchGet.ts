import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/batchGetProcessFlowCardUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProcessFlowCardDTO>(
        {
            url: "/masterdata-service/produceOrder/processFlowCard/batchGet",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProcessFlowCardDTO»» */
export interface IJSONResultListProcessFlowCardDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessFlowCardDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProcessFlowCardDTO */
export interface IProcessFlowCardDTO {
    /** undefined */
    produceOrderId?: string;
    /** undefined */
    produceOrderCode?: string;
    /** undefined */
    salesOrderCode?: string;
    /** undefined */
    totalProduceOrderQuantity?: number;
    /** undefined */
    standardSpecifications?: string;
    /** undefined */
    customerName?: string;
    /** undefined */
    textureOfMaterial?: string;
    /** undefined */
    deliveryDate?: string;
    /** undefined */
    blankingSize?: string;
    /** undefined */
    blankingWight?: string;
    /** undefined */
    heatNo?: string;
    /** undefined */
    machinedDimensions?: string;
    /** undefined */
    forgingDimensions?: string;
    /** undefined */
    heatTreatment?: string;
    /** undefined */
    roughCar?: string;
    /** undefined */
    flawDetection?: string;
    /** undefined */
    fineTurning?: string;
    /** undefined */
    readyTime?: string;
    /** undefined */
    machiningTime?: string;
    /** undefined */
    drill?: string;
    /** undefined */
    sign?: string;
    /** undefined */
    orderNo?: string;
    /** undefined */
    createUserName?: string;
    /** undefined */
    serialNo?: string;
    /** undefined */
    customNumber?: string;
    /** undefined */
    isEmergentOrder?: string;
}

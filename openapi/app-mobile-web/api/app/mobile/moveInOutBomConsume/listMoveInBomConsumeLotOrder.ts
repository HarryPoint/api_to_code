import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:17400/doc.html#/default/进出料bom消耗相关/listMoveInBomConsumeLotOrderUsingPOST
*/
export default function fetchMethod(options: { data: IIncomingBomConsumptionBatchOrderQueryDTO }, extraOptions?: any) {
    return http<IJSONResultListIncomingBomConsumedBatchResponseDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutBomConsume/listMoveInBomConsumeLotOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料bom消耗批次订单查询DTO */
export interface IIncomingBomConsumptionBatchOrderQueryDTO {
    /** 生产任务id */
    produceTaskId: string;
    /** 批次号、物料编号 */
    code?: string;
}
/** JSONResult«List«进料bom消耗批次响应DTO»» */
export interface IJSONResultListIncomingBomConsumedBatchResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIncomingBomConsumesBatchResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料bom消耗批次响应DTO */
export interface IIncomingBomConsumesBatchResponseDTO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 批次id */
    lotOrderId?: string;
    /** 批次编号 */
    lotOrderCode?: string;
}
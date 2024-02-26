import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料批次相关/listCanMoveOutLotOrderUsingPOST
*/
export default function fetchMethod(data: IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches, extraOptions?: any) {
    return http<IJSONResultListDeliverableBatchResponseDto>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutLotOrder/listCanMoveOutLotOrder",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 可进出料批次查询dto */
export interface IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches {
    /** 生产任务id */
    produceTaskId: number;
    /** 批次号 */
    lotOrderCode: string;
}
/** JSONResult«List«可出料批次响应dto»» */
export interface IJSONResultListDeliverableBatchResponseDto {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IReleasableBatchResponseDto[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 可出料批次响应dto */
export interface IReleasableBatchResponseDto {
    /** 批次id */
    id: number;
    /** 批次号 */
    lotOrderCode: string;
    /** 可出料数量 */
    canOptQuantity: number;
}
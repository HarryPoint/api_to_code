import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.139.107:16400/doc.html#/default/中航机器人生产订单相关/getMaterialRecipientListByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListResponseDtoForObtainingMaterialsForAProductionOrder>(
        {
            url: "/app-enterprise-web/api/app/enterprise/zhongHangProduceOrder/getMaterialRecipientListById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产订单物料领用响应dto»» */
export interface IJSONResultListResponseDtoForObtainingMaterialsForAProductionOrder {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderMaterialRequisitionResponseDto[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单物料领用响应dto */
export interface IProductionOrderMaterialRequisitionResponseDto {
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 生产物料id */
    masterMaterialId?: string;
    /** 生产物料名称 */
    masterMaterialName?: string;
    /** 生产物料编号 */
    masterMaterialCode?: string;
    /** 生产物料单位id */
    masterMaterialUnitId?: string;
    /** 生产物料单位名称 */
    masterMaterialUnitName?: string;
    /** 计划生产数量 */
    totalCount?: number;
    /** 子物料id */
    childMaterialId?: string;
    /** 子物料名称 */
    childMaterialName?: string;
    /** 子物料编号 */
    childMaterialCode?: string;
    /** 规格型号 */
    childMaterialSpec?: string;
    /** 子物料单位id */
    childMaterialUnitId?: string;
    /** 子物料单位名称 */
    childMaterialUnitName?: string;
    /** 当前库存 */
    curWarehouseCount?: number;
    /** 所需物料数量 */
    needCount?: number;
    /** 待领数量 */
    waitRecipientCount?: number;
    /** 已领数量 */
    recipientCount?: number;
    /** 差异数量 */
    diffCount?: number;
    /** 关联领用单列表 */
    recipientOrderList?: IProductionOrderMaterialRequisitionDetailsRespondToDto[];
}
/** 生产订单物料领用明细响应dto */
export interface IProductionOrderMaterialRequisitionDetailsRespondToDto {
    /** 领用单id */
    recipientOrderId?: string;
    /** 领用单编号 */
    recipientOrderCode?: string;
}
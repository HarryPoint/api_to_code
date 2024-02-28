import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/销售订单相关/getCloseInfoByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultSalesOrderClosureInformationIsReturnedToVO>(
        {
            url: "/app-mobile-web/api/app/mobile/salesOrder/getCloseInfoById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«销售订单关闭信息返回VO» */
export interface IJSONResultSalesOrderClosureInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISalesOrderClosureInformationIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 销售订单关闭信息返回VO */
export interface ISalesOrderClosureInformationIsReturnedToVO {
    /** id */
    id?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 是否存在未关闭的生产订单 */
    hasNotCloseProduceOrder?: ESalesOrderClosureInformationIsReturnedToVO_hasNotCloseProduceOrder;
    /** 是否存在未处理的审批事件 */
    hasWaitProduceHandle?: ESalesOrderClosureInformationIsReturnedToVO_hasWaitProduceHandle;
    /** 是否存在未处理完的委外订单 */
    hasSurplusProduceEntrust?: ESalesOrderClosureInformationIsReturnedToVO_hasSurplusProduceEntrust;
    /** 明细 */
    details?: ISalesOrderDetailsCloseInformationBackToVO[];
}
/** 销售订单明细关闭信息返回VO */
export interface ISalesOrderDetailsCloseInformationBackToVO {
    /** 明细id */
    id?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 总销售数量(销售订单需求数量) */
    totalCount?: number;
    /** 总合格产出数量(产出完成) */
    totalProduceCount?: number;
    /** 未转换数量 */
    notConvertCount?: number;
}

export enum ESalesOrderClosureInformationIsReturnedToVO_hasNotCloseProduceOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESalesOrderClosureInformationIsReturnedToVO_hasWaitProduceHandle {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESalesOrderClosureInformationIsReturnedToVO_hasSurplusProduceEntrust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

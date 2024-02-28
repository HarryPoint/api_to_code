import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序相关/getProduceCapacityReportPageUsingPOST
*/
export default function fetchMethod(options: { data: ICapacityUtilizationReportQueryingDtos, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationCapacityUtilizationReportVO>(
        {
            url: "/masterdata-service/process/getProduceCapacityReportPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产能利用率报表查询DTO */
export interface ICapacityUtilizationReportQueryingDtos {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id列表 */
    processIdList?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 日期 -- 开始时间 */
    beginTime: string;
    /** 天数 */
    dayCount?: number;
    /** 日期 -- 结束时间 */
    endTime: string;
    /** undefined */
    produceTaskIds?: string[];
    /** undefined */
    panPanProduceOrderCompleteType?: ECapacityUtilizationReportQueryingDtos_panPanProduceOrderCompleteType;
    /** 是否按天数过滤 */
    isFilterByDayCount?: boolean;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«产能利用率报表VO»» */
export interface IJSONResultPagingInformationCapacityUtilizationReportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationCapacityUtilizationReportVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«产能利用率报表VO» */
export interface IPagingInformationCapacityUtilizationReportVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ICapacityUtilizationReportVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationCapacityUtilizationReportVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationCapacityUtilizationReportVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 产能利用率报表VO */
export interface ICapacityUtilizationReportVO {
    /** 工序Id */
    processId?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序名称 */
    processName?: string;
    /** 日均产能 */
    dayCapacity?: number;
    /** 统计天数 */
    dayNum?: number;
    /** 累计产能 */
    totalCapacity?: number;
    /** 计划生产数量 */
    planProduceNum?: number;
    /** 实际生产数量 */
    realProduceNum?: number;
    /** 计划完成率 */
    planCompleteRate?: number;
    /** 产能利用率 */
    capacityCompleteRate?: number;
    /** 实际工作人数 */
    realWorkUserQuantity?: number;
    /** 实际工时 */
    realWorkTimeQuantity?: number;
    /** undefined */
    actualProduceOrderCount?: number;
    /** undefined */
    planProduceOrderCount?: number;
    /** 当日计划完工量 */
    curPlanCompleteNum?: number;
}

export enum ECapacityUtilizationReportQueryingDtos_panPanProduceOrderCompleteType {
    ACTUAL_MOVE_OUT_QUANTITY = "ACTUAL_MOVE_OUT_QUANTITY",
    PLAN_ORDER_MOVE_OUT_QUANTITY = "PLAN_ORDER_MOVE_OUT_QUANTITY"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationCapacityUtilizationReportVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationCapacityUtilizationReportVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

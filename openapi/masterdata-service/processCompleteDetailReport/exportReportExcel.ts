import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/工序完成明细表/exportReportExcelUsingPOST
*/
export default function fetchMethod(options: { data: IProcedureCompletionListQuery }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/processCompleteDetailReport/exportReportExcel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序完成明细表查询 */
export interface IProcedureCompletionListQuery {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序ids */
    processIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 配置号 */
    configNo?: string;
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 日期 -- 开始 */
    beginTime: number;
    /** 日期 -- 结束 */
    endTime: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 物料id集合 */
    materialIdList?: string[];
    /** 实际完工量 */
    realProduceNumRange?: number[];
    /** 是否主订单 */
    isMaster?: EProcedureCompletionListQuery_isMaster;
    /** 生产任务编号 */
    taskNo?: string;
    /** 报工人员集合 */
    reportUserList?: Record<string, any>[];
    /** 当日计划量 */
    planProduceNumRange?: number[];
    /** 当日计划完工量 */
    curPlanCompleteNumRange?: number[];
    /** 任务计划开工日期 */
    taskBeginTime?: number;
    /** 任务计划开工日期 */
    taskEndTime?: number;
    /** 是否根据排班日期查询 */
    isQueryByCalendar?: boolean;
    /** 排班日期集合 */
    calendarDayList?: any[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcedureCompletionListQuery_isMaster {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

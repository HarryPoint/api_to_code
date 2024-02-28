import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryQualityWorkPlanCompletionRateUsingPOST
*/
export default function fetchMethod(options: { data: IQmsLargeScreenTimeIntervalRequest }, extraOptions?: any) {
    return http<IJSONResultListQualityWorkPlanCompletionRateReturnToDTO>(
        {
            url: "/masterdata-service/qmsDashboard/queryQualityWorkPlanCompletionRate",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** qms大屏时间区间请求 */
export interface IQmsLargeScreenTimeIntervalRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: string;
    /** 查询日期的结束 */
    dateRangeEnd?: string;
    /** 查询日期区间类型 */
    dateRangeType?: EQmsLargeScreenTimeIntervalRequest_dateRangeType;
}
/** JSONResult«List«质量工作计划完成率返回DTO»» */
export interface IJSONResultListQualityWorkPlanCompletionRateReturnToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityWorkPlanCompletionRateReturnedToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量工作计划完成率返回DTO */
export interface IQualityWorkPlanCompletionRateReturnedToDTO {
    /** 责任部门 */
    departmentName?: string;
    /** 完成率 */
    completionRate?: number;
}

export enum EQmsLargeScreenTimeIntervalRequest_dateRangeType {
    /** 年 */
    YEAR = "YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

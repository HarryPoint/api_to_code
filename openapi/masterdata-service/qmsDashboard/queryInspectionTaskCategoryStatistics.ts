import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryInspectionTaskCategoryStatisticsUsingGET
*/
export default function fetchMethod(options: { params: { dateBegin?: string; dateEnd?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnsTheStatisticsOnTheExecutionCategoriesOfTheLargeScreenCheckPlan>(
        {
            url: "/masterdata-service/qmsDashboard/queryInspectionTaskCategoryStatistics",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«大屏检验计划执行类别统计返回»» */
export interface IJSONResultListReturnsTheStatisticsOnTheExecutionCategoriesOfTheLargeScreenCheckPlan {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ILargeScreenCheckPlanExecutionCategoryStatisticsReturned[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 大屏检验计划执行类别统计返回 */
export interface ILargeScreenCheckPlanExecutionCategoryStatisticsReturned {
    /** 类别 */
    category?: string;
    /** 进行中任务量 */
    handlingQuantity?: number;
    /** 已完成任务量 */
    completeQuantity?: number;
    /** 超期任务量 */
    overdueQuantity?: number;
}

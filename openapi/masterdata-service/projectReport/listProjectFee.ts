import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/listProjectFeeUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectCostReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectFee",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象 */
export interface IItemNameNumberPublicQueryObject {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 条数 */
    limit?: number;
    /** 项目计划ids */
    projectPlanIds?: string[];
    /** 项目成员id集合 */
    ids?: string[];
    /** undefined */
    projectIds?: string[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目费用报表响应对象»» */
export interface IJSONResultListProjectCostReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectExpenseReportResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目费用报表响应对象 */
export interface IProjectExpenseReportResponseObject {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目类型id */
    projectTypeId?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: EProjectExpenseReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectExpenseReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    projectManagerId?: string;
    /** 项目年度预算（元） */
    projectAnnualBudget?: number;
    /** 执行年月 */
    executeTime?: number;
    /** 本月预算执行（元） */
    budgetExecute?: number;
    /** 本月预算执行率 */
    budgetExecuteRate?: number;
    /** 月度资金计划（元） */
    monthFundPlan?: number;
    /** 月度资金计划执行（元） */
    monthFundPlanExecute?: number;
    /** 月度资金计划执行率 */
    monthFundPlanExecuteRate?: number;
    /** 填报人名称 */
    reportUserName?: string;
    /** 填报部门名称 */
    reportDeptName?: string;
    /** 填报时间 */
    reportTime?: number;
    /** undefined */
    reportUserId?: string;
    /** undefined */
    reportDeptId?: string;
}

export enum EProjectExpenseReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectExpenseReportResponseObject_status {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectTaskReportUsingPOST
*/
export default function fetchMethod(data: QueryProjectTaskReport, extraOptions?: any) {
    return http<IJSONResultPagingInformationProjectTaskReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectTaskReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目任务报表响应对象»» */
export interface IJSONResultPagingInformationProjectTaskReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationItemTaskReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«项目任务报表响应对象» */
export interface IPageInformationItemTaskReportResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProjectTaskReportResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 项目任务报表响应对象 */
export interface IProjectTaskReportResponseObject {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目类型id */
    projectTypeId?: number;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 优先级 */
    priorityName?: string;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: string;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
    /** undefined */
    projectManagerId?: number;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** 任务状态 */
    taskStatus?: string;
    /** 任务负责人名称 */
    leaderUserNameList?: string[];
    /** 任务开始日期 */
    planBeginTime?: string;
    /** 任务截止日期 */
    planEndTime?: string;
    /** 前置任务名称列表 */
    preTaskNameList?: string[];
    /** 上级任务名称 */
    parentName?: string;
    /** 任务完成时间 */
    actualEndTime?: string;
    /** 任务进度 */
    taskProgress?: number;
    /** 项目计划id */
    projectPlanId?: number;
    /** 项目计划编号 */
    projectPlanCode?: string;
    /** 项目计划名称 */
    projectPlanName?: string;
    /** undefined */
    parentId?: number;
    /** undefined */
    projectStageId?: number;
    /** undefined */
    projectTaskTypeId?: number;
    /** undefined */
    leaderUserIds?: Record<string, any>[];
    /** undefined */
    preTaskIds?: Record<string, any>[];
    /** undefined */
    priority?: string;
}

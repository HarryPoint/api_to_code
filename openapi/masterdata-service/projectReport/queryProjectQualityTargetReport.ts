import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectQualityTargetReportUsingPOST
*/
export default function fetchMethod(options: { data: QueryProjectQualityTargetReport }, extraOptions?: any) {
    return http<IJSONResultPagingInformationItemQualityTargetReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectQualityTargetReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目质量目标报表响应对象»» */
export interface IJSONResultPagingInformationItemQualityTargetReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationItemQualityTargetReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«项目质量目标报表响应对象» */
export interface IPageInformationItemQualityTargetReportResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProjectQualityObjectiveReportResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 项目质量目标报表响应对象 */
export interface IProjectQualityObjectiveReportResponseObject {
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
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: ('Y' | 'N');
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: ('HANDLING' | 'COMPLETE' | 'NOT_PASS' | 'STAGING' | 'INVALID');
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
    /** undefined */
    projectManagerId?: number;
    /** 负责人名称列表 */
    responsibleNameList?: string[];
    /** 开始日期 */
    beginTime?: string;
    /** 截至日期 */
    endTime?: string;
    /** 实际完成时间 */
    actualCompleteTime?: string;
    /** undefined */
    responsibleUserIds?: Record<string, any>[];
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板-配置页面相关/getUsingGET_4
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultProposalDashboardConfigResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboardConfig/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProposalDashboardConfigResponseDTO» */
export interface IJSONResultProposalDashboardConfigResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProposalDashboardConfigResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ProposalDashboardConfigResponseDTO */
export interface IProposalDashboardConfigResponseDTO {
    /** ID */
    id?: number;
    /** 建议部门ID列表 */
    proposalDepartmentIdList?: number[];
    /** 建议部门 ID => Name */
    proposalDepartmentList?: IBasicData[];
    /** 项目部门ID列表 */
    projectDepartmentIdList?: number[];
    /** 项目部门 ID => Name */
    projectDepartmentList?: IBasicData[];
    /** 未完成目标值 */
    unCompleteTargetValue?: number;
    /** 已完成目标值 */
    completeTargetValue?: number;
    /** 未完成项目数量的统计区间配置 */
    unCompleteProjectDashboardStatisticsConfigList?: IProposalDashboardStatisticsConfigResponseDTO[];
    /** 已完成项目数量的统计区间配置 */
    completedProjectDashboardStatisticsConfigList?: IProposalDashboardStatisticsConfigResponseDTO[];
}
/** 基础数据 */
export interface IBasicData {
    /** ID */
    id?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
}
/** ProposalDashboardStatisticsConfigResponseDTO */
export interface IProposalDashboardStatisticsConfigResponseDTO {
    /** ID */
    id?: number;
    /** 统计类型 */
    type?: ('RANGE' | 'GE' | 'GT');
    /** 开始值 - 适用于数值区间、数值大于等于、数值大于 */
    beginValue?: number;
    /** 结束值 */
    endValue?: number;
    /** 项目归属的完成状态 - 未完成项目， 已完成项目 */
    projectCompleteStatus?: ('UN_COMPLETED' | 'COMPLETED');
}

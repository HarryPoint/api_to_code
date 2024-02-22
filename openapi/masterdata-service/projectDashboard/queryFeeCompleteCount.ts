import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目大屏相关/queryFeeCompleteCountUsingPOST
export function fetchMethod(data: IProjectKanbanQueryDto) {
    return post({
      url: "/masterdata-service/projectDashboard/queryFeeCompleteCount",
      data,
    });
}
// 项目看板查询dto
export interface IProjectKanbanQueryDto {
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 项目大类
    projectCategory: string;
    // undefined
    projectTypeIds: number[];
    // undefined
    excludeProjectIds: number[];
}
// JSONResult«项目费用统计响应对象»
export interface IJSONResultProjectCostStatisticsResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectCostStatisticsResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用统计响应对象
export interface IProjectCostStatisticsResponseObject {
    // 项目预算（元）
    projectAnnualBudget: number;
    // 预算执行（元）
    budgetExecute: number;
    // 预算执行率
    budgetExecuteRate: number;
    // 资金计划（元）
    monthFundPlan: number;
    // 资金计划执行（元）
    monthFundPlanExecute: number;
    // 资金计划执行率
    fundPlanExecuteRate: number;
}

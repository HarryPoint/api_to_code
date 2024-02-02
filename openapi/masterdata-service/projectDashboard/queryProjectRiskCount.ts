// 项目看板查询dto
export interface I项目看板查询dto {
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
// JSONResult«项目风险统计响应对象»
export interface IJSONResult项目风险统计响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目风险统计响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目风险统计响应对象
export interface I项目风险统计响应对象 {
    // 风险总数量
    totalQuantity: number;
    // 已完成数量
    completeQuantity: number;
    // 超期数量
    overdueQuantity: number;
    // 低风险数量
    lowQuantity: number;
    // 中风险数量
    midQuantity: number;
    // 高风险数量
    highQuantity: number;
    // 未完成数量
    unCompleteQuantity: number;
    // 低风险完成数量
    lowCompleteQuantity: number;
    // 中风险完成数量
    midCompleteQuantity: number;
    // 高风险完成数量
    highCompleteQuantity: number;
    // 低风险未完成数量
    lowUnCompleteQuantity: number;
    // 中风险未完成数量
    midUnCompleteQuantity: number;
    // 高风险未完成数量
    highUnCompleteQuantity: number;
}

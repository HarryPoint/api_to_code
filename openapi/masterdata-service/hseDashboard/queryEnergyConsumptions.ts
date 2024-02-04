// 能源消耗查询请求
export interface I能源消耗查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«能源消耗查询响应»»
export interface IJSONResultList能源消耗查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I能源消耗查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 能源消耗查询响应
export interface I能源消耗查询响应 {
    // ID
    id: number;
    // 年份
    year: string;
    // 能源消耗总量（万吨标煤）
    totalEnergyConsumption: number;
    // 万元产值综合耗能（吨/万元）
    comprehensiveEnergyConsumption: number;
}
// http://47.108.139.107:16700/doc.html#/default/员工工序相关/getUserAreaProcessSelectorUsingGET
// JSONResult«List«区域工序选择返回VO»»_1
export interface ITheJSONResultListAreaOperationSelectionReturnsVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAreaOperationSelectionReturnsVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 区域工序选择返回VO_1
export interface IAreaOperationSelectionReturnsVO1 {
    // id
    id: number;
    // 区域名称
    name: string;
    // 区域编号
    code: string;
    // 工序集合
    processList: IProcedureReturnsVOContainingTaskInformation[];
}
// 工序返回VO - 包含任务信息
export interface IProcedureReturnsVOContainingTaskInformation {
    // id
    id: number;
    // 工序名称
    name: string;
    // 工序编号
    code: string;
    // 已完成任务数
    taskCompleteQuantity: number;
    // 任务总数
    taskTotalQuantity: number;
}
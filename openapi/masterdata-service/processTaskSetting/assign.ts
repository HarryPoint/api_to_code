// http://47.108.139.107:16700/doc.html#/default/工序任务设置相关/assignUsingPOST
// 工序任务分配DTO
export interface IProcessTaskAssignmentDTO {
    // 工序ids
    processIds: number[];
    // 是否分配  Y 分配 N 不分配
    isAssign: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
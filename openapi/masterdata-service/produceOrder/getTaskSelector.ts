// JSONResult«List«生产任务选择信息返回VO»»
export interface IJSONResultList生产任务选择信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产任务选择信息返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务选择信息返回VO
export interface I生产任务选择信息返回VO {
    // id
    id: number;
    // 任务号
    taskNo: string;
    // 对应工序id
    processId: number;
    // 对应工序名称
    processName: string;
    // 对应工序编号
    processCode: string;
    // 对应班次id
    classShiftId: number;
    // 对应班次名称
    classShiftName: string;
    // 对应班次编号
    classShiftCode: string;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
}
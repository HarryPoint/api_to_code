// EditProducePlanAutoScheduleInputVO
export interface IEditProducePlanAutoScheduleInputVO {
    // 排期ID
    id: number;
    // 占用开始时间
    beginTime: string;
    // 占用结束时间
    endTime: string;
    // 占用原因
    reason: string;
    // 循环次数
    loopCount: number;
}
// JSONResult«boolean»
export interface IJSONResultboolean {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: boolean;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
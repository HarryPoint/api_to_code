// JSONResult«List«项目任务响应对象»»_2
export interface IJSONResultList项目任务响应对象_2 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目任务响应对象_3[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务响应对象_3
export interface I项目任务响应对象_3 {
    // 项目任务id
    id: number;
    // 任务编号
    code: string;
    // 任务名称
    name: string;
    // 项目任务类型名称
    projectTaskTypeName: string;
    // 任务进度
    taskProgress: number;
    // 任务开始日期
    planBeginTime: string;
    // 任务截止日期
    planEndTime: string;
    // 是否超期
    isOverdue: string;
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
    // undefined
    projectTaskTypeId: number;
}

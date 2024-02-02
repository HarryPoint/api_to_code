// 设备保养日历详情请求DTO
export interface I设备保养日历详情请求DTO {
    // 保养任务id
    taskId: number;
    // 设备保养计划明细id
    deviceMaintainDetailPlanId: number;
}
// JSONResult«设备保养日历响应DTO»
export interface IJSONResult设备保养日历响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备保养日历响应DTO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备保养日历响应DTO_1
export interface I设备保养日历响应DTO_1 {
    // 天
    day: string;
    // 天详情
    dayDetails: I设备保养日历响应DTO[];
}
// 设备保养日历响应DTO
export interface I设备保养日历响应DTO {
    // 保养任务id
    taskId: number;
    // 设备保养计划id
    deviceMaintainPlanId: number;
    // 设备保养计划明细id
    deviceMaintainDetailPlanId: number;
    // 设备编号
    deviceCode: string;
    // 设备名称
    deviceName: string;
    // 保养计划编号
    planCode: string;
    // 任务编号
    taskCode: string;
    // 保养类型
    maintainType: string;
    // 保养方案
    maintainSchemeName: string;
    // 计划开始时间
    planTaskStartDate: string;
    // 计划结束时间
    planTaskEndDate: string;
    // 任务开始时间
    taskStartDate: string;
    // 任务结束时间
    taskEndDate: string;
    // 保养人
    deviceEmployeeCapacityNames: string[];
    // 执行人
    executorName: string;
    // 任务状态
    taskStatus: string;
    // 返回类型
    resultType: string;
    // 查询状态
    queryStatus: string;
    // 保养内容
    maintainDetails: I保养内容返回DTO[];
    // 消耗备件
    maintainPartsDetails: I保养消耗备件返回DTO[];
}
// 保养内容返回DTO
export interface I保养内容返回DTO {
    // 保养项目
    maintainName: string;
    // 具体描述
    maintainDesc: string;
    // 保养执行记录
    executorRecord: string;
    // 保养情况
    situation: string;
    // 备注
    remark: string;
}
// 保养消耗备件返回DTO
export interface I保养消耗备件返回DTO {
    // 备件id
    devicePartsId: number;
    // 备件名称
    devicePartsName: string;
    // 备件编号
    devicePartsCode: string;
    // 备件单位
    devicePartsUnit: string;
    // 单位id
    devicePartsUnitId: number;
    // 计划消耗数量
    planConsumerQuantity: number;
    // 实际消耗数量
    consumerQuantity: number;
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/质检任务相关/getProduceTaskByNoUsingGET_2
*/
export default function fetchMethod(options: { params: { taskNo?: string } }, extraOptions?: any) {
    return http<IJSONResultTheProductionTaskReturnsVOForEmployeeDetails>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/getProduceTaskByNo",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产任务针对员工详情返回VO» */
export interface IJSONResultTheProductionTaskReturnsVOForEmployeeDetails {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTasksAreReturnedToVOForEmployeeDetails;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务针对员工详情返回VO */
export interface IProductionTasksAreReturnedToVOForEmployeeDetails {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: ('PRODUCE' | 'BACK');
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单id */
    salesOrderId?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应上工序步骤 */
    lastRoutingStep?: number;
    /** 对应上工序id */
    lastProcessId?: number;
    /** 对应上工序名称 */
    lastProcessName?: string;
    /** 对应上工序编号 */
    lastProcessCode?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应下工序步骤 */
    nextRoutingStep?: number;
    /** 对应下工序id */
    nextProcessId?: number;
    /** 对应下工序名称 */
    nextProcessName?: string;
    /** 对应下工序编号 */
    nextProcessCode?: string;
    /** 对应班次id */
    classShiftId?: number;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 对应班组id */
    classGroupId?: number;
    /** 对应班组名称 */
    classGroupName?: string;
    /** 对应班组编号 */
    classGroupCode?: string;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 当前完成数量 */
    currentCompleteQuantity?: number;
    /** 当前生产数量 */
    currentProduceQuantity?: number;
    /** 当前进料总数量 */
    currentMoveInQuantity?: number;
    /** 当前出料数量 */
    currentMoveOutQuantity?: number;
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 当前扣留数量 */
    currentHoldQuantity?: number;
    /** 当前返工数量 */
    currentBackQuantity?: number;
    /** 可进料数量 */
    canMoveInQuantity?: number;
    /** 可出料数量 */
    canMoveOutQuantity?: number;
    /** 可质检数量 */
    canQualityQuantity?: number;
    /** 可异常数量 */
    canExceptionQuantity?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 实际结束时间 */
    actualEndTime?: string;
    /** 状态 */
    status?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL');
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 可进料批次数 */
    canMoveInLotCount?: number;
    /** 是否需要质检 */
    isQuality?: ('Y' | 'N');
    /** 可出料批次数 */
    canMoveOutLotCount?: number;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo?: IProductionProcessPathStepSettingsReturnVO;
    /** 任务下发时间 */
    createTime?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 对应工艺路径 */
    routing?: string;
    /** 对应工艺卡信息 */
    produceTechnologyProcessSheetInfo?: IProductionProcessProcessCardInformationIsReturnedToDTO;
    /** 启用质量追溯 */
    enableQualityTraceability?: ('Y' | 'N');
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** id */
    id?: number;
    /** 进出站方式 */
    inOutType?: ('PART' | 'ALL');
    /** 是否允许直接出站 */
    allowDirectExit?: ('Y' | 'N');
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: ('Y' | 'N');
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: ('Y' | 'N');
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: ('Y' | 'N');
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: ('Y' | 'N');
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: ('Y' | 'N');
    /** 是否强制拆分批次 */
    forcedSplitLot?: ('Y' | 'N');
    /** 启用质量追溯 */
    enableQualityTraceability?: ('Y' | 'N');
    /** 启用批次 */
    enableLot?: ('Y' | 'N');
    /** 启用序列号 */
    enableSerialNo?: ('Y' | 'N');
    /** 启用外部码 */
    enableExternalCode?: ('Y' | 'N');
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: number;
    /** 是否有设备 */
    enableDevice?: ('Y' | 'N');
    /** 是否有模具 */
    enableMold?: ('Y' | 'N');
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: ('Y' | 'N');
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: ('Y' | 'N');
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: ('Y' | 'N');
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: ('Y' | 'N');
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: ('Y' | 'N');
}
/** 生产工艺工艺卡信息返回DTO */
export interface IProductionProcessProcessCardInformationIsReturnedToDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 生产工艺id */
    produceTechnologyId?: number;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 描述集合 */
    textList?: IProductionProcessProcessCardDetailsReturnedToDTO[];
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 工艺卡名称 */
    name?: string;
    /** 工艺卡编号 */
    code?: string;
    /** 工序id */
    processId?: number;
    /** 物料id */
    materialId?: number;
    /** 文件集合 */
    fileList?: IProductionProcessProcessCardDetailsReturnedToDTO[];
    /** 工序对应字段信息 */
    processFlowPathRpDatas?: IOperationsCorrespondToFieldDetailsVO[];
}
/** 生产工艺工艺卡明细返回DTO */
export interface IProductionProcessProcessCardDetailsReturnedToDTO {
    /** 明细id */
    id?: number;
    /** 明细类型 */
    type?: ('FILE' | 'TEXT' | 'INPUT');
    /** 明细名称/标题 */
    name: string;
    /** 明细编号 */
    code: string;
    /** 描述内容/备注 */
    remark?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件key */
    fileKey?: string;
    /** 文件完整url */
    fileUrl?: string;
}
/** 工序对应字段详情VO */
export interface IOperationsCorrespondToFieldDetailsVO {
    /** 关联字段code */
    fieldCode?: string;
    /** 关联字段名称 */
    fieldName?: string;
    /** 值 */
    value?: Record<string, any>;
}

import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务分配相关/getProduceTaskAssignPageForMobileUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskAssignmentQueryVOForMobile, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationProductionTaskAssignmentVOForMobile>(
        {
            url: "/masterdata-service/produceTaskAssign/getProduceTaskAssignPageForMobile",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务分配查询VO -- 针对mobile */
export interface IProductionTaskAssignmentQueryVOForMobile {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 任务类型 */
    types?: EProductionTaskAssignmentQueryVOForMobile_types_items[];
    /** 工序id */
    processId: string;
    /** 物料id */
    materialIds?: string[];
    /** 生产任务可操作类型 */
    optTypes?: EProductionTaskAssignmentQueryVOForMobile_optTypes_items[];
    /** 任务状态 */
    statusList?: EProductionTaskAssignmentQueryVOForMobile_statusList_items[];
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch?: string;
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime?: string;
    /** 工序id集合 */
    processIds?: string[];
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: EProductionTaskAssignmentQueryVOForMobile_moveInKeyParameterFillNeeds;
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos?: string[];
    /** 是否已分配 */
    isAssign?: EProductionTaskAssignmentQueryVOForMobile_isAssign;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: EProductionTaskAssignmentQueryVOForMobile_moveOutKeyParameterFillNeeds;
    /** 操作员id列表 */
    assignUserIds?: string[];
    /** 计划生产数量最低数量 */
    planProduceMinQuantity?: number;
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«生产任务分配VO -- 针对mobile»» */
export interface IJSONResultPageInformationProductionTaskAssignmentVOForMobile {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProductionTaskAssignmentVOForMobile;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«生产任务分配VO -- 针对mobile» */
export interface IPagingInformationProductionTaskAssignmentVOForMobile {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProductionTaskAssignmentVOForMobile[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProductionTaskAssignmentVOForMobile_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProductionTaskAssignmentVOForMobile_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 生产任务分配VO -- 针对mobile */
export interface IProductionTaskAssignmentVOForMobile {
    /** id */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 任务类型 */
    type?: EProductionTaskAssignmentVOForMobile_type;
    /** 任务类型描述 */
    typeDesc?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
    /** 对应生产工艺路径名称 */
    routingName?: string;
    /** 对应生产工艺路径编号 */
    routingCode?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应前生产工艺路径步骤id */
    lastRoutingStepId?: string;
    /** 对应上工序步骤 */
    lastRoutingStep?: number;
    /** 对应上工序id */
    lastProcessId?: string;
    /** 对应上工序名称 */
    lastProcessName?: string;
    /** 对应上工序编号 */
    lastProcessCode?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 对应班组id */
    classGroupId?: string;
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
    /** 当前报废数量 */
    currentScrapQuantity?: number;
    /** 可用数量 */
    canUseQuantity?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 实际结束时间 */
    actualEndTime?: number;
    /** 状态 */
    status?: EProductionTaskAssignmentVOForMobile_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务优先级 */
    priorityLevel?: number;
    /** 当前任务WIP是否有物料 */
    isWip?: EProductionTaskAssignmentVOForMobile_isWip;
    /** 可操作项列表 */
    canOpItemList?: EProductionTaskAssignmentVOForMobile_canOpItemList_items[];
    /** 可操作项列表拼接 */
    canOpItemListStr?: string;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: EProductionTaskAssignmentVOForMobile_moveInKeyParameterFillNeeds;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: EProductionTaskAssignmentVOForMobile_moveOutKeyParameterFillNeeds;
    /** 操作员列表 */
    assignUserList?: IIdNameNumberVO[];
    /** 是否已分配 */
    isAssign?: EProductionTaskAssignmentVOForMobile_isAssign;
    /** 生产订单 */
    produceOrder?: Record<string, Record<string, any>>;
    /** 批次信息 */
    lotOrders?: IProductionTaskBatchResponseDTOForMobileEnd[];
    /** 批次数量 */
    lotOrderNumber?: number;
    /** 当前步骤配置信息 - 用于前端判断各种情况逻辑 */
    stepSetInfo?: IProductionProcessPathStepSettingsReturnVO;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
/** 生产任务批次响应DTO(针对移动端) */
export interface IProductionTaskBatchResponseDTOForMobileEnd {
    /** 批次id */
    lotId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 批次总数量 */
    totalCount?: number;
}
/** 生产工艺路径步骤设置返回VO */
export interface IProductionProcessPathStepSettingsReturnVO {
    /** id */
    id?: string;
    /** 进出站方式 */
    inOutType?: EProductionProcessPathStepSettingsReturnVO_inOutType;
    /** 是否允许直接出站 */
    allowDirectExit?: EProductionProcessPathStepSettingsReturnVO_allowDirectExit;
    /** 进料时是否需要确认进料数量 */
    needConfirmMoveInQuantity?: EProductionProcessPathStepSettingsReturnVO_needConfirmMoveInQuantity;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastMold?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold;
    /** 进料时是否自动带入上一次录入模具信息 */
    autoBringOutLastDevice?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastDevice;
    /** 进料时是否自动带入上一次录入消耗物料信息 */
    autoBringOutLastBomConsume?: EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume;
    /** 进料时是否允许拆分批次 */
    allowSplitLot?: EProductionProcessPathStepSettingsReturnVO_allowSplitLot;
    /** 是否强制拆分批次 */
    forcedSplitLot?: EProductionProcessPathStepSettingsReturnVO_forcedSplitLot;
    /** 启用质量追溯 */
    enableQualityTraceability?: EProductionProcessPathStepSettingsReturnVO_enableQualityTraceability;
    /** 启用批次 */
    enableLot?: EProductionProcessPathStepSettingsReturnVO_enableLot;
    /** 启用序列号 */
    enableSerialNo?: EProductionProcessPathStepSettingsReturnVO_enableSerialNo;
    /** 启用外部码 */
    enableExternalCode?: EProductionProcessPathStepSettingsReturnVO_enableExternalCode;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
    /** 是否有设备 */
    enableDevice?: EProductionProcessPathStepSettingsReturnVO_enableDevice;
    /** 是否有模具 */
    enableMold?: EProductionProcessPathStepSettingsReturnVO_enableMold;
    /** 是否有进料bom消耗 */
    enableMoveInBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveInBomConsume;
    /** 是否有出料bom消耗 */
    enableMoveOutBomConsume?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume;
    /** 是否有进站关键参数 */
    enableMoveInKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter;
    /** 是否有出站关键参数 */
    enableMoveOutKeyParameter?: EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity;
}

export enum EProductionTaskAssignmentQueryVOForMobile_types_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}

export enum EProductionTaskAssignmentQueryVOForMobile_optTypes_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EProductionTaskAssignmentQueryVOForMobile_statusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EProductionTaskAssignmentQueryVOForMobile_moveInKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskAssignmentQueryVOForMobile_isAssign {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskAssignmentQueryVOForMobile_moveOutKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProductionTaskAssignmentVOForMobile_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProductionTaskAssignmentVOForMobile_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskAssignmentVOForMobile_type {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

export enum EProductionTaskAssignmentVOForMobile_status {
    /** 待处理 */
    WAIT = "WAIT",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 暂停中 */
    PAUSE = "PAUSE",
    /** 停止 */
    STOP = "STOP",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 已取消 */
    CANCEL = "CANCEL"
}

export enum EProductionTaskAssignmentVOForMobile_isWip {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskAssignmentVOForMobile_canOpItemList_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EProductionTaskAssignmentVOForMobile_moveInKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskAssignmentVOForMobile_moveOutKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskAssignmentVOForMobile_isAssign {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}

export enum EProductionProcessPathStepSettingsReturnVO_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_needConfirmMoveInQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastMold {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastDevice {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_autoBringOutLastBomConsume {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_allowSplitLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_forcedSplitLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableDevice {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMold {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveInBomConsume {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutBomConsume {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveInKeyParameter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_enableMoveOutKeyParameter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionProcessPathStepSettingsReturnVO_isGtPlannedQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产质检管理/getCountInfoByMaterialIdUsingGET
export function fetchMethod(params: { beginTime: string; endTime: string; materialId: string; enterpriseId: number }) {
    return get({
      url: "/masterdata-service/qualityProduceTask/getCountInfoByMaterialId",
      params,
    });
}
// JSONResult«质检物料校验信息VO»
export interface IJSONResultCheckInformationVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQcMaterialVerificationInformationVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检物料校验信息VO
export interface IQcMaterialVerificationInformationVO {
    // 质检任务信息
    qualityProduceTask: IQualityProduceTaskVO;
    // 仓库质检任务信息
    qualityStorageTask: IQualityStorageTaskVO;
    // 质检方案质检项关联map， key：质检方案质检项关联id， value：质检方案质检项id关系
    qualityPlanItemIdMap: Record<string, IQualityInspectionSolutionQualityInspectionItemIdVO>;
    // 合格数量
    passQuantity: number;
    // 不合格数量
    notPassQuantity: number;
    // 让步接收数量
    concessionQuantity: number;
}
// QualityProduceTaskVO
export interface IQualityProduceTaskVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 任务号
    taskNo: string;
    // 所属生产任务id
    produceTaskId: number;
    // 所属生产任务号
    produceTaskNo: string;
    // 生产任务类型
    produceTaskType: string;
    // 对应生产处理id
    produceHandleId: number;
    // 质检任务类型
    type: string;
    // 生产订单id
    produceOrderId: number;
    // 生产订单号
    produceOrderCode: string;
    // 销售订单id
    salesOrderId: number;
    // 销售订单号
    salesOrderCode: string;
    // 所属销售订单详情id
    salesOrderDetailId: number;
    // 批次订单id
    lotOrderId: number;
    // 批次订单号
    lotOrderNo: string;
    // 对应物料id
    materialId: number;
    // 对应工艺路径id
    routingId: number;
    // 对应工艺路径步骤id
    routingStepId: number;
    // 工艺路径步骤
    routingStep: number;
    // 对应工序id
    processId: number;
    // 仓位物料库存关联id
    warehouseMaterialRpId: number;
    // 仓位物料WIP关联数量状态
    quantityStatus: string;
    // 对应工厂日历id
    factoryCalendarId: number;
    // 对应班组id
    classGroupId: number;
    // 对应班次id
    classShiftId: number;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 合格数
    passQuantity: number;
    // 不合格数
    notPassQuantity: number;
    // 让步接收数
    concessionQuantity: number;
    // 实际质检开始时间
    actualBeginTime: string;
    // 实际质检结束时间
    actualEndTime: string;
    // 质检人
    inspectionUserId: number;
    // 质检时间
    inspectionTime: string;
    // 备注
    remark: string;
    // 状态
    status: string;
    // 取消人
    cancelUserId: number;
    // 取消时间
    cancelTime: string;
    // 取消原因
    cancelRemark: string;
    // 创建时间
    createTime: string;
}
// QualityStorageTaskVO
export interface IQualityStorageTaskVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 任务号
    taskNo: string;
    // 质检任务类型
    type: string;
    // 采购收货单id
    purchaseWorkOrderId: number;
    // 对应物料id
    materialId: number;
    // 采购收货单物料明细id
    purchaseWorkOrderDetailId: number;
    // 对应质检方案id
    qualityInspectionPlanId: number;
    // 对应质检分类id
    qualityInspectionCategoryId: number;
    // 质检仓位id
    qualityWarehouseId: number;
    // 检验位置id
    checkPositionId: number;
    // 质检处理人
    handleUserId: number;
    // 计划开始时间
    planBeginTime: string;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 合格数
    passQuantity: number;
    // 不合格数
    notPassQuantity: number;
    // 让步接收数
    concessionQuantity: number;
    // 完成时间
    completeTime: string;
    // 备注
    remark: string;
    // 状态
    status: string;
    // 取消人
    cancelUserId: number;
    // 取消时间
    cancelTime: string;
    // 质检任务类型
    taskType: string;
}
// 质检方案质检项idVO
export interface IQualityInspectionSolutionQualityInspectionItemIdVO {
    // undefined
    qualityPlanId: number;
    // undefined
    qualityItemId: number;
}

// JSONResult«分页信息«物料收发汇总分页响应对象»»
export interface IJSONResult分页信息物料收发汇总分页响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息物料收发汇总分页响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«物料收发汇总分页响应对象»
export interface I分页信息物料收发汇总分页响应对象 {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I物料收发汇总分页响应对象[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 物料收发汇总分页响应对象
export interface I物料收发汇总分页响应对象 {
    // 所属主数据id (eg:物料id)
    masterDataId: number;
    // 物料code
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料规格
    materialSpec: string;
    // 物料单位
    materialUnit: string;
    // 操作仓库id
    opStorehouseId: number;
    // 操作仓库编号
    opStorehouseCode: string;
    // 操作仓库名称
    opStorehouseName: string;
    // 期初库存
    startQuantity: number;
    // 期末库存
    endQuantity: number;
    // 入库合计
    inTotalQuantity: number;
    // 出库合计
    outTotalQuantity: number;
    // 单据入库出库明细
    billItems: I物料收发汇总单据项响应对象[];
}
// 物料收发汇总单据项响应对象
export interface I物料收发汇总单据项响应对象 {
    // 单据流程code
    billFlowPathCode: string;
    // 出入库数量
    quantity: number;
}

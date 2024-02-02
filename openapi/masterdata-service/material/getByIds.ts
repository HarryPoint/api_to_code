// JSONResult«List«物料主数据基础信息返回VO»»
export interface IJSONResultList物料主数据基础信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I物料主数据基础信息返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料主数据基础信息返回VO
export interface I物料主数据基础信息返回VO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 物料单位
    unit: string;
    // 版次号
    issueCode: string;
    // 物料规格
    spec: string;
    // 计量单位id
    unitId: number;
    // 库存可使用数
    storageUseQuantity: number;
}

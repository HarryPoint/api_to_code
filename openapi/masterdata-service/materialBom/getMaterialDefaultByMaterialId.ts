// JSONResult«物料bom响应对象»
export interface IJSONResult物料bom响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I物料bom响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料bom响应对象
export interface I物料bom响应对象 {
    // 创建时间
    createTime: string;
    // bomId
    bomId: number;
    // bom名称
    bomName: string;
    // bom编号
    bomCode: string;
    // 主物料Id
    id: number;
    // 主物料名称
    name: string;
    // 主物料编号
    code: string;
    // 主物料类型
    type: string;
    // 主物料类型名称
    typeName: string;
    // 物料单位
    unit: string;
    // 是否是默认BOM
    isDefault: string;
    // 子物料列表
    childMaterialList: IBomDetailsResponseObject[];
}
// 物料bom详情响应对象
export interface IBomDetailsResponseObject {
    // 物料BOM详情id
    materialBomDetailId: number;
    // 所属物料bom id
    materialBomId: number;
    // 子物料id
    id: number;
    // 子物料名称
    name: string;
    // 子物料编号
    code: string;
    // 子物料类型
    type: string;
    // 子物料类型名称
    typeName: string;
    // 物料单位
    unit: string;
    // 消耗数量
    totalConsumeCount: number;
}
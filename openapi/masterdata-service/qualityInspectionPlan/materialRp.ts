// 质检方案物料应用关联信息编辑DTO
export interface I质检方案物料应用关联信息编辑DTO {
    // 质检方案id
    id: number;
    // 物料id集
    materialIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
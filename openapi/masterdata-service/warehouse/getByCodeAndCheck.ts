// JSONResult«仓位VO»
export interface IJSONResult仓位VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I仓位VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓位VO
export interface I仓位VO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 所属仓库id
    storehouseId: number;
    // 父级id
    parentId: number;
    // 仓位名称
    name: string;
    // 仓位编号
    code: string;
    // 是否默认仓位 - 针对整个工厂唯一默认有一个仓位，非仓库下自动创建的默认仓位
    isDefault: string;
    // 仓位类型
    type: string;
    // WIP类型 - WIP时有值
    wipType: string;
    // 所属工艺路径id - WIP时有值
    routingId: number;
    // 所属区域id
    areaId: number;
}

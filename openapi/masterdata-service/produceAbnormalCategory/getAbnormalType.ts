// JSONResult«List«异常类型返回VO»»
export interface IJSONResultList异常类型返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I异常类型返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 异常类型返回VO
export interface I异常类型返回VO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 所属分类
    typeDesc: string;
    // 类型名称
    name: string;
    // 类型编号
    code: string;
    // 数据状态
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}

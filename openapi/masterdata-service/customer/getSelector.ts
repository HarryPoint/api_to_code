// JSONResult«List«客户选择返回VO»»
export interface IJSONResultList客户选择返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I客户选择返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 客户选择返回VO
export interface I客户选择返回VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}

// JSONResult«List«质量追溯未打开生产订单响应对象»»
export interface IJSONResultList质量追溯未打开生产订单响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量追溯未打开生产订单响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量追溯未打开生产订单响应对象
export interface I质量追溯未打开生产订单响应对象 {
    // id
    id: number;
    // 生产订单号
    code: string;
    // 订单状态
    orderStatus: string;
}
// http://47.108.139.107:16700/doc.html#/default/生产处理返工相关/refuseUsingPOST
// 生产处理返工拒绝请求对象
export interface IProductionHandlesReworkRejectRequestObjects {
    // 生产处理id
    id: number;
    // 处理意见
    handleRemark: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
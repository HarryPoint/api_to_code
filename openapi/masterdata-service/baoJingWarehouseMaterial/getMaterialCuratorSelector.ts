// http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialCuratorSelectorUsingGET
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
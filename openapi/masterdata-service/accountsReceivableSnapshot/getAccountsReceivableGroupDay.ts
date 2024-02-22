// http://47.108.139.107:16700/doc.html#/default/应收账款快照相关/getAccountsReceivableGroupDayUsingGET
// JSONResult«AccountsReceivableVO»
export interface IJSONResultAccountsReceivableVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAccountsReceivableVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// AccountsReceivableVO
export interface IAccountsReceivableVO {
    // undefined
    amountReceivable: number;
    // undefined
    amountReceived: number;
}
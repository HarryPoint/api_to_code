// JSONResult«List«工序产出报废统计返回VO»»
export interface IJSONResultList工序产出报废统计返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工序产出报废统计返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序产出报废统计返回VO
export interface I工序产出报废统计返回VO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序产出数
    produceQuantity: number;
    // 报废数
    scrapQuantity: number;
}

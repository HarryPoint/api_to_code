// 批次订单流水搜索VO
export interface I批次订单流水搜索VO {
    // 生产订单id
    produceOrderId: number;
    // 批次订单id
    lotOrderId: number;
    // 流水类型
    flowType: string;
}
// JSONResult«List«批次订单流水基本信息响应DTO»»
export interface IJSONResultList批次订单流水基本信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I批次订单流水基本信息响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次订单流水基本信息响应DTO
export interface I批次订单流水基本信息响应DTO {
    // id
    id: number;
    // 流水类型
    flowType: string;
    // 当前流水类型描述
    flowTypeDesc: string;
    // 操作时间
    createTime: string;
    // 描述
    remark: string;
}

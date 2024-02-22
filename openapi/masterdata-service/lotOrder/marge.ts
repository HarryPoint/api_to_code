import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/margeUsingPOST
export function fetchMethod(data: IBatchOrderConsolidationDTO, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/lotOrder/marge",
      data,
      params,
    });
}
// 批次订单合并DTO
export interface IBatchOrderConsolidationDTO {
    // wip状态记录id集
    wipRpIds: number[];
    // 备注
    remark: string;
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

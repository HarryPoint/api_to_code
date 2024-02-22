import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/自动排产订单相关/batchLockOrderUsingPOST
export function fetchMethod(data: IIdCollectionInformation, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/autoPlan/batchLockOrder",
      data,
      params,
    });
}
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
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

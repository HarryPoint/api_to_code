import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产处理暂扣相关/releaseUsingPOST
export function fetchMethod(data: ITheProductionProcessHoldsTheReleaseRequestObject) {
    return post({
      url: "/masterdata-service/produceHandleHoldPause/release",
      data,
    });
}
// 生产处理暂扣放行请求对象
export interface ITheProductionProcessHoldsTheReleaseRequestObject {
    // 生产处理id
    id: number;
    // 处理意见
    handleRemark: string;
    // 放行数量
    abnormalQuantity: number;
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

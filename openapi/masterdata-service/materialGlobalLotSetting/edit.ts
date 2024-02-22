import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/物料全局批次设置相关/editUsingPOST_7
export function fetchMethod(data: IMaterialsBureauBatchSetEditObject, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/materialGlobalLotSetting/edit",
      data,
      params,
    });
}
// 物料全局批次设置编辑对象
export interface IMaterialsBureauBatchSetEditObject {
    // 启用序列号
    enableSerialNo: string;
    // 启用批次
    enableLot: string;
    // 物料批次出库规则
    lotOutRule: string;
    // 启用质量追溯
    enableQualityTraceability: string;
    // 启用外部码
    enableExternalCode: string;
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

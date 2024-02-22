import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/检验任务超期计算相关/computeOverdueUsingPOST
export function fetchMethod() {
    return post({
      url: "/masterdata-service/qmsInspectionTaskComputeOverdue/computeOverdue",
    });
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

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/巡检计划相关/issueUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qmsPatrolInspectionPlan/issue",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

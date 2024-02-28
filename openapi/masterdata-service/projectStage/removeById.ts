import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目阶段相关/removeByIdUsingPOST_1
*/
export default function fetchMethod(options: { data: IDeleteTheRequestObjectDuringTheProjectPhase }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectStage/removeById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段删除请求对象 */
export interface IDeleteTheRequestObjectDuringTheProjectPhase {
    /** 项目阶段id */
    projectStageId: string;
    /** 项目计划id */
    projectPlanId?: string;
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
    ts?: string;
}

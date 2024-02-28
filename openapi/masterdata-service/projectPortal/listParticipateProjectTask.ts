import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目门户相关/listParticipateProjectTaskUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProjectTaskResponseObject2>(
        {
            url: "/masterdata-service/projectPortal/listParticipateProjectTask",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务响应对象»»_2 */
export interface IJSONResultListProjectTaskResponseObject2 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskResponseObject3[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务响应对象_3 */
export interface IProjectTaskResponseObject3 {
    /** 项目任务id */
    id?: string;
    /** 任务编号 */
    code?: string;
    /** 任务名称 */
    name?: string;
    /** 项目任务类型名称 */
    projectTaskTypeName?: string;
    /** 任务进度 */
    taskProgress?: number;
    /** 任务开始日期 */
    planBeginTime?: number;
    /** 任务截止日期 */
    planEndTime?: number;
    /** 是否超期 */
    isOverdue?: EProjectTaskResponseObject3_isOverdue;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    projectTaskTypeId?: string;
}

export enum EProjectTaskResponseObject3_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

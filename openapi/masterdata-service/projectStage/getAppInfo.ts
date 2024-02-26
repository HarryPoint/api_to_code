import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目阶段相关/getAppInfoUsingGET_1
*/
export default function fetchMethod(params: { projectId?: string }, extraOptions?: any) {
    return http<IJSONResultProjectPhaseAppliesTheResponseObject>(
        {
            url: "/masterdata-service/projectStage/getAppInfo",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«项目阶段应用响应对象» */
export interface IJSONResultProjectPhaseAppliesTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectPhaseAppliesTheResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目阶段应用响应对象 */
export interface ITheProjectPhaseAppliesTheResponseObject {
    /** 应用id */
    appId?: number;
    /** 应用code */
    appCode?: string;
}

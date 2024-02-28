import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产订单相关/getRoutingStepSelectorUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionProcessPathStepProcessResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/getRoutingStepSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产工艺路径步骤工序响应 DTO»» */
export interface IJSONResultListProductionProcessPathStepProcessResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessPathStepsProcessResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产工艺路径步骤工序响应 DTO */
export interface IProductionProcessPathStepsProcessResponseDTO {
    /** 工艺路径步骤id */
    id?: string;
    /** 对应步骤 */
    routingStep?: number;
    /** 工序 */
    process?: ITheProcessRespondsToTheDTO;
}
/** 工序响应 DTO */
export interface ITheProcessRespondsToTheDTO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}

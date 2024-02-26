import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/getRoutingStepSelectorUsingGET
*/
export default function fetchMethod(params: { id?: string }, extraOptions?: any) {
    return http<IJSONResultListProductionProcessPathStepProcessResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/getRoutingStepSelector",
            method: "get",
            params,
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
    ts?: number;
}
/** 生产工艺路径步骤工序响应 DTO */
export interface IProductionProcessPathStepsProcessResponseDTO {
    /** 工艺路径步骤id */
    id?: number;
    /** 对应步骤 */
    routingStep?: number;
    /** 工序 */
    process?: ITheProcessRespondsToTheDTO;
}
/** 工序响应 DTO */
export interface ITheProcessRespondsToTheDTO {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}

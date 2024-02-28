import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品订单相关/trialAddUsingPOST
*/
export default function fetchMethod(options: { data: ITrialProductOrderNewRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/productOrder/trialAdd",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 试用产品订单新增请求对象 */
export interface ITrialProductOrderNewRequestObject {
    /** 企业id */
    enterpriseId?: string;
    /** 试用产品类型, 默认传 MES  */
    productType?: ETrialProductOrderNewRequestObject_productType;
    /** 产品模块 */
    productModuleArray?: string[];
    /** 试用时长(天) */
    buyDurationQuantity?: number;
    /** 购买账号数 */
    buyAccountQuantity?: number;
    /** 预计到期日期 */
    planExpireTime?: number;
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

export enum ETrialProductOrderNewRequestObject_productType {
    /** MES系统 */
    MES = "MES"
}

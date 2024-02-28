import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品订单相关/newBuyAddUsingPOST
*/
export default function fetchMethod(options: { data: INewProductOrderAddedARequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/productOrder/newBuyAdd",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 新购产品订单新增请求对象 */
export interface INewProductOrderAddedARequestObject {
    /** 企业id */
    enterpriseId?: string;
    /** 购买产品类型, 默认传 MES  */
    productType?: ENewProductOrderAddedARequestObject_productType;
    /** 产品模块 */
    productModuleArray?: string[];
    /** 购买时长(天) */
    buyDurationQuantity?: number;
    /** 购买账号数 */
    buyAccountQuantity?: number;
    /** 订单金额(元) */
    orderMoneyQuantity?: number;
    /** 合同签约时间 */
    contractTime?: number;
    /** 预计交付日期 */
    planDeliveryTime?: number;
    /** 预计到期日期 */
    planExpireTime?: number;
    /** 付款记录列表 */
    payRecordList?: IProductOrderPaymentHistoryEditRequestObject[];
}
/** 产品订单付款记录编辑请求对象 */
export interface IProductOrderPaymentHistoryEditRequestObject {
    /** 付款记录id */
    id?: string;
    /** 计划付款日期 */
    planPayTime?: number;
    /** 应付金额(元) */
    payableQuantity?: number;
    /** 实际付款日期 */
    realPayTime?: number;
    /** 实付金额(元) */
    actualPayQuantity?: number;
    /** 状态 */
    status?: EProductOrderPaymentHistoryEditRequestObject_status;
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

export enum ENewProductOrderAddedARequestObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductOrderPaymentHistoryEditRequestObject_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 已支付 */
    ALREADY_PAY = "ALREADY_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}

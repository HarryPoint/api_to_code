import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品订单相关/appendBuyModifyUsingPOST
*/
export default function fetchMethod(data: IAdditionalProductOrderModificationRequestObject, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/productOrder/appendBuyModify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 加购产品订单修改请求对象 */
export interface IAdditionalProductOrderModificationRequestObject {
    /** 企业id */
    enterpriseId: number;
    /** 加购类型非法传递, 默认传 MES  */
    appendType: string;
    /** 加购产品类型非法传递, 默认传 MES  */
    productType: string;
    /** 加购产品模块 */
    productModuleArray: string[];
    /** 购买时长(天) */
    buyDurationQuantity: number;
    /** 购买账号数 */
    buyAccountQuantity: number;
    /** 订单金额(元) */
    orderMoneyQuantity: number;
    /** 合同签约时间 */
    contractTime: string;
    /** 预计交付日期 */
    planDeliveryTime: string;
    /** 预计到期日期 */
    planExpireTime: string;
    /** 付款记录列表 */
    payRecordList: IProductOrderPaymentHistoryEditRequestObject[];
    /** 企业id */
    id: number;
}
/** 产品订单付款记录编辑请求对象 */
export interface IProductOrderPaymentHistoryEditRequestObject {
    /** 付款记录id */
    id: number;
    /** 计划付款日期 */
    planPayTime: string;
    /** 应付金额(元) */
    payableQuantity: number;
    /** 实际付款日期 */
    realPayTime: string;
    /** 实付金额(元) */
    actualPayQuantity: number;
    /** 状态 */
    status: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
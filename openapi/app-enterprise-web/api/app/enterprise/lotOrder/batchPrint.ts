import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产批次订单相关/batchPrintUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListBatchOrderPrintInformationIsReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/batchPrint",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«批次订单打印信息返回VO»» */
export interface IJSONResultListBatchOrderPrintInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBatchOrderPrintingInformationIsReturnedToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次订单打印信息返回VO */
export interface IBatchOrderPrintingInformationIsReturnedToVO {
    /** 批次号 */
    lotNo?: string;
    /** 对应生产订单号 */
    produceOrderCode?: string;
    /** 对应销售订单号 */
    salesOrderCode?: string;
    /** 数量 */
    totalCount?: number;
    /** 物料id */
    materialId?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 打印日期 */
    printDate?: number;
    /** 批次号二维码 */
    lotNoQrCode?: string;
}

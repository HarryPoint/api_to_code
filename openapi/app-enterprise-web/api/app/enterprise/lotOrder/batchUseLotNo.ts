import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/batchUseLotNoUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultTheBatchNumberIsDTO1>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/batchUseLotNo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«批次号使用DTO»_1 */
export interface IJSONResultTheBatchNumberIsDTO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheBatchNumberIsDTO1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次号使用DTO_1 */
export interface ITheBatchNumberIsDTO1 {
    /** 异常批次号 */
    lotSerialNoErrorList?: ITheBatchNumberUsesAnAbnormalDTO[];
}
/** 批次号使用异常DTO */
export interface ITheBatchNumberUsesAnAbnormalDTO {
    /** 批次号 */
    lotSerialNo?: string;
    /** 异常信息集合 */
    errorMsgList?: string[];
}
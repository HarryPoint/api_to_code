import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/完工及产成品归集相关/saveUsingPOST_4
*/
export default function fetchMethod(data: ITheFinishedAndFinishedProductsAreCollectedToSaveTheRequestObject, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceQuantityCollect/save",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 完工及产成品归集保存请求对象 */
export interface ITheFinishedAndFinishedProductsAreCollectedToSaveTheRequestObject {
    /** 财务期间id */
    fiscalPeriodId: number;
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
    ts?: number;
}

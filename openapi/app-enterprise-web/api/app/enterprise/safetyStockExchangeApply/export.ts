import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安全库存变更申请相关/exportUsingPOST_48
*/
export default function fetchMethod(data: ISecurityStockChangeRequestSearchVO, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStockExchangeApply/export",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 安全库存变更申请搜索VO */
export interface ISecurityStockChangeRequestSearchVO {
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 设置类型 */
    type: string;
    /** 对应业务id */
    businessId: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
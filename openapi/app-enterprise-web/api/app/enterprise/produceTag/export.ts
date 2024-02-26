import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产标签相关/exportUsingPOST_35
*/
export default function fetchMethod(data: IExceptionTagSearchVO, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTag/export",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 异常标签搜索VO */
export interface IExceptionTagSearchVO {
    /** 当前页面 */
    pageNo: number;
    /** 编号 */
    code: string;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 名称 */
    name: string;
    /** 类型 */
    type: string;
    /** 状态(是否启用) */
    isValid: string;
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
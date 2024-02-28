import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/质检方案/exportUsingPOST_41
*/
export default function fetchMethod(options: { data: IInspectionSolutionSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityInspectionPlan/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检方案搜索VO */
export interface IInspectionSolutionSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
    /** 物料id */
    materialId?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

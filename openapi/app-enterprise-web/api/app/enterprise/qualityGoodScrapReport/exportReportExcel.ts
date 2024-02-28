import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/质检统计/exportReportExcelUsingPOST_3
*/
export default function fetchMethod(options: { data: IScrapDataSheetSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityGoodScrapReport/exportReportExcel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 良品报废数据表搜索VO */
export interface IScrapDataSheetSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 物料id */
    materialId?: string;
    /** 物料种类 */
    materialType?: string;
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

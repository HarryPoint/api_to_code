import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/宝晶报表(应收账款分析)相关/getAccountReceivableReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingAccountsReceivableAnalysisReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultBaojingAccountsReceivableAnalysisReportFormReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportAccountsReceivable/getAccountReceivableReportSumResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶应收账款分析报表搜索VO */
export interface IBaojingAccountsReceivableAnalysisReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 业务员id集 */
    businessUserIds?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    dateBegin?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 客户id集 */
    customerIds?: string[];
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    dateEnd?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«宝晶应收账款分析报表表格返回VO» */
export interface IJSONResultBaojingAccountsReceivableAnalysisReportFormReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBaojingAccountsReceivableAnalysisReportFormReturnedToVO1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶应收账款分析报表表格返回VO_1 */
export interface IBaojingAccountsReceivableAnalysisReportFormReturnedToVO1 {
    /** 期初金额 */
    beginAmountSum?: number;
    /** 应收金额 */
    moveInAmountSum?: number;
    /** 已收金额 */
    receivedAmountSum?: number;
    /** 其他损益 */
    otherLossAmountSum?: number;
    /** 应收余额 */
    receivableBalanceSum?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

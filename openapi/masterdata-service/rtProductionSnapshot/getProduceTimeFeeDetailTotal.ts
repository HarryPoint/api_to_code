import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getProduceTimeFeeDetailTotalUsingPOST
*/
export default function fetchMethod(options: { data: IHourlyLaborRateReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultTotalLaborCostReportReturnedToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProduceTimeFeeDetailTotal",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工时工费报表搜索VO */
export interface IHourlyLaborRateReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id集 */
    processIds?: string[];
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 员工id集 */
    userIds?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 班组id集 */
    classGroupIds?: string[];
    /** 查询开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 查询结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 生产任务编码 */
    produceTaskNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«工时工费报表合计返回VO» */
export interface IJSONResultTotalLaborCostReportReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheTotalReportOfTimeAndExpenseIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工时工费报表合计返回VO */
export interface ITheTotalReportOfTimeAndExpenseIsReturnedToVO {
    /** 合格产出数量 */
    produceQuantity?: number;
    /** 合格工费 */
    produceFee?: number;
    /** 返工数量 */
    backQuantity?: number;
    /** 返工工费 */
    backFee?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

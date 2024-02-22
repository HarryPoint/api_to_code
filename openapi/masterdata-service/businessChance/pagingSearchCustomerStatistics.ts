import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/crm-商机销售统计相关/pagingSearchCustomerStatisticsUsingPOST
export function fetchMethod(data: ICustomerStatisticsInputConditions) {
    return post({
      url: "/masterdata-service/businessChance/pagingSearchCustomerStatistics",
      data,
    });
}
// 客户情况统计输入条件
export interface ICustomerStatisticsInputConditions {
    // 客户ID列表
    customerIdList: number[];
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 跟进ID列表
    salesOrderIdList: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«客户情况统计»»
export interface IJSONResultPagingInformationCustomerStatistics {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationCustomerStatistics;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«客户情况统计»
export interface IPageInformationCustomerStatistics {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ICustomerStatistics[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 客户情况统计
export interface ICustomerStatistics {
    // 商机ID
    businessChanceId: number;
    // 根据人ID
    salesUserId: number;
    // 根据人名称
    saleUserName: string;
    // 客户ID
    customerId: number;
    // 客户名称
    customerName: string;
    // 商机名称
    businessChanceName: string;
    // 创建商机时间
    businessChanceCreateTime: string;
    // 需求确认时间
    confirmRequireTime: string;
    // 历史需求确认时间集合
    historyConfirmRequireTimeList: number[];
    // 方案报价时间
    schemeQuotationTime: string;
    // 商务谈判时间
    businessNegotiationTime: string;
    // 历史商务谈判时间集合
    historyBusinessNegotiationTimeList: number[];
    // 合同签订时间
    contractSigningTime: string;
    // 回款时间
    paymentReturnTime: string;
    // 售后服务时间
    afterServiceTime: string;
    // 历史售后服务时间集合
    historyAfterServiceTimeList: number[];
    // 输单时间
    inputOrderTime: string;
    // 历史输单时间集合
    historyInputOrderTimeList: number[];
    // 无效时间
    invalidTime: string;
    // 历史无效时间集合
    historyInvalidTimeList: number[];
}

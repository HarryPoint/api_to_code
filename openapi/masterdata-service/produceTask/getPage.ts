// http://47.108.139.107:16700/doc.html#/default/生产任务相关/getPageUsingPOST_18
// 生产任务搜索VO
export interface IProductionTaskSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 对应工序id
    processIds: number[];
    // 任务号
    taskNo: string;
    // 生产订单号
    produceOrderCode: string;
    // 销售订单号
    salesOrderCode: string;
    // 对应物料id
    materialIds: number[];
    // 任务类型描述
    typeDesc: string;
    // 任务下发方式
    issueType: string;
    // 任务下发方式描述
    issueTypeDesc: string;
    // 任务类型
    type: string;
    // 计划开始-结束时间 yyyy-MM-dd HH:mm:ss
    startEndTime: string;
    // 任务状态
    statusList: string[];
    // 任务优先级
    priorityLevel: number;
    // 创建开始时间 yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 计划开始-开始时间 yyyy-MM-dd HH:mm:ss
    startBeginTime: string;
    // 计划结束-开始时间 yyyy-MM-dd HH:mm:ss
    endBeginTime: string;
    // 计划结束-结束时间 yyyy-MM-dd HH:mm:ss
    endEndTime: string;
    // 创建结束时间 yyyy-MM-dd HH:mm:ss
    createEndTime: string;
    // 可操作项
    canOpItem: string;
    // 生产订单字段搜索
    produceOrderSearchList: IProcessDataDetailsSearchVO[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// 流程数据明细搜索VO
export interface IProcessDataDetailsSearchVO {
    // 列code
    code: string;
    // 搜索类型
    searchType: string;
    // 搜索文本 - 针对文本搜索
    text: string;
    // 搜索起始值 - 针对范围搜索
    limitBegin: Record<string, any>;
    // 搜索结束值 - 针对范围搜索
    limitEnd: Record<string, any>;
    // 搜索选项值 - 针对选择搜索
    selectors: Record<string, any>[];
    // 表格编码
    tableCode: string;
}
// JSONResult«分页信息«JSONObject»»
export interface IJSONResultPagingInformationJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationJSONObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«JSONObject»
export interface IPagingInformationJSONObject {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IJSONObject[];
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
// JSONObject
export interface IJSONObject {
}
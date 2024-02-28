import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产进度统计报表 - 相关/getForPageUsingPOST_15
*/
export default function fetchMethod(options: { data: IProcessDataBaseSearchVO }, extraOptions?: any) {
    return http<IProduceOrderStatisticsItemDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceProgressStatistics/getForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据基础搜索VO */
export interface IProcessDataBaseSearchVO {
    /** 全局搜索 */
    allSearch?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 明细表表code，传值后，将会查询明细表数据 */
    tableColumnCode?: string;
    /** 当前的表单分组 */
    currentFormDataGrouping?: IFormDataGroupingDTO;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: EFormDataGroupingDTO_cascadeFormData;
    /** 多级基础数据上级ID */
    treeDataParentId?: string;
}
/** JSONResult«分页信息«ProduceOrderStatisticsItemDTO»» */
export interface IProduceOrderStatisticsItemDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProduceOrderStatisticsItemDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProduceOrderStatisticsItemDTO» */
export interface IThePagingInformationProduceOrderStatisticsItemDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProduceOrderStatisticsItemDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProduceOrderStatisticsItemDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProduceOrderStatisticsItemDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** ProduceOrderStatisticsItemDTO */
export interface IProduceOrderStatisticsItemDTO {
    /** 生产订单ID */
    produceOrderId?: string;
    /** 生产订单数据 */
    produceOrder?: Record<string, Record<string, any>>;
    /** 统计数据 */
    produceOrderStatisticsData?: IProduceOrderStatisticsInfoDTO;
    /** 工序统计数据列表 */
    processStatisticsDataList?: IProcessStatisticsDataDTO[];
}
/** ProduceOrderStatisticsInfoDTO */
export interface IProduceOrderStatisticsInfoDTO {
    /** 计划生产数量 */
    planQuantity?: number;
    /** 当前生产数量 */
    currentProductionQuantity?: number;
    /** 补单生产数量 */
    supplementProductionQuantity?: number;
    /** 订单完成率 */
    completionRate?: number;
}
/** ProcessStatisticsDataDTO */
export interface IProcessStatisticsDataDTO {
    /** 工序ID */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编码 */
    processCode?: string;
    /** 计划数量 */
    planQuantity?: number;
    /** 生产数量 */
    productionQuantity?: number;
    /** 完成率 */
    completionRate?: number;
    /** 在制数量 */
    wipQuantity?: number;
}

export enum EProcessDataDetailsSearchVO_searchType {
    NONE = "NONE",
    EQ = "EQ",
    LIKE = "LIKE",
    RANGE = "RANGE",
    SELECTOR = "SELECTOR",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    NE = "NE",
    REGEXP = "REGEXP"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EFormDataGroupingDTO_cascadeFormData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceOrderStatisticsItemDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceOrderStatisticsItemDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

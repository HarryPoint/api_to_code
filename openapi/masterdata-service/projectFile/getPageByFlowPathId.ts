import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目文件相关/getPageByFlowPathIdUsingPOST_2
*/
export default function fetchMethod(options: { data: IProcessDataSearchVO1, params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationJSONObject>(
        {
            url: "/masterdata-service/projectFile/getPageByFlowPathId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据搜索VO_1 */
export interface IProcessDataSearchVO1 {
    /** 全局搜索 */
    allSearch?: string;
    /** 当前的表单分组 */
    currentFormDataGrouping?: IFormDataGroupingDTO;
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 操作部门id */
    opDeptId?: string;
    /** 操作角色id集 */
    opRoleIds?: string[];
    /** 操作员工id */
    opUserId?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 明细表表code，传值后，将会查询明细表数据 */
    tableColumnCode?: string;
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: EFormDataGroupingDTO_cascadeFormData;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 多级基础数据上级ID */
    treeDataParentId?: string;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«JSONObject»» */
export interface IJSONResultPagingInformationJSONObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationJSONObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«JSONObject» */
export interface IPagingInformationJSONObject {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationJSONObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationJSONObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IJSONObject[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** JSONObject */
export interface IJSONObject {
}

export enum EFormDataGroupingDTO_cascadeFormData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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

export enum EPagingInformationJSONObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationJSONObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
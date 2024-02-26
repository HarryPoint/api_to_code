import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/pageQueryProduceMaterialIssuanceSummaryUsingPOST
*/
export default function fetchMethod(options: { data: IPaging7 }, extraOptions?: any) {
    return http<IProduceMaterialIssuanceSummaryQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceOrder/pageQueryProduceMaterialIssuanceSummary",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_7 */
export interface IPaging7 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单ID */
    produceOrderId?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«ProduceMaterialIssuanceSummaryQueryResponseDTO»» */
export interface IProduceMaterialIssuanceSummaryQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«ProduceMaterialIssuanceSummaryQueryResponseDTO» */
export interface IThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProduceMaterialIssuanceSummaryQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** ProduceMaterialIssuanceSummaryQueryResponseDTO */
export interface IProduceMaterialIssuanceSummaryQueryResponseDTO {
    /** ID */
    id?: number;
    /** 物料ID */
    materialId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 领取状态 */
    materialIssuanceStatus?: ('NONE' | 'PARTIAL_ISSUE' | 'FULL_ISSUE');
    /** 计划领取的数量 */
    toBeIssuedQuantity?: number;
    /** 未领数量 */
    notIssuedQuantity?: number;
    /** 领料数量 */
    issuanceQuantity?: number;
    /** 已退料数量 */
    returnedQuantity?: number;
}

import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/matchStandardTechnologyUsingPOST
*/
export default function fetchMethod(options: { data: IStandardTechnologyMatchRequestDTO }, extraOptions?: any) {
    return http<IJSONResultStandardTechnologyMatchResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/matchStandardTechnology",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** StandardTechnologyMatchRequestDTO */
export interface IStandardTechnologyMatchRequestDTO {
    /** undefined */
    produceOrderIdList?: string[];
}
/** JSONResult«StandardTechnologyMatchResponseDTO» */
export interface IJSONResultStandardTechnologyMatchResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardTechnologyMatchResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** StandardTechnologyMatchResponseDTO */
export interface IStandardTechnologyMatchResponseDTO {
    /** 匹配成功项 */
    matchSuccessItemList?: IStandardTechnologyMatchItemResponseDTO[];
    /** 匹配失败的标准工艺列表 */
    matchFailItemList?: IStandardTechnologyMatchItemResponseDTO[];
}
/** StandardTechnologyMatchItemResponseDTO */
export interface IStandardTechnologyMatchItemResponseDTO {
    /** 生产订单ID */
    produceOrder?: IReceipt;
    /** 物料 */
    material?: IBasicData;
    /** 匹配的生产工艺列表 */
    standardTechnologyList?: IStandardTechnologyDTO[];
    /** 当前物料最近匹配的标准工艺ID */
    currentMaterialRecentlyMatchedStandardTechnologyId?: string;
    /** 订单批次信息 */
    lotOrderList?: IBatchInformationVO[];
}
/** 单据 */
export interface IReceipt {
    /** undefined */
    id?: string;
    /** undefined */
    code?: string;
}
/** 基础数据 */
export interface IBasicData {
    /** ID */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
}
/** StandardTechnologyDTO */
export interface IStandardTechnologyDTO {
    /** 标准工艺ID */
    id?: string;
    /** 标准工艺名称 */
    name?: string;
    /** 标准工艺所属分类名称 */
    standardTechnologyCategoryName?: string;
    /** 标准工艺所属分类ID */
    standardTechnologyCategoryId?: string;
}
/** 批次信息VO */
export interface IBatchInformationVO {
    /** id */
    id?: string;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 总数量 */
    totalCount?: number;
}
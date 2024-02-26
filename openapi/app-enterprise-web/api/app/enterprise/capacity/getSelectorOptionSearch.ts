import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/产能相关/getSelectorOptionSearchUsingPOST
*/
export default function fetchMethod(data: ICapacityDropDownListToSearchForDtos, extraOptions?: any) {
    return http<IJSONResultListCapacityDropDownSelectAListToSearchForResponseObjects>(
        {
            url: "/app-enterprise-web/api/app/enterprise/capacity/getSelectorOptionSearch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 产能下拉选择列表搜索DTO */
export interface ICapacityDropDownListToSearchForDtos {
    /** 物料id */
    materialId: number;
    /** 工序id */
    processId: number;
    /** 产能名称 */
    capacityName: string;
}
/** JSONResult«List«产能下拉选择列表搜索响应对象»» */
export interface IJSONResultListCapacityDropDownSelectAListToSearchForResponseObjects {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITheCapacityDropDownSelectionListSearchesForResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 产能下拉选择列表搜索响应对象 */
export interface ITheCapacityDropDownSelectionListSearchesForResponseObjects {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
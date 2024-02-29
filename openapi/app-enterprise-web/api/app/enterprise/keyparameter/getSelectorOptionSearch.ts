import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/关键参数相关/getSelectorOptionSearchUsingPOST_1
*/
export default function fetchMethod(options: { data: ISelectTheKeyParameterDropDownListToSearchForDtos }, extraOptions?: any) {
    return http<IJSONResultListKeyParameterDropDownSelectAListToSearchForResponseDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/keyparameter/getSelectorOptionSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 关键参数下拉选择列表搜索DTO */
export interface ISelectTheKeyParameterDropDownListToSearchForDtos {
    /** 物料id */
    materialId?: string;
    /** 工序id */
    processId?: string;
    /** 关键参数名称 */
    keyParameterName?: string;
}
/** JSONResult«List«关键参数下拉选择列表搜索响应DTO»» */
export interface IJSONResultListKeyParameterDropDownSelectAListToSearchForResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IKeyParameterDropDownSelectAListToSearchForResponseDtos[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 关键参数下拉选择列表搜索响应DTO */
export interface IKeyParameterDropDownSelectAListToSearchForResponseDtos {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}
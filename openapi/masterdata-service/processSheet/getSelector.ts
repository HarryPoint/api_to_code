import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺卡相关/getSelectorUsingPOST
*/
export default function fetchMethod(data: IProcessCardSelectionListSearchVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/masterdata-service/processSheet/getSelector",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 工艺卡选择列表搜索VO */
export interface IProcessCardSelectionListSearchVO {
    /** 物料id */
    materialId: number;
    /** 工序id */
    processId: number;
}
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}

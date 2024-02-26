import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工序字段对应表相关/getProcessFieldListByFlowPathSystemTypeUsingGET
*/
export default function fetchMethod(params: { flowPathSystemTypeList?: string; processId?: string; enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/masterdata-service/processFlowPathRp/getProcessFieldListByFlowPathSystemType",
            method: "get",
            params,
        },
        extraOptions,
    );
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

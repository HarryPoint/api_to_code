import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业路由相关/changeSortUsingPOST
*/
export default function fetchMethod(data: IIdSetInformation, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/changeSort",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** id集 信息 */
export interface IIdSetInformation {
    /** id集 */
    ids: number[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/设备相关/getDeviceSelectorUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/app-mobile-web/api/app/mobile/device/getDeviceSelector",
            method: "get",
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

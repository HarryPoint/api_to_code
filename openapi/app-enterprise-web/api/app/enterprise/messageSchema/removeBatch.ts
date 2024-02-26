import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/removeBatchUsingPOST_3
*/
export default function fetchMethod(data: IMessageSchemaBatchRemoveRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/messageSchema/removeBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** MessageSchemaBatchRemoveRequestDTO */
export interface IMessageSchemaBatchRemoveRequestDTO {
    /** ID 列表 */
    idList: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
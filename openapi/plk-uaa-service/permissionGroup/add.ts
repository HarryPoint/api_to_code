import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/权限组相关/addUsingPOST_9
*/
export default function fetchMethod(data: ITheDTOIsAddedToThePermissionGroup, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/permissionGroup/add",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 权限组新增 DTO */
export interface ITheDTOIsAddedToThePermissionGroup {
    /** 编码 */
    code: string;
    /** 名称 */
    name: string;
    /** 权限码集 */
    permissionIds: number[];
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
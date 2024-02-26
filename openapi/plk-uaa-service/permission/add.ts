import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/权限相关/editUsingPOST
*/
export default function fetchMethod(data: IPermissionAddedTheDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/permission/add",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 权限新增 DTO */
export interface IPermissionAddedTheDTO {
    /** 权限编码 */
    code: string;
    /** 名称 */
    name: string;
    /** 父级编码 */
    parentCode: string;
    /** 权限类型 */
    type: string;
    /** 系统应用类型 */
    applicationSystemType: string;
    /** 应用级别 */
    applicationLevel: string;
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
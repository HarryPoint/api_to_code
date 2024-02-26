import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目门户相关/listParticipateProjectUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListProjectPortalResponseObject>(
        {
            url: "/masterdata-service/projectPortal/listParticipateProject",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«项目门户响应对象»» */
export interface IJSONResultListProjectPortalResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectPortalResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目门户响应对象 */
export interface IProjectPortalResponseObject {
    /** 项目id */
    id?: number;
    /** 项目编号 */
    code?: string;
    /** 项目名称 */
    name?: string;
    /** 项目状态 */
    projectStatus?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** undefined */
    projectTypeId?: number;
    /** undefined */
    projectManagerId?: number;
}

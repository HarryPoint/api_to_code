import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业路由相关/moveUsingPOST
*/
export default function fetchMethod(options: { data: IEnterpriseRoutingMobileRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/move",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由移动请求 DTO */
export interface IEnterpriseRoutingMobileRequestDTO {
    /** 路由id */
    id?: string;
    /** 移动到父级id */
    parentId?: string;
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 移动到父级id下的所有子集id顺序列表 */
    childIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

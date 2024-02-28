import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/getIdsByClassGroupIdUsingGET
*/
export default function fetchMethod(options: { params: { classGroupId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/employee/getIdsByClassGroupId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

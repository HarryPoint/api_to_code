import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/进出料记录管理/getMoveOutQuantityByMaterialIdUsingGET
*/
export default function fetchMethod(options: { params: { beginTime?: string; materialId?: string; endTime?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultbigdecimal>(
        {
            url: "/masterdata-service/moveInOutRecord/getMoveOutQuantityByMaterialId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«bigdecimal» */
export interface IJSONResultbigdecimal {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

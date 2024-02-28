import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16500/doc.html#/default/缓存相关/queryCacheCmdListUsingPOST
*/
export default function fetchMethod(options: { data: ICacheCmdQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListCacheCmdQueryResponseDTO>(
        {
            url: "/flow-service/cache/queryCacheCmdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** CacheCmdQueryRequestDTO */
export interface ICacheCmdQueryRequestDTO {
    /** undefined */
    cacheType?: string;
    /** undefined */
    applicationName?: string;
    /** undefined */
    serviceInstance?: string;
}
/** JSONResult«List«CacheCmdQueryResponseDTO»» */
export interface IJSONResultListCacheCmdQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICacheCmdQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** CacheCmdQueryResponseDTO */
export interface ICacheCmdQueryResponseDTO {
    /** undefined */
    id?: string;
    /** undefined */
    cmdType?: ECacheCmdQueryResponseDTO_cmdType;
    /** undefined */
    cacheType?: string;
    /** undefined */
    applicationName?: string;
    /** undefined */
    serviceInstance?: string;
    /** undefined */
    cacheKey?: string;
}

export enum ECacheCmdQueryResponseDTO_cmdType {
    DELETE = "DELETE"
}

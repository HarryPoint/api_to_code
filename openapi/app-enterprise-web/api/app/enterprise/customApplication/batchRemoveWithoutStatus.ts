import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/自定义应用相关/batchRemoveWithoutStatusUsingPOST
*/
export default function fetchMethod(options: { data: IDynamicDataStatelessDeleteRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/customApplication/batchRemoveWithoutStatus",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 动态数据无状态删除请求对象 */
export interface IDynamicDataStatelessDeleteRequestObject {
    /** 删除明细 */
    removeDetails?: IDynamicDataStatelessDeletionOfDetailedRequestObjects[];
}
/** 动态数据无状态删除明细请求对象 */
export interface IDynamicDataStatelessDeletionOfDetailedRequestObjects {
    /** 流程id */
    flowPathId?: string;
    /** 动态数据id集合 */
    formRecordIdList?: string[];
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
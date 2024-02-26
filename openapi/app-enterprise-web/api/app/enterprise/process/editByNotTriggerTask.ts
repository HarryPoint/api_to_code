import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工序相关/editByNotTriggerTaskUsingPOST_1
*/
export default function fetchMethod(data: IMasterDataBaseEditDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/process/editByNotTriggerTask",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 主数据基础编辑 DTO */
export interface IMasterDataBaseEditDTO {
    /** 编辑数据 */
    data?: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId?: number;
    /** 扩展参数 */
    extensionParam?: Record<string, Record<string, any>>;
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
    ts?: number;
}

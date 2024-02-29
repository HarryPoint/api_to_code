import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入文件相关/saveImportFileUsingPOST
*/
export default function fetchMethod(options: { data: ISaveImportFile }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importFile/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 保存导入文件 */
export interface ISaveImportFile {
    /** 模板ID */
    templateId?: string;
    /** 文件Key */
    fileKey?: string;
    /** 文件名称 */
    fileName?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
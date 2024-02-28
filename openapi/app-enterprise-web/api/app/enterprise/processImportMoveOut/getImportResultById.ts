import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16400/doc.html#/default/出料数据导入相关/getImportResultByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessMoveOutImportSynchronizationOutputDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processImportMoveOut/getImportResultById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProcessMoveOutImportSynchronizationOutputDTO» */
export interface IJSONResultProcessMoveOutImportSynchronizationOutputDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessMoveOutImportSynchronizationOutputDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProcessMoveOutImportSynchronizationOutputDTO */
export interface IProcessMoveOutImportSynchronizationOutputDTO {
    /** undefined */
    id?: string;
    /** undefined */
    importStatus?: EProcessMoveOutImportSynchronizationOutputDTO_importStatus;
    /** undefined */
    failureMessage?: string;
    /** undefined */
    totalCount?: number;
    /** undefined */
    importedCount?: number;
    /** undefined */
    importSuccessQuantity?: number;
    /** undefined */
    importFailureQuantity?: number;
    /** undefined */
    failureProcessMoveOutList?: IProcessMoveOutImportFailureOutputDTO[];
    /** undefined */
    repeatProcessMoveOutList?: IProcessMoveOutImportFailureOutputDTO[];
    /** undefined */
    optedProduceTaskIdList?: string[];
}
/** ProcessMoveOutImportFailureOutputDTO */
export interface IProcessMoveOutImportFailureOutputDTO {
    /** undefined */
    produceOrderCode?: string;
    /** undefined */
    processName?: string;
    /** undefined */
    failureMessage?: string;
}

export enum EProcessMoveOutImportSynchronizationOutputDTO_importStatus {
    NOT = "NOT",
    COMPLETE = "COMPLETE",
    IMPORTING = "IMPORTING",
    IMPORT_FAIL = "IMPORT_FAIL"
}

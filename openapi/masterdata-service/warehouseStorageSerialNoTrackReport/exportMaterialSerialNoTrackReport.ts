import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/序列号跟踪报表相关/exportMaterialSerialNoTrackReportUsingPOST
*/
export default function fetchMethod(data: ExportMaterialSerialNoTrackReport, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/warehouseStorageSerialNoTrackReport/exportMaterialSerialNoTrackReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

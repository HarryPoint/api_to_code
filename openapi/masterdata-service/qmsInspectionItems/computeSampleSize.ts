import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/检验项相关/computeSampleSizeUsingPOST
*/
export default function fetchMethod(options: { data: ICheckItemCalculatesDTO }, extraOptions?: any) {
    return http<ITheJSONResultCheckItemCalculatesTheResponseDTO>(
        {
            url: "/masterdata-service/qmsInspectionItems/computeSampleSize",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 检验项计算DTO */
export interface ICheckItemCalculatesDTO {
    /** 抽样标准id */
    qmsSamplingStandardsId?: number;
    /** 检验方式 */
    inspectionMethodType?: ('SPOT_CHECK' | 'ALL_CHECK');
    /** 样本量 */
    sampleSize?: number;
}
/** JSONResult«检验项计算响应DTO» */
export interface ITheJSONResultCheckItemCalculatesTheResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheTestItemCalculatesTheResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 检验项计算响应DTO */
export interface ITheTestItemCalculatesTheResponseDTO {
    /** undefined */
    qmsSamplingStandardsId?: number;
    /** undefined */
    batchRangeStartValue?: number;
    /** undefined */
    batchRangeEndValue?: number;
    /** undefined */
    samplingStandardsLevel?: string;
    /** undefined */
    samplingStandardsCharacterCode?: string;
    /** undefined */
    sampleSize?: number;
    /** undefined */
    samplingStandardsAql?: string;
    /** undefined */
    percentage?: number;
    /** undefined */
    ac?: number;
    /** undefined */
    re?: number;
    /** undefined */
    inspectionSampleSize?: number;
}

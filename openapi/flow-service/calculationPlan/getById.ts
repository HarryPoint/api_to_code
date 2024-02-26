import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/getByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultSpecifiesTheResponseDTOForTheCalculationScheme>(
        {
            url: "/flow-service/calculationPlan/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«计算方案明细响应DTO» */
export interface IJSONResultSpecifiesTheResponseDTOForTheCalculationScheme {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICalculationSchemeDetailResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 计算方案明细响应DTO */
export interface ICalculationSchemeDetailResponseDTO {
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 应用编码 */
    appCode?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: ('Y' | 'N');
    /** 公式类型 */
    formulaType?: ('TIME_FUNCTION' | 'MATH_FUNCTION');
    /** 公式 */
    formula?: string;
    /** 计算模式 */
    calculationMode?: ('FIXED_TIME' | 'PERIODICITY');
    /** 固定时间 */
    fixedTime?: string;
    /** 计算周期 */
    calculationPeriod?: ('EVERY_DAY' | 'EVERY_MONTH' | 'EVERY_QUARTER' | 'EVERY_YEAR');
    /** 过滤条件列表 */
    filterConditionList?: ICalculationSchemeFilterConditionDTO1[];
    /** 业务名 */
    businessName?: string;
    /** 公式描述 */
    formulaDesc?: string;
}
/** 计算方案过滤条件DTO_1 */
export interface ICalculationSchemeFilterConditionDTO1 {
    /** ID */
    id?: number;
    /** 计算方案ID */
    calculationPlanId?: number;
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 值列表 */
    values?: string[];
}

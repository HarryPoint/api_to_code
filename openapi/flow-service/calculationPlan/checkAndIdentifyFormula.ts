import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/checkAndIdentifyFormulaUsingPOST
*/
export default function fetchMethod(options: { data: ICalcPlanFormulaCheckRequestDTO }, extraOptions?: any) {
    return http<IJSONResultCalcPlanFormulaCheckResponseDTO>(
        {
            url: "/flow-service/calculationPlan/checkAndIdentifyFormula",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** CalcPlanFormulaCheckRequestDTO */
export interface ICalcPlanFormulaCheckRequestDTO {
    /** 公式 */
    formula?: string;
    /** 应用编码 */
    applicationCode?: string;
}
/** JSONResult«CalcPlanFormulaCheckResponseDTO» */
export interface IJSONResultCalcPlanFormulaCheckResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICalcPlanFormulaCheckResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** CalcPlanFormulaCheckResponseDTO */
export interface ICalcPlanFormulaCheckResponseDTO {
    /** 是否有效公式 */
    isEffectiveFormula?: ('Y' | 'N');
    /** 公式类型 */
    messageExpressionType?: ('TIME_FUNCTION' | 'MATH_FUNCTION');
    /** 消息 */
    message?: string;
}

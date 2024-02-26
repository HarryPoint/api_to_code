import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/checkAndIdentifyFormulaUsingPOST_1
*/
export default function fetchMethod(data: IFormulaCheckRequestDTO, extraOptions?: any) {
    return http<IJSONResultFormulaCheckResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/messageSchema/checkAndIdentifyFormula",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** FormulaCheckRequestDTO */
export interface IFormulaCheckRequestDTO {
    /** 公式 */
    formula: string;
    /** 应用编码 */
    applicationCode: string;
}
/** JSONResult«FormulaCheckResponseDTO» */
export interface IJSONResultFormulaCheckResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IFormulaCheckResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** FormulaCheckResponseDTO */
export interface IFormulaCheckResponseDTO {
    /** 是否有效公式 */
    isEffectiveFormula: string;
    /** 是否有效公式类型 */
    messageExpressionType: string;
    /** 消息 */
    message: string;
}
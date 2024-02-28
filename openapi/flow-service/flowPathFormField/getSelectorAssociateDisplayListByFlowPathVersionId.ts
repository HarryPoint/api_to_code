import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16500/doc.html#/default/流程表单字段相关/getSelectorAssociateDisplayListByFlowPathVersionIdUsingPOST
*/
export default function fetchMethod(options: { params: { flowPathVersionId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessFormFieldDropDownOptionAssociatedToDisplayVO>(
        {
            url: "/flow-service/flowPathFormField/getSelectorAssociateDisplayListByFlowPathVersionId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程表单字段下拉选项关联显示VO»» */
export interface IJSONResultListProcessFormFieldDropDownOptionAssociatedToDisplayVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程表单字段下拉选项关联显示VO */
export interface ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO {
    /** 所属流程表单字段id */
    flowPathFormFieldId?: string;
    /** 所属流程表单字段编号 */
    flowPathFormFieldCode?: string;
    /** 所属流程表单字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 下拉选项的code */
    selectorItemCode?: string;
    /** 关联显示字段的序列号集合 */
    associateDisplayFieldSerialNos?: Record<string, any>[];
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程表单字段表关联字典相关/getListByBusinessCodeUsingGET
*/
export default function fetchMethod(options: { params: { businessCode?: ('MATERIAL_TYPE' | 'DEPARTMENT_ORG_CATEGORY' | 'DEPARTMENT_ORG_TYPE' | 'PROJECT_TYPE' | 'PROJECT_CATEGORY' | 'PROJECT_TASK_PRIORITY' | 'PROJECT_ACTION_ITEM_TYPE' | 'PROJECT_FEEDBACK_CYCLE' | 'PROJECT_MEETING_TYPE' | 'PROJECT_SECRET_TYPE' | 'QMS_ANNUAL_QUALITY_MONITOR_RATE' | 'QMS_QUALITATIVE_TARGET_VALUE' | 'QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT' | 'QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS' | 'QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES' | 'QMS_QUALITY_PERSONNEL_WORKING_FORM' | 'QMS_QUALITY_PERSONNEL_GROUP' | 'QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME' | 'QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS' | 'QMS_SEAL_STYLE_QUALIFICATION' | 'QMS_SEAL_STATUS' | 'QMS_ANNUAL_QUALITY_TARGET_CATEGORY' | 'QMS_SAMPLING_STANDARDS_AQL' | 'QMS_SAMPLING_STANDARDS_CHARACTER_CODE' | 'QMS_SAMPLING_STANDARDS_LEVEL' | 'QMS_INSPECTION_INCOMING_TYPE' | 'QMS_PROJECT_TASK_REVIEW_RESULT' | 'QMS_PROJECT_TASK_DECISION_RESULT' | 'QMS_INSPECTION_BUSINESS_TYPE' | 'DEVICE_EMPLOYEE_MAINTAIN_LEVEL'); enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListProcessFormFieldAssociationDictionaryOptionSetVO>(
        {
            url: "/flow-service/flowPathFormFieldRpSelectorDictionary/getListByBusinessCode",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程表单字段关联字典选项集VO»» */
export interface IJSONResultListProcessFormFieldAssociationDictionaryOptionSetVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程表单字段关联字典选项集VO */
export interface IProcessFormFieldAssociationDictionaryOptionSetVO {
    /** undefined */
    color?: string;
    /** undefined */
    name?: string;
    /** 预设名称 */
    presetName?: string;
    /** undefined */
    code?: string;
    /** 是否预设 */
    isPreset?: ('Y' | 'N');
    /** 能否修改 */
    isCanModify?: ('Y' | 'N');
    /** 能否删除 */
    isCanDelete?: ('Y' | 'N');
}

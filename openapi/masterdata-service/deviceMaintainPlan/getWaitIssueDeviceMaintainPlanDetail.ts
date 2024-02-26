import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备保养计划相关/getWaitIssueDeviceMaintainPlanDetailUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IMaintenancePlanDetailsToBeDeliveredResponseDTO[]>(
        {
            url: "/masterdata-service/deviceMaintainPlan/getWaitIssueDeviceMaintainPlanDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** 保养计划明细待下发响应DTO */
export interface IMaintenancePlanDetailsToBeDeliveredResponseDTO {
    /** id */
    id?: number;
    /** 设备保养计划id */
    deviceMaintainPlanId?: number;
    /** 设备id */
    deviceId?: number;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备类型id */
    deviceTypeId?: number;
    /** 所属区域id */
    areaId?: number;
    /** 保养类型 */
    maintainType?: ('YEAR' | 'HALF_YEAR' | 'QUARTER' | 'MONTH');
    /** 保养方案id */
    maintainSchemeId?: number;
    /** 保养开始时间 */
    maintainStartTime?: string;
    /** 计划明细状态 */
    planDetailStatus?: ('CREATED' | 'ISSUE' | 'CANCEL' | 'COMPLETE');
}

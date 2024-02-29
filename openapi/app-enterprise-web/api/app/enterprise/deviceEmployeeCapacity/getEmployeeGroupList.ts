import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/设备人员能力相关/getEmployeeGroupListUsingPOST
*/
export default function fetchMethod(options: { data: IDevicePersonnelAbilityQueryDtosInGroups }, extraOptions?: any) {
    return http<IJSONResultListDevicePersonnelAbilityToGroupResponseDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceEmployeeCapacity/getEmployeeGroupList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备人员能力分组查询DTO */
export interface IDevicePersonnelAbilityQueryDtosInGroups {
    /** 人员id */
    employeeIds?: string[];
    /** 班组id */
    classGroupIds?: string[];
    /** 部门id */
    departmentIds?: string[];
    /** 维修能力 */
    maintainLevels?: string[];
    /** 保养能力 */
    canMaintains?: string[];
}
/** JSONResult«List«设备人员能力分组响应DTO»» */
export interface IJSONResultListDevicePersonnelAbilityToGroupResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEquipmentPersonnelAbilityToRespondToDTOInGroups[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备人员能力分组响应DTO */
export interface IEquipmentPersonnelAbilityToRespondToDTOInGroups {
    /** 人员能力id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 人员id */
    employeeId?: string;
    /** 班组id */
    classGroupId?: string;
    /** 部门id */
    departmentId?: string;
    /** 人员名称 */
    employeeName?: string;
    /** 班组 */
    classGroupName?: string;
    /** 部门 */
    departmentName?: string;
    /** 人员 */
    items?: IEquipmentPersonnelCapabilityGroupItemRespondsToDTO[];
}
/** 设备人员能力分组项响应DTO */
export interface IEquipmentPersonnelCapabilityGroupItemRespondsToDTO {
    /** 人员能力明细id */
    detailId?: string;
    /** 设备类型id */
    deviceTypeId?: string;
    /** 设备类型 */
    deviceTypeName?: string;
    /** 维修能力 */
    maintainLevel?: string;
    /** 保养能力 */
    canMaintain?: string;
}
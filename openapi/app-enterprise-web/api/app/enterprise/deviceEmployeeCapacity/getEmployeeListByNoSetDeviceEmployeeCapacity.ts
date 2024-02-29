import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/设备人员能力相关/getEmployeeListByNoSetDeviceEmployeeCapacityUsingPOST
*/
export default function fetchMethod(options: { data: IEquipmentPersonnelCapabilityNoPersonnelQueryDTOIsSet }, extraOptions?: any) {
    return http<IJSONResultListDevicePersonnelCapabilityNoPersonnelResponseDTOIsSet>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceEmployeeCapacity/getEmployeeListByNoSetDeviceEmployeeCapacity",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备人员能力未设置人员查询DTO */
export interface IEquipmentPersonnelCapabilityNoPersonnelQueryDTOIsSet {
    /** 搜索参数 */
    searchValue?: string;
}
/** JSONResult«List«设备人员能力未设置人员响应DTO»» */
export interface IJSONResultListDevicePersonnelCapabilityNoPersonnelResponseDTOIsSet {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEquipmentPersonnelCapabilityNoPersonnelIsSetToRespondToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备人员能力未设置人员响应DTO */
export interface IEquipmentPersonnelCapabilityNoPersonnelIsSetToRespondToTheDTO {
    /** 员工id */
    employeeId?: string;
    /** 员工code */
    employeeCode?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
}
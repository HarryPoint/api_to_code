import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/设备人员能力相关/existsDeviceMaintainTaskUsingPOST
*/
export default function fetchMethod(options: { data: IDevicePersonnelCapabilityWhetherThereIsATaskRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListDevicePersonnelCapabilityWhetherATaskResponseDTOExists>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceEmployeeCapacity/existsDeviceMaintainTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备人员能力是否存在任务请求DTO */
export interface IDevicePersonnelCapabilityWhetherThereIsATaskRequestDTO {
    /** 员工能力ids */
    deviceEmployeeCapacityIds?: string[];
}
/** JSONResult«List«设备人员能力是否存在任务响应DTO»» */
export interface IJSONResultListDevicePersonnelCapabilityWhetherATaskResponseDTOExists {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDevicePersonnelCapabilityWhetherThereIsATaskResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备人员能力是否存在任务响应DTO */
export interface IDevicePersonnelCapabilityWhetherThereIsATaskResponseDTO {
    /** 员工名称 */
    employeeName?: string;
}
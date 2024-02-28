import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:17400/doc.html#/default/进出料设备相关/scanMoveInDeviceByBatchUsingPOST
*/
export default function fetchMethod(options: { data: IFeedEquipmentQueryDTO }, extraOptions?: any) {
    return http<IJSONResultListFeedDeviceRespondsToDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutDevice/scanMoveInDeviceByBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料设备查询DTO */
export interface IFeedEquipmentQueryDTO {
    /** 生产任务ids */
    produceTaskIds?: string[];
    /** 名称或者编号 */
    nameOrCode?: string;
}
/** JSONResult«List«进料设备响应DTO»» */
export interface IJSONResultListFeedDeviceRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheFeedDeviceRespondsToDTO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料设备响应DTO_1 */
export interface ITheFeedDeviceRespondsToDTO1 {
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 设备编号 */
    code?: string;
    /** 生产工艺设备id */
    produceTechnologyDeviceId?: string[];
}

import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/未排产订单相关/getClassShiftIdsByScheduleDateUsingPOST
*/
export default function fetchMethod(options: { data: ISchedulingDateDTO }, extraOptions?: any) {
    return http<IJSONResultSetlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/notPlan/getClassShiftIdsByScheduleDate",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 排班日期DTO */
export interface ISchedulingDateDTO {
    /** 排班日期 yyyy-MM-dd */
    scheduleDate?: number;
}
/** JSONResult«Set«long»» */
export interface IJSONResultSetlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

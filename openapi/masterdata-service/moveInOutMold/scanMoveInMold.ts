import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料模具相关/scanMoveInMoldUsingPOST
*/
export default function fetchMethod(data: IFeedMoldScanRequestDTO, extraOptions?: any) {
    return http<IJSONResultFeedMoldRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutMold/scanMoveInMold",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 进料模具扫描请求DTO */
export interface IFeedMoldScanRequestDTO {
    /** 生产任务id */
    produceTaskId: number;
    /** 编号 */
    code: string;
}
/** JSONResult«进料模具响应DTO» */
export interface IJSONResultFeedMoldRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheFeedMoldRespondsToDTO1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 进料模具响应DTO_1 */
export interface ITheFeedMoldRespondsToDTO1 {
    /** 模具id */
    id?: number;
    /** 模具名称 */
    name?: string;
    /** 模具编号 */
    code?: string;
    /** 生产工艺模具id */
    produceTechnologyMoldId?: number[];
}

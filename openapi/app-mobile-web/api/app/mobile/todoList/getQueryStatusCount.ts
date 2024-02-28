import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/待办相关/getQueryStatusCountUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultNumberOfToDoQueryStatesReturnedToVO>(
        {
            url: "/app-mobile-web/api/app/mobile/todoList/getQueryStatusCount",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«待办事项查询状态数量返回VO» */
export interface IJSONResultNumberOfToDoQueryStatesReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: INumberOfBacklogQueryStatesReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 待办事项查询状态数量返回VO */
export interface INumberOfBacklogQueryStatesReturnsVO {
    /** 待处理数 */
    notHandleCount?: number;
    /** 已逾期数 */
    overdueCount?: number;
    /** 已处理数 */
    handledCount?: number;
    /** 抄送我的数量 */
    carbonCopyCount?: number;
    /** 我发起的数量 */
    createdByMeCount?: number;
    /** 全部数量 */
    totalCount?: number;
    /** 未读数量 */
    notReadCount?: number;
    /** 进行中数量 */
    inProgressCount?: number;
    /** 已完成数量 */
    completeCount?: number;
    /** 未通过数量 */
    failedCount?: number;
}

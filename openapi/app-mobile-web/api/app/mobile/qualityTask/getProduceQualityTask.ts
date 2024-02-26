import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/质检任务相关/getProduceQualityTaskUsingPOST
*/
export default function fetchMethod(options: { data: ITheInspectionTaskSearchesForVO1OnTheEmployee }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheInspectionTaskReturnsVOForTheEmployee>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/getProduceQualityTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务针对员工端搜索VO_1 */
export interface ITheInspectionTaskSearchesForVO1OnTheEmployee {
    /** 当前页面 */
    pageNo?: number;
    /** 任务状态 */
    statusList?: ('WAIT' | 'COMPLETE' | 'CANCEL' | 'CLOSE')[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id */
    processId?: number;
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 送检人id */
    createUserId?: number;
    /** 结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 送检物料id */
    materialId?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«质检任务针对员工返回VO»» */
export interface IJSONResultPagingInformationTheInspectionTaskReturnsVOForTheEmployee {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationTheInspectionTaskReturnsVOForTheEmployee;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«质检任务针对员工返回VO» */
export interface IPagingInformationTheInspectionTaskReturnsVOForTheEmployee {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheInspectionTaskIsReturnedToVOForTheEmployee[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 质检任务针对员工返回VO */
export interface ITheInspectionTaskIsReturnedToVOForTheEmployee {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 所属生产任务id */
    produceTaskId?: number;
    /** 所属生产任务号 */
    produceTaskNo?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应工艺路径步骤id */
    routingStepId?: number;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 状态 */
    status?: ('WAIT' | 'COMPLETE' | 'CANCEL' | 'CLOSE');
    /** 状态描述 */
    statusDesc?: string;
    /** 送检人id */
    createUserId?: number;
    /** 送检人姓名 */
    createUsername?: string;
    /** 送检人工号 */
    createUserCode?: string;
    /** 送检时间 */
    createTime?: string;
}

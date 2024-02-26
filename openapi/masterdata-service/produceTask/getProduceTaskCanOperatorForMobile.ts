import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getProduceTaskCanOperatorForMobileUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskListYouCanQueryDtosForBatchOperationItemsOnMobileTerminalsparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd>(
        {
            url: "/masterdata-service/produceTask/getProduceTaskCanOperatorForMobile",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务列表可批量操作项查询DTO(针对移动端) */
export interface IProductionTaskListYouCanQueryDtosForBatchOperationItemsOnMobileTerminals {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 任务类型 */
    types?: ('PRODUCE' | 'BACK')[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 生产任务可操作类型 */
    optTypes?: ('CAN_MOVE_IN' | 'CAN_QUALITY' | 'CAN_MOVE_OUT')[];
    /** 工序id */
    processId: number;
    /** 任务ids */
    taskIds?: number[];
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch?: string;
    /** 物料id */
    materialIds?: number[];
    /** 任务状态 */
    statusList?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL')[];
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos?: string[];
    /** 工序id集合 */
    processIds?: number[];
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime?: string;
    /** 计划生产数量最低数量 */
    planProduceMinQuantity?: number;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime?: string;
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity?: number;
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: ('Y' | 'N');
    /** 查询类型 */
    queryType?: ('MOVE_IN' | 'MOVE_OUT' | 'DEVICE' | 'MOLD');
    /** undefined */
    produceOrderIds?: number[];
    /** undefined */
    userId?: number;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: ('Y' | 'N');
    /** 生产订单字段搜索 */
    produceOrderSearchList?: IProcessDataDetailsSearchVO[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: ('NONE' | 'EQ' | 'LIKE' | 'RANGE' | 'SELECTOR' | 'IS_NULL' | 'NOT_NULL' | 'NE' | 'REGEXP');
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** JSONResult«生产任务列表可批量操作按钮返回DTO(针对移动端)» */
export interface IJSONResultProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务列表可批量操作按钮返回DTO(针对移动端) */
export interface IProductionTaskListCanBeBatchOperationButtonReturnDTOForMobileEnd {
    /** 可批量进料 */
    canBatchMoveIn?: ('Y' | 'N');
    /** 可批量出料 */
    canBatchMoveOut?: ('Y' | 'N');
    /** 可批量录入设备 */
    canBatchRecordDevice?: ('Y' | 'N');
    /** 可批量录入模具 */
    canBatchRecordMold?: ('Y' | 'N');
}

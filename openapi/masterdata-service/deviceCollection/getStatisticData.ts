import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据概览相关/getStatisticDataUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceStatisticsSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultVOIsReturnedFromTheDeviceDataCollectionParameterStatisticsQuery>(
        {
            url: "/masterdata-service/deviceCollection/getStatisticData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备统计数据搜索VO */
export interface IDeviceStatisticsSearchVO {
    /** 设备id集 */
    deviceIds?: string[];
    /** 查询参数id集 */
    paramIds?: string[];
    /** 开始时间, yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 结束时间，yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 时间粒度，设备数采统计只支持时、日、月 */
    timeType?: EDeviceStatisticsSearchVO_timeType;
    /** 展示的时间单位的类型，hms */
    deviceParamUnitTimeType?: EDeviceStatisticsSearchVO_deviceParamUnitTimeType;
}
/** JSONResult«设备数采参数统计查询返回VO» */
export interface IJSONResultVOIsReturnedFromTheDeviceDataCollectionParameterStatisticsQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IVOIsReturnedFromTheDeviceDataAcquisitionParameterStatisticsQuery;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采参数统计查询返回VO */
export interface IVOIsReturnedFromTheDeviceDataAcquisitionParameterStatisticsQuery {
    /** 是否和预期查询相符 Y-相符，不显示异常信息；N-不相符，显示异常信息 */
    isConsistent?: EVOIsReturnedFromTheDeviceDataAcquisitionParameterStatisticsQuery_isConsistent;
    /** 实际查询时间 - 开始 */
    actualBeginTime?: number;
    /** 实际查询时间 - 结束 */
    actualEndTime?: number;
    /** 实际数据条数 */
    actualDataCount?: number;
    /** 参数信息集 */
    paramList?: IDeviceDataAcquisitionParameterStatisticsReturnVO[];
}
/** 设备数采参数统计返回VO */
export interface IDeviceDataAcquisitionParameterStatisticsReturnVO {
    /** 参数名称 */
    paramName?: string;
    /** 参数编号 */
    paramCode?: string;
    /** 参数单位类型 */
    paramUnitType?: string;
    /** 参数单位 */
    paramUnit?: string;
    /** 设备信息集 */
    deviceList?: IDeviceDataCollectionStatisticsReturnVO[];
}
/** 设备数采统计返回VO */
export interface IDeviceDataCollectionStatisticsReturnVO {
    /** 设备名称 */
    deviceName?: string;
    /** 设备编号 */
    deviceNo?: string;
    /** 详细数据 */
    list?: ITheDeviceDataCollectionStatisticsDetailsAreReturnedToVO[];
    /** 下限，如果为空，则说明没有下限 */
    lowerLimit?: number;
    /** 上限，如果为空，则说明没有上限 */
    upperLimit?: number;
}
/** 设备数采统计明细返回VO */
export interface ITheDeviceDataCollectionStatisticsDetailsAreReturnedToVO {
    /** 数据值 */
    dataValue?: number;
    /** 数据采集时间 */
    collectTime?: number;
}

export enum EDeviceStatisticsSearchVO_timeType {
    /** 时 */
    HOUR = "HOUR",
    /** 日 */
    DAY = "DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum EDeviceStatisticsSearchVO_deviceParamUnitTimeType {
    /** h */
    HOUR = "HOUR",
    /** m */
    MINUTE = "MINUTE",
    /** s */
    SECOUN = "SECOUN"
}

export enum EVOIsReturnedFromTheDeviceDataAcquisitionParameterStatisticsQuery_isConsistent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

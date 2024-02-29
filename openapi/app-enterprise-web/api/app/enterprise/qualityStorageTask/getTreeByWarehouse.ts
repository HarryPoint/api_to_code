import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/质检管理/getTreeByWarehouseUsingGET
*/
export default function fetchMethod(options: { params: { storehouseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListThePositionTreeReturnsVO1>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityStorageTask/getTreeByWarehouse",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«仓位树返回VO»»_1 */
export interface IJSONResultListThePositionTreeReturnsVO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPositionTreeReturnsVO6[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓位树返回VO_6 */
export interface IPositionTreeReturnsVO6 {
    /** id */
    id?: string;
    /** 仓位名称 */
    name?: string;
    /** 仓位编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 区域名称 */
    areaName?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 子仓位 */
    children?: IPositionTreeReturnsVO7[];
}
/** 仓位树返回VO_7 */
export interface IPositionTreeReturnsVO7 {
    /** id */
    id?: string;
    /** 仓位名称 */
    name?: string;
    /** 仓位编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 区域名称 */
    areaName?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 子仓位 */
    children?: IPositionTreeReturnsVO7[];
}
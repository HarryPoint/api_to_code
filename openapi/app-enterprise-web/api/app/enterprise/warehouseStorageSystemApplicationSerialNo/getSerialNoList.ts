import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/仓位系统应用库存序列号相关/getWarehouseStorageSystemApplicationSerialNoUsingPOST
*/
export default function fetchMethod(options: { data: ITheWarehouseSystemAppliesTheInventorySerialNumberPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnedObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseStorageSystemApplicationSerialNo/getSerialNoList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 仓位系统应用库存序列号分页查询对象 */
export interface ITheWarehouseSystemAppliesTheInventorySerialNumberPagingQueryObject {
    /** 仓位系统应用id(eg：物料id) */
    warehouseSystemApplicationId?: number;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 批次号 */
    lotNo?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 仓库id */
    storehouseIds?: number[];
    /** 仓位id */
    warehouseIds?: number[];
    /** 序列号 */
    serialNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«仓位系统应用库存序列号分页返回对象»» */
export interface IJSONResultPagingInformationTheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnedObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationTheWarehouseSystemAppliesInventorySerialNumberPagingToReturnObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«仓位系统应用库存序列号分页返回对象» */
export interface IPagingInformationTheWarehouseSystemAppliesInventorySerialNumberPagingToReturnObjects {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnObject[];
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
/** 仓位系统应用库存序列号分页返回对象 */
export interface ITheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnObject {
    /** 仓位系统应用关联数据id(eg：物料id) */
    warehouseSystemApplicationId?: number;
    /** 批次号 */
    lotNo?: string;
    /** 仓库id */
    storehouseId?: number;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓位id */
    warehouseId?: number;
    /** 仓位名称 */
    warehouseName?: string;
    /** 序列号 */
    serialNo?: string;
    /** 序列号备注 */
    serialRemark?: string;
}

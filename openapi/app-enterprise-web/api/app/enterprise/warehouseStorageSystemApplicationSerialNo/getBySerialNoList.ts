import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/仓位系统应用库存序列号相关/getWarehouseStorageSystemApplicationBySerialNoListUsingPOST
*/
export default function fetchMethod(options: { data: ITheWarehouseSystemAppliesTheInventorySerialNumberQueryObject }, extraOptions?: any) {
    return http<IJSONResultListTheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseStorageSystemApplicationSerialNo/getBySerialNoList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓位系统应用库存序列号查询对象 */
export interface ITheWarehouseSystemAppliesTheInventorySerialNumberQueryObject {
    /** 序列号 */
    serialNos?: string[];
}
/** JSONResult«List«仓位系统应用库存序列号分页返回对象»» */
export interface IJSONResultListTheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓位系统应用库存序列号分页返回对象 */
export interface ITheWarehouseSystemAppliesTheInventorySerialNumberPagingReturnObject {
    /** 仓位系统应用关联数据id(eg：物料id) */
    warehouseSystemApplicationId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
    /** 序列号 */
    serialNo?: string;
    /** 序列号备注 */
    serialRemark?: string;
}
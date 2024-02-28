import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目变更相关/getModificationDetailUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectChangeOrderFieldResponseParameters>(
        {
            url: "/masterdata-service/projectModification/getModificationDetail",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目变更单字段响应参数»» */
export interface IJSONResultListProjectChangeOrderFieldResponseParameters {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IItemChangeOrderFieldResponseParameter[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目变更单字段响应参数 */
export interface IItemChangeOrderFieldResponseParameter {
    /** 字段编号 */
    fieldCode?: string;
    /** 操作类型 */
    operateType?: EItemChangeOrderFieldResponseParameter_operateType;
    /** 旧值 */
    oldValue?: string;
    /** 新值 */
    newValue?: string;
    /** 子表数据列表 */
    childList?: IItemChangeListFieldExtensionParameterRequest[];
}
/** 项目变更单子表字段扩展参数请求 */
export interface IItemChangeListFieldExtensionParameterRequest {
    /** 行数据id */
    dataId?: string;
    /** 操作类型 */
    operateType?: EItemChangeListFieldExtensionParameterRequest_operateType;
    /** 列数据 */
    columnData?: IItemChangeOrderFieldResponseParameter[];
}

export enum EItemChangeOrderFieldResponseParameter_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 记录值 */
    RECORD = "RECORD"
}

export enum EItemChangeListFieldExtensionParameterRequest_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 记录值 */
    RECORD = "RECORD"
}

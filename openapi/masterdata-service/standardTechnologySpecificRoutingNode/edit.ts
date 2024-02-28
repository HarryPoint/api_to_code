import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺具体工艺路径节点相关/editUsingPOST_23
*/
export default function fetchMethod(options: { data: IStandardProcessSpecificProcessPathNodeEditRequestObject }, extraOptions?: any) {
    return http<IJSONResultProcessPathNodeEditsTheResponseObject>(
        {
            url: "/masterdata-service/standardTechnologySpecificRoutingNode/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺具体工艺路径节点编辑请求对象 */
export interface IStandardProcessSpecificProcessPathNodeEditRequestObject {
    /** 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id */
    standardTechnologyId?: string;
    /** 物料id */
    materialId: string;
    /** bomId */
    bomId?: string;
    /** 工艺路径id --新增时传递为null, 修改时传递id */
    routingId?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 工艺路径名称 */
    routingName: string;
    /** 工艺路径详情列表 */
    detailList: IStandardProcessSpecificProcessPathNodeDetailsEditRequestObject[];
}
/** 标准工艺具体工艺路径节点详情编辑请求对象 */
export interface IStandardProcessSpecificProcessPathNodeDetailsEditRequestObject {
    /** 工艺路径步骤id, 新增时传递为null, 修改时传递id */
    routingStepId?: string;
    /** 所属工序id */
    processId: string;
}
/** JSONResult«工艺路径节点编辑响应对象» */
export interface IJSONResultProcessPathNodeEditsTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessPathNodeEditsResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺路径节点编辑响应对象 */
export interface ITheProcessPathNodeEditsResponseObjects {
    /** 工艺路径id */
    routingId?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径详情列表 */
    detailList?: IProcessPathNodeDetailsEditResponseObject[];
}
/** 工艺路径节点详情编辑响应对象 */
export interface IProcessPathNodeDetailsEditResponseObject {
    /** 工艺步骤id */
    routingStepId?: string;
    /** 工序id */
    processId?: string;
}

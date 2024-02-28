import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:17400/doc.html#/default/流程相关/getDetailPageConfigAppListUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultFlowPathDetailPageConfigAppResponseDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/flowPath/getDetailPageConfigAppList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«FlowPathDetailPageConfigAppResponseDTO» */
export interface IJSONResultFlowPathDetailPageConfigAppResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathDetailPageConfigAppResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathDetailPageConfigAppResponseDTO */
export interface IFlowPathDetailPageConfigAppResponseDTO {
    /** app列表 */
    appList?: IFlowPathDetailPageConfigItem[];
}
/** FlowPathDetailPageConfigItem */
export interface IFlowPathDetailPageConfigItem {
    /** 详细页配置ID */
    id?: string;
    /** App/FlowPath的ID */
    appId?: string;
    /** App/FlowPath编号 */
    appCode?: string;
    /** App/FlowPath名称 */
    appName?: string;
    /** 页签名称/别名 */
    aliasName?: string;
    /** App/FlowPath类型 */
    appType?: EFlowPathDetailPageConfigItem_appType;
}

export enum EFlowPathDetailPageConfigItem_appType {
    /** 单据 */
    BILL = "BILL",
    /** 基础数据 */
    DATA = "DATA",
    /** 多级基础数据 */
    TREE_DATA = "TREE_DATA",
    /** 页面 */
    PAGE = "PAGE"
}

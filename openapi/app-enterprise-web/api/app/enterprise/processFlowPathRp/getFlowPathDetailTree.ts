import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/工序字段对应表相关/getFlowPathDetailTreeUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProcessTreeVO1>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processFlowPathRp/getFlowPathDetailTree",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程树VO»»_1 */
export interface IJSONResultListProcessTreeVO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessTreeVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程树VO_1 */
export interface IProcessTreeVO1 {
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 流程id */
    flowPathId?: string;
    /** 流程树类型 */
    treeType?: EProcessTreeVO1_treeType;
    /** 流程code */
    flowPathCode?: string;
    /** 流程类型 */
    flowPathType?: EProcessTreeVO1_flowPathType;
    /** 子集 */
    children?: IProcessTreeVO1[];
}

export enum EProcessTreeVO1_treeType {
    /** 菜单 */
    MENU = "MENU",
    /** 流程 */
    FLOW = "FLOW",
    /** 流程明细表 */
    FLOW_TABLE = "FLOW_TABLE"
}

export enum EProcessTreeVO1_flowPathType {
    /** 单据 */
    BILL = "BILL",
    /** 基础数据 */
    DATA = "DATA",
    /** 多级基础数据 */
    TREE_DATA = "TREE_DATA",
    /** 页面 */
    PAGE = "PAGE"
}

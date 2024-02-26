import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程版本相关/getLastVersionByFlowPathIdsUsingPOST
*/
export default function fetchMethod(data: number[], extraOptions?: any) {
    return http<IJSONResultListProcessVersionRespondsToVO>(
        {
            url: "/flow-service/flowPathVersion/getLastVersionByFlowPathIds",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程版本响应VO»» */
export interface IJSONResultListProcessVersionRespondsToVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITheProcessVersionRespondsToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 流程版本响应VO */
export interface ITheProcessVersionRespondsToVO {
    /** id */
    id: number;
    /** 所属企业id */
    enterpriseId: number;
    /** 所属流程id */
    flowPathId: number;
    /** 版本排名 */
    versionRank: number;
    /** 是否是系统流程 */
    isSystem: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 简介 */
    description: string;
    /** 发布终端值合计 */
    publishTotal: number;
    /** 是否是多流程 */
    isMultiFlow: string;
}
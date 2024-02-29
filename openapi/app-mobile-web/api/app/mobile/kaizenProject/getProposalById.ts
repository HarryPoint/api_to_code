import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/项目相关/getProposalByIdUsingPOST
*/
export default function fetchMethod(options: { params: { proposalId?: string } }, extraOptions?: any) {
    return http<IJSONResultProposalResponseDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/kaizenProject/getProposalById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProposalResponseDTO» */
export interface IJSONResultProposalResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProposalResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProposalResponseDTO */
export interface IProposalResponseDTO {
    /** undefined */
    id?: string;
    /** 编号 */
    code?: string;
    /** 建议名称 */
    name?: string;
    /** 改善类别ID */
    improvementCategoryId?: string;
    /** 改善类别名称 */
    improvementCategoryName?: string;
    /** 改善部门 */
    improvementDeptId?: string;
    /** 改善部门负责人 */
    improvementDeptLeaderId?: string;
    /** 提议部门负责人 */
    createDeptLeaderId?: string;
    /** 问题描述 */
    problemDesc?: string;
    /** 解决方案 */
    solution?: string;
    /** 可增加的收益或节约成本估算 */
    savingCost?: string;
    /** 其他说明 */
    remark?: string;
    /** 图片上传 */
    imageKeys?: string[];
}
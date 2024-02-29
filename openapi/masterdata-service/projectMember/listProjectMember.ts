import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/项目成员相关/listProjectMemberUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<ITheJSONResultListProjectMemberCountsTheResponseObject>(
        {
            url: "/masterdata-service/projectMember/listProjectMember",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象 */
export interface IItemNameNumberPublicQueryObject {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 条数 */
    limit?: number;
    /** 项目成员id集合 */
    ids?: string[];
    /** 项目计划ids */
    projectPlanIds?: string[];
    /** undefined */
    projectIds?: string[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目成员统计响应对象»» */
export interface ITheJSONResultListProjectMemberCountsTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectMembersCountResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目成员统计响应对象 */
export interface IProjectMembersCountResponseObjects {
    /** 项目成员id */
    id?: string;
    /** 项目成员名称 */
    name?: string;
    /** 项目成员工号 */
    code?: string;
    /** 员工id */
    employeeId?: string;
    /** 所属部门id */
    departmentId?: string;
    /** 所属部门名称 */
    departmentName?: string;
}
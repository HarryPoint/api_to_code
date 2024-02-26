import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/员工相关/getUserInfoListByEmployeeIdListUsingPOST
*/
export default function fetchMethod(data: IUserInfoQueryRequestDTO, extraOptions?: any) {
    return http<IJSONResultUserInfoQueryResponseDTO>(
        {
            url: "/plk-uaa-service/employee/getUserInfoListByEmployeeIdList",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** UserInfoQueryRequestDTO */
export interface IUserInfoQueryRequestDTO {
    /** 员工ID列表不能为空 */
    employeeIdList: number[];
    /** 企业ID */
    enterpriseId: number;
}
/** JSONResult«UserInfoQueryResponseDTO» */
export interface IJSONResultUserInfoQueryResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IUserInfoQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** UserInfoQueryResponseDTO */
export interface IUserInfoQueryResponseDTO {
    /** 用户列表 */
    userList: IEnterpriseUserDTO[];
}
/** EnterpriseUserDTO */
export interface IEnterpriseUserDTO {
    /** id */
    id: number;
    /** 手机号 */
    telephone: string;
    /** 用户名 */
    username: string;
    /** 头像 */
    avatar: string;
    /** 员工ID */
    employeeId: number;
}
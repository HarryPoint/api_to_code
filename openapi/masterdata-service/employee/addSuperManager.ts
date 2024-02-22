import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/员工相关/addSuperManagerUsingPOST
export function fetchMethod(data: INewRequestDTOForEmployeeOvermanagement) {
    return post({
      url: "/masterdata-service/employee/addSuperManager",
      data,
    });
}
// 员工超管新增请求DTO
export interface INewRequestDTOForEmployeeOvermanagement {
    // 员工姓名
    name: string;
    // 登录密码
    password: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

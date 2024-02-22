import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目角色相关/removeByIdUsingPOST
export function fetchMethod(data: IIdInformation) {
    return post({
      url: "/masterdata-service/projectRole/removeById",
      data,
    });
}
// id信息
export interface IIdInformation {
    // id
    id: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

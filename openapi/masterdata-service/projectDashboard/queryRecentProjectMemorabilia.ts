// 项目大事记大屏查询dto
export interface I项目大事记大屏查询dto {
    // 项目大类
    projectCategory: string;
    // 查询条数
    limit: number;
    // undefined
    projectIds: number[];
}
// JSONResult«List«项目大事记响应对象»»
export interface IJSONResultList项目大事记响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目大事记响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目大事记响应对象
export interface I项目大事记响应对象 {
    // 创建时间
    createTime: string;
    // 大事记内容
    content: string;
    // 项目大事记id
    projectMemorabiliaId: number;
    // 项目id
    projectId: number;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
}

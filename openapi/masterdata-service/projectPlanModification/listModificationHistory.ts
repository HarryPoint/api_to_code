// JSONResult«List«项目集合变更信息»»
export interface IJSONResultList项目集合变更信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目集合变更信息[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目集合变更信息
export interface I项目集合变更信息 {
    // id
    id: number;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
    // code
    code: string;
    // 项目名称
    projectId: number;
    // 项目编号
    projectCode: string;
    // 发起变更人员
    modifyUserId: number;
    // 版本创建时间
    createTime: string;
    // 版本更新时间
    updateTime: string;
}

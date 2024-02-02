// JSONResult«List«项目门户响应对象»»
export interface IJSONResultList项目门户响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目门户响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目门户响应对象
export interface I项目门户响应对象 {
    // 项目id
    id: number;
    // 项目编号
    code: string;
    // 项目名称
    name: string;
    // 项目状态
    projectStatus: string;
    // 项目类型名称
    projectTypeName: string;
    // 项目经理名称
    projectManagerName: string;
    // undefined
    projectTypeId: number;
    // undefined
    projectManagerId: number;
}

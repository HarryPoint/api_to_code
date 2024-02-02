// 分页_1
export interface I分页_1 {
    // ID 列表
    customerIdList: number[];
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 客户名称，模糊匹配
    name: string;
    // 客户名称或Code，模糊匹配
    nameOrCode: string;
    // 是否包含销售用户，默认为 不包含(N)
    isContainSalesUser: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«Id，名称，编号VO»»
export interface IJSONResultListId名称编号VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IId名称编号VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，名称，编号VO
export interface IId名称编号VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}

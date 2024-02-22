// http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectLeaderInstructReportUsingPOST
// JSONResult«分页信息«项目领导批示报表响应对象»»
export interface IJSONResultPagingInformationProjectLeaderDirectiveReportResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationItemLeaderIndicatesTheReportResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«项目领导批示报表响应对象»
export interface IPageInformationItemLeaderIndicatesTheReportResponseObject {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProjectLeadIndicatesReportResponseObject[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 项目领导批示报表响应对象
export interface IProjectLeadIndicatesReportResponseObject {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 项目编号
    projectCode: string;
    // 项目类型id
    projectTypeId: number;
    // 项目类型名称
    projectTypeName: string;
    // 项目大类
    projectCategory: string;
    // 项目大类名称
    projectCategoryName: string;
    // 项目经理名称
    projectManagerName: string;
    // 是否超期
    isOverdue: string;
    // 超期天数(天)
    overdueDay: number;
    // 状态
    status: string;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
    // undefined
    projectManagerId: number;
    // 责任单位名称
    responsibleDeptName: string;
    // 责任人名称列表
    responsibleUserList: string[];
    // 时间节点
    timeNode: string;
    // 实际完成时间
    actualCompleteTime: string;
    // 密级名称
    secretTypeName: string;
    // 反馈周期名称
    feedbackCycleName: string;
    // undefined
    responsibleDeptId: number;
    // undefined
    responsibleUserIds: Record<string, any>[];
    // undefined
    secretType: string;
    // undefined
    feedbackCycle: string;
}
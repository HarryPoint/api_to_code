import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getRouterAndPermissionUsingPOST_1
*/
export default function fetchMethod(data: IEnterpriseRoutingTreeQueryDTO1, extraOptions?: any) {
    return http<IJSONResultRoutePermissionResponseDTO>(
        {
            url: "/plk-uaa-service/saasAuth/getRouterAndPermission",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 企业路由树查询 DTO_1 */
export interface IEnterpriseRoutingTreeQueryDTO1 {
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 最大级别(包含) */
    maxLevel: number;
    /** 权限码集合 */
    permissionCodeSet: string[];
    /** 查询模式 */
    queryModel: string;
    /** 父级路由code */
    parentRouterCode: string;
    /** 应用级别 */
    applicationLevel: string;
    /** 服务对象ID */
    serviceObjectId: number;
}
/** JSONResult«路由权限响应 DTO» */
export interface IJSONResultRoutePermissionResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITheRoutePermissionRespondsToTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 路由权限响应 DTO */
export interface ITheRoutePermissionRespondsToTheDTO {
    /** 路由集 */
    routerList: ITheUserRoutingTreeRespondsToTheDTO[];
    /** 权限码集 */
    permissionCodeList: string[];
}
/** 用户路由树响应 DTO */
export interface ITheUserRoutingTreeRespondsToTheDTO {
    /** id */
    id: number;
    /** 企业id */
    enterpriseId: number;
    /** 路由id */
    routerId: number;
    /** 是否系统路由 */
    isSystem: string;
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 所属权限编码 */
    permissionCode: string;
    /** 父级路由id */
    parentId: number;
    /** 父级路由编码 */
    parentCode: string;
    /** 路由name */
    name: string;
    /** 路由code */
    code: string;
    /** 菜单类型 */
    type: string;
    /** 图标 */
    icon: string;
    /** 级别 */
    level: number;
    /** 路由排序 */
    sort: number;
    /** 是否存在数据权限 */
    hasDataAuth: string;
    /** 配置 */
    config: ITheEnterpriseRouteConfigurationRespondsToTheDTO;
    /** 当前用户是否收藏 */
    isFavorite: string;
    /** 子集 */
    children: ITheUserRoutingTreeRespondsToTheDTO[];
}
/** 企业路由配置响应 DTO */
export interface ITheEnterpriseRouteConfigurationRespondsToTheDTO {
    /** 菜单类型 */
    menuType: string;
    /** 应用配置 */
    appConfig: ITheEnterpriseApplicationRouteConfigurationRespondsToTheDTO;
    /** 外部报表配置 */
    rpExtConfig: ITheEnterpriseApplicationRouteConfigurationRespondsToDTO1;
    /** 应用对应的组织字段列表 */
    appOrganizationFiledList: ITheEnterpriseRouteApplicationFieldRespondsToTheDTO[];
}
/** 企业应用路由配置响应 DTO */
export interface ITheEnterpriseApplicationRouteConfigurationRespondsToTheDTO {
    /** 系统应用类型 */
    appSystemType: string;
    /** 应用id */
    appId: number;
}
/** 企业应用路由配置响应 DTO_1 */
export interface ITheEnterpriseApplicationRouteConfigurationRespondsToDTO1 {
    /** 外部报表id */
    extReportId: number;
    /** 链接地址 */
    link: string;
    /** 展示方式 */
    displayMode: string;
}
/** 企业路由应用字段响应 DTO */
export interface ITheEnterpriseRouteApplicationFieldRespondsToTheDTO {
    /** 应用字段序列号 */
    appFieldSerialNo: string;
    /** 应用字段名 */
    appFieldName: string;
    /** 应用字段编码 */
    appFieldCode: string;
    /** 应用字段排序 */
    appFieldSort: number;
    /** 应用字段类型 */
    appFieldType: string;
    /** 是否是表格内字段 */
    isTableField: string;
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode: string;
}
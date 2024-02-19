// JSONResult«List«导入模板»»
export interface IJSONResultListImportTemplate {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IImportTemplate[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导入模板
export interface IImportTemplate {
    // ID
    id: number;
    // 模板编码
    code: string;
    // 模板名称
    name: string;
    // 文件key
    fileKey: string;
    // 表定义
    tableDefine: IAssociationTableDefinition;
    // 是否预设模板模板
    presetTemplate: boolean;
    // 应用
    application: IApplicationDTO;
    // 描述
    desc: string;
}
// 关联表定义
export interface IAssociationTableDefinition {
    // undefined
    code: string;
}
// ApplicationDTO
export interface IApplicationDTO {
    // undefined
    id: number;
    // undefined
    code: string;
}

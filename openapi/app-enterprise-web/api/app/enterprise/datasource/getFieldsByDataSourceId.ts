import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/打印数据源相关/getFieldsByDataSourceIdUsingGET
*/
export default function fetchMethod(options: { params: { dataSourceId?: string; printTemplateType?: ('LIST' | 'FORM' | 'FORM_DETAIL') } }, extraOptions?: any) {
    return http<IJSONResultListDataSourceFieldResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/datasource/getFieldsByDataSourceId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«数据源字段响应对象»» */
export interface IJSONResultListDataSourceFieldResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataSourceFieldResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 数据源字段响应对象 */
export interface IDataSourceFieldResponseObject {
    /** id/流程表单字段id */
    id?: number;
    /** 父级id */
    parentId?: number;
    /** 父级serialNo */
    parentSerialNo?: string;
    /** 所属企业id */
    enterpriseId?: number;
    /** 数据源id */
    dataSourceId?: number;
    /** 字段编码 */
    fieldCode?: string;
    /** serialNo */
    serialNo?: string;
    /** 字段名称 */
    fieldName?: string;
    /** 字段类型 */
    fieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 是否子表字段 */
    isTableField?: ('Y' | 'N');
    /** 是否(列表、详情页面)查询时隐藏 */
    isQueryHidden?: ('Y' | 'N');
    /** 原数据排序 */
    sort?: number;
    /** 明细字段集合 */
    childDataSourceFields?: IDataSourceFieldResponseObject[];
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产工艺工艺路径相关/getDetailByIdUsingGET_2
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyRoutingInfoResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTechnologyRouting/getDetailById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceTechnologyRoutingInfoResponseDTO» */
export interface IJSONResultProduceTechnologyRoutingInfoResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceTechnologyRoutingInfoResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ProduceTechnologyRoutingInfoResponseDTO */
export interface IProduceTechnologyRoutingInfoResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 生产工艺id */
    produceTechnologyId?: number;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 所属工艺路径id */
    routingId?: number;
    /** 工艺路径编码 */
    code?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 关联物料id */
    materialId?: number;
    /** 关联BOM id */
    materialBomId?: number;
    /** 所属生产工艺物料BOMid */
    produceTechnologyMaterialBomId?: number;
    /** 生产工艺工艺路径步骤 */
    produceTechnologyRoutingStepList?: IProduceTechnologyRoutingStepResponseDTO[];
}
/** ProduceTechnologyRoutingStepResponseDTO */
export interface IProduceTechnologyRoutingStepResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 工艺路径id */
    routingId?: number;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 工艺路径步骤id */
    routingStepId?: number;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 所属工序id */
    processId?: number;
    /** 所属工序名称 */
    processName?: string;
    /** 所属生产工艺产能id */
    produceTechnologyCapacityId?: number;
    /** 所属生产工艺工费id */
    produceTechnologyLaborCostId?: number;
    /** 所属生产工艺工艺卡id */
    produceTechnologyProcessSheetId?: number;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: string;
    /** 进站关键参数id */
    moveInKeyParameterId?: number;
    /** 出站关键参数id */
    moveOutKeyParameterId?: number;
    /** 进出站类型 */
    inOutType?: string;
    /** 是否允许直接出站 */
    allowDirectExit?: string;
    /** 配置块的顺序数组(前端用于保存每个配置块的顺序) */
    configModuleSortArray?: Record<string, any>[];
    /** 物料消耗 */
    routingStepBomDetailList?: IProduceTechnologyRoutingStepBomDetailResponseDTO[];
}
/** ProduceTechnologyRoutingStepBomDetailResponseDTO */
export interface IProduceTechnologyRoutingStepBomDetailResponseDTO {
    /** 所属主物料bom明细id */
    produceTechnologyMaterialBomDetailId?: number;
    /** 所属bom物料id */
    childMaterialId?: number;
    /** 所属bom物料名称 */
    childMaterialName?: string;
    /** 所属bom物料编号 */
    childMaterialCode?: string;
    /** 总消耗 */
    totalConsumeCount?: number;
}

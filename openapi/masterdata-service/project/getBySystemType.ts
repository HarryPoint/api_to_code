import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/项目相关/getByPresetAppUsingPOST
*/
export default function fetchMethod(options: { data: IProjectDynamicFormRecordQuery1 }, extraOptions?: any) {
    return http<IJSONResultFormStructureVO>(
        {
            url: "/masterdata-service/project/getBySystemType",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目动态表单记录查询_1 */
export interface IProjectDynamicFormRecordQuery1 {
    /** 表单记录ID */
    id?: string;
    /** 项目ID */
    projectId?: string;
    /** 系统类型 */
    systemType?: EProjectDynamicFormRecordQuery1_systemType;
}
/** JSONResult«表单结构VO» */
export interface IJSONResultFormStructureVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFormStructureVO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 表单结构VO_1 */
export interface IFormStructureVO1 {
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 数据 */
    data?: Record<string, Record<string, any>>;
    /** 流程code */
    flowPathCode?: string;
    /** 流程id */
    flowPathId?: string;
    /** 流程版本 */
    flowPathVersionId?: string;
    /** 流程工单id */
    flowPathWorkOrderId?: string;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: EFormStructureVO1_isCustomSubmitContent;
    /** 表单结构 */
    structures?: IFormStructureVO[];
}
/** 表单结构VO */
export interface IFormStructureVO {
    /** 所属表单字段id */
    flowPathFormFieldId?: string;
    /** 节点表单关联id */
    flowPathNodeFormFieldPermissionsRpId?: string;
    /** 表单字段信息 */
    formField?: IProcessFormVO;
    /** 权限类型 */
    permissionsType?: EFormStructureVO_permissionsType;
    /** 表格内字段结构集 */
    tableStructure?: IFormStructureVO[];
}
/** 流程表单VO */
export interface IProcessFormVO {
    /** 表格字段列表 */
    actualFields?: Record<string, any>[];
    /** 地址类型 */
    addressType?: EProcessFormVO_addressType;
    /** 关联查询显示样式 */
    associationQueryShowStyle?: EProcessFormVO_associationQueryShowStyle;
    /** 是否允许负数 */
    canNegative?: EProcessFormVO_canNegative;
    /** code */
    code?: string;
    /** 编码规则 */
    codeNumberRules?: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 数据联动 */
    dataLinkage?: IFlowPathFormFieldDataLinkageVO;
    /** 日期类型 */
    dateType?: EProcessFormVO_dateType;
    /** 默认日期类型 */
    defaultDateType?: EProcessFormVO_defaultDateType;
    /** 默认值类型 */
    defaultType?: EProcessFormVO_defaultType;
    /** 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"] */
    defaultValue?: string;
    /** 说明描述 */
    description?: string;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 关联详细表单的编码 */
    formDetailRpCode?: string;
    /** 关联表单code */
    formRpCode?: string;
    /** 关联表单填充规则集 */
    formRpFills?: IProcessFormAssociatedFormFillVO[];
    /** 关联表单筛选条件组集 */
    formRpFilterGroups?: IProcessFormsAssociateFormFilterGroupVO[];
    /** 关联表单多选分组字段code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段2编码", serialNo:"字段2SerialNo", "name":"字段2名称"}] */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单展示code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"}] */
    formRpShowFields?: Record<string, any>[];
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: ITheProcessFormFormulaFieldReturnsVO[];
    /** id */
    id?: string;
    /** 是否自动获取位置 */
    isAutoGetLocation?: EProcessFormVO_isAutoGetLocation;
    /** 选项值是否可修改 */
    isCanModifySelectorOption?: EProcessFormVO_isCanModifySelectorOption;
    /** 是否启用超链接 */
    isHyperlinkEnabled?: EProcessFormVO_isHyperlinkEnabled;
    /** 是否表格内批量选择 */
    isInsideTableBatchSelect?: EProcessFormVO_isInsideTableBatchSelect;
    /** 是否是套件 */
    isKit?: EProcessFormVO_isKit;
    /** 是否必填 */
    isMust?: EProcessFormVO_isMust;
    /** 允许扫码 */
    isScan?: EProcessFormVO_isScan;
    /** 是否是系统表单字段 */
    isSystem?: EProcessFormVO_isSystem;
    /** 是否是系统必填字段 */
    isSystemMust?: EProcessFormVO_isSystemMust;
    /** 是否是系统预置字段 */
    isSystemPreset?: EProcessFormVO_isSystemPreset;
    /** 是否是表格内字段 */
    isTableField?: EProcessFormVO_isTableField;
    /** 是否在表格中展示列 */
    isTableShow?: EProcessFormVO_isTableShow;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: EProcessFormVO_isUseEmployeesWithAccounts;
    /** 套件字段类型 */
    kitColumnType?: EProcessFormVO_kitColumnType;
    /** 套件类型 */
    kitType?: EProcessFormVO_kitType;
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 名称 */
    name: string;
    /** 数值格式 */
    numberFormat?: EProcessFormVO_numberFormat;
    /** 数值类型 */
    numberType?: EProcessFormVO_numberType;
    /** 组织类型 */
    organizationType?: EProcessFormVO_organizationType;
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode?: string;
    /** 父级流程表单id */
    parentFlowPathFormFieldId?: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode?: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo?: string;
    /** 重复提示 */
    repeatTip?: string;
    /** 小数位数 */
    scaleDigit?: number;
    /** 下拉选项关联显示列表 */
    selectorAssociateDisplayList?: ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO[];
    /** 选项集字典 */
    selectorDictionaryList?: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 选项值来源 */
    selectorOptionSource?: EProcessFormVO_selectorOptionSource;
    /** 选项值来源业务编码 */
    selectorOptionSourceBusinessCode?: EProcessFormVO_selectorOptionSourceBusinessCode;
    /** 选择类型 */
    selectorType?: EProcessFormVO_selectorType;
    /** 选项集 - json数组 */
    selectors?: string;
    /** 序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    serialNo: string;
    /** 排序 */
    sort?: number;
    /** 宽度 */
    span?: number;
    /** 选择框样式 */
    style?: EProcessFormVO_style;
    /** 表格自定义字段集 */
    tableCustomFormFields?: IProcessFormVO[];
    /** 表格类型 */
    tableType?: EProcessFormVO_tableType;
    /** 提示 */
    tip?: string;
    /** 类型 */
    type: EProcessFormVO_type;
    /** 类型描述 */
    typeDesc?: string;
    /** 类型分组 */
    typeGroup?: EProcessFormVO_typeGroup;
    /** 不允许重复 */
    unableRepeat?: EProcessFormVO_unableRepeat;
    /** 表格内不允许重复 */
    unableRepeatInTable?: EProcessFormVO_unableRepeatInTable;
    /** 字段值限制规则 */
    valueLimitRules?: IFlowPathFormFieldValueLimitRuleEditDTO[];
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** 日期格式 - 用于日期 */
    dateFormat?: EProcessFormFieldEncodingRuleDetailsVO_dateFormat;
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
    /** id */
    id?: string;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: EProcessFormFieldEncodingRuleDetailsVO_isCodeAccording;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 排序 */
    sort?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 设置类型 */
    type?: EProcessFormFieldEncodingRuleDetailsVO_type;
}
/** FlowPathFormFieldDataLinkageVO */
export interface IFlowPathFormFieldDataLinkageVO {
    /** 筛选条件组集 */
    filterGroups?: IProcessFormsAssociateFormFilterGroupVO[];
    /** id */
    id?: string;
    /** 数据来源字段编码（取值字段编号） */
    sourceFieldCode?: string;
    /** 数据来源字段序列号（取值字段的序列号） */
    sourceFieldSerialNo?: string;
    /** 数据来源应用表格编码（即联动表单） */
    sourceFormDetailRpCode?: string;
    /** 数据来源应用编码（即联动表单） */
    sourceFormRpCode?: string;
}
/** 流程表单关联表单筛选条件组VO */
export interface IProcessFormsAssociateFormFilterGroupVO {
    /** 数据联动ID */
    dataLinkageId?: string;
    /** 条件集 */
    filters?: IProcessFormsAssociateFormFilterVO[];
    /** 表单字段ID */
    flowPathFormFieldId?: string;
    /** id */
    id?: string;
    /** 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组 */
    isSystemDefault?: EProcessFormsAssociateFormFilterGroupVO_isSystemDefault;
    /** 条件组名称 */
    name?: string;
}
/** 流程表单关联表单筛选条件VO */
export interface IProcessFormsAssociateFormFilterVO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 自定义值回显 */
    compareCustomValueEcho?: string;
    /** 判断对象类型 */
    compareObjType?: EProcessFormsAssociateFormFilterVO_compareObjType;
    /** 判断方式 */
    compareType?: EProcessFormsAssociateFormFilterVO_compareType;
    /** 日期动态范围 */
    dateDynamicRange?: EProcessFormsAssociateFormFilterVO_dateDynamicRange;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathFormFieldFormRpFilterGroupId?: string;
    /** id */
    id?: string;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: EProcessFormsAssociateFormFilterVO_isDisableEdit;
    /** 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。  */
    isUseDateShowFormat?: EProcessFormsAssociateFormFilterVO_isUseDateShowFormat;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
}
/** 流程表单关联表单填充VO */
export interface IProcessFormAssociatedFormFillVO {
    /** 被采取的字段序号值 */
    columnSerialNo?: string;
    /** 填充到的目标字段序号值 */
    fillFormFieldSerialNo?: string;
    /** 字段填充方式 */
    fillWay?: EProcessFormAssociatedFormFillVO_fillWay;
    /** 所属流程表单字段id */
    flowPathFormFieldId?: string;
    /** id */
    id?: string;
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: EProcessFormAssociatedFormFillVO_isAllowModificationOfFillContent;
    /** 是否警用编辑 */
    isDisableEdited?: EProcessFormAssociatedFormFillVO_isDisableEdited;
    /** 被采取的字段序号值的下级字段编码 */
    secondarySourceFieldCode?: string;
    /** 被采取的字段序号值的下级字段序号值 */
    secondarySourceFieldSerialNo?: string;
}
/** 流程表单公式字段返回VO */
export interface ITheProcessFormFormulaFieldReturnsVO {
    /** 用到的函数类型 */
    funType?: ETheProcessFormFormulaFieldReturnsVO_funType;
    /** 计算公式用到的表单序号值 */
    serialNo: string;
    /** 类型 */
    type: ETheProcessFormFormulaFieldReturnsVO_type;
}
/** 流程表单字段下拉选项关联显示VO */
export interface ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO {
    /** 关联显示字段的序列号集合 */
    associateDisplayFieldSerialNos?: Record<string, any>[];
    /** 所属流程表单字段编号 */
    flowPathFormFieldCode?: string;
    /** 所属流程表单字段id */
    flowPathFormFieldId?: string;
    /** 所属流程表单字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 下拉选项的code */
    selectorItemCode?: string;
}
/** 流程表单字段关联字典选项集VO */
export interface IProcessFormFieldAssociationDictionaryOptionSetVO {
    /** undefined */
    code?: string;
    /** undefined */
    color?: string;
    /** 能否删除 */
    isCanDelete?: EProcessFormFieldAssociationDictionaryOptionSetVO_isCanDelete;
    /** 能否修改 */
    isCanModify?: EProcessFormFieldAssociationDictionaryOptionSetVO_isCanModify;
    /** 是否预设 */
    isPreset?: EProcessFormFieldAssociationDictionaryOptionSetVO_isPreset;
    /** undefined */
    name?: string;
    /** 预设名称 */
    presetName?: string;
}
/** FormFieldOption */
export interface IFormFieldOption {
    /** undefined */
    code?: string;
    /** undefined */
    color?: string;
    /** undefined */
    name?: string;
}
/** FlowPathFormFieldValueLimitRuleEditDTO */
export interface IFlowPathFormFieldValueLimitRuleEditDTO {
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: Record<string, any>[];
    /** 值限制规则条件 */
    limitRuleCondition?: EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleCondition;
    /** 值限制规则类型 */
    limitRuleType?: EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleType;
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
}

export enum EProjectDynamicFormRecordQuery1_systemType {
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE",
    /** 生产订单 */
    PRODUCE_ORDER = "PRODUCE_ORDER",
    /** 安灯 */
    ANDON = "ANDON",
    /** 员工 */
    EMPLOYEE = "EMPLOYEE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 区域 */
    AREA = "AREA",
    /** 客户 */
    CUSTOMER = "CUSTOMER",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料BOM */
    MATERIAL_BOM = "MATERIAL_BOM",
    /** 工序 */
    PROCESS = "PROCESS",
    /** 职位 */
    POSITION = "POSITION",
    /** 银行 */
    BANK = "BANK",
    /** 单位 */
    UNIT = "UNIT",
    /** 物料库存 */
    WAREHOUSE_MATERIAL_RP = "WAREHOUSE_MATERIAL_RP",
    /** 模具 */
    MOLD = "MOLD",
    /** 调拨类型 */
    ALLOCATION_TYPE = "ALLOCATION_TYPE",
    /** 入库类型 */
    IN_STORAGE_TYPE = "IN_STORAGE_TYPE",
    /** 出库类型 */
    OUT_STORAGE_TYPE = "OUT_STORAGE_TYPE",
    /** 其他入库单 */
    OTHER_IN_STORAGE_ORDER = "OTHER_IN_STORAGE_ORDER",
    /** 其他出库单 */
    OTHER_OUT_STORAGE_ORDER = "OTHER_OUT_STORAGE_ORDER",
    /** 调拨单 */
    ALLOCATION_ORDER = "ALLOCATION_ORDER",
    /** 盘亏单 */
    INVENTORY_LOSSES_ORDER = "INVENTORY_LOSSES_ORDER",
    /** 盘盈单 */
    INVENTORY_PROFIT_ORDER = "INVENTORY_PROFIT_ORDER",
    /** 设备 */
    DEVICE = "DEVICE",
    /** 设备类型 */
    DEVICE_TYPE = "DEVICE_TYPE",
    /** 备件 */
    DEVICE_PARTS = "DEVICE_PARTS",
    /** 设备人员能力 */
    DEVICE_EMPLOYEE_CAPACITY = "DEVICE_EMPLOYEE_CAPACITY",
    /** 设备保养方案 */
    DEVICE_MAINTAIN_SCHEME = "DEVICE_MAINTAIN_SCHEME",
    /** 设备保养计划 */
    DEVICE_MAINTAIN_PLAN = "DEVICE_MAINTAIN_PLAN",
    /** 设备保养任务 */
    DEVICE_MAINTAIN_TASK = "DEVICE_MAINTAIN_TASK",
    /** 产线 */
    PRODUCTION_LINE = "PRODUCTION_LINE",
    /** 销售计划 */
    SALES_PLAN = "SALES_PLAN",
    /** 报价单 */
    QUOTE_BILL = "QUOTE_BILL",
    /** 跟进记录 */
    FOLLOW_RECORD = "FOLLOW_RECORD",
    /** 跟进计划 */
    FOLLOW_PLAN = "FOLLOW_PLAN",
    /** 工作日报 */
    DAILY_WORK = "DAILY_WORK",
    /** 合同管理 */
    CONTRACT = "CONTRACT",
    /** 商机 */
    BUSINESS_CHANCE = "BUSINESS_CHANCE",
    /** 客户转移 */
    CUSTOMER_TRANSFER = "CUSTOMER_TRANSFER",
    /** 回款单 */
    RECEIPT = "RECEIPT",
    /** 员工 */
    USER = "USER",
    /** 改善类别 */
    IMPROVEMENT_CATEGORY = "IMPROVEMENT_CATEGORY",
    /** 合理化建议 */
    PROPOSAL = "PROPOSAL",
    /** Kaizen项目任务 */
    KAIZEN_PROJECT_TASK = "KAIZEN_PROJECT_TASK",
    /** Kaizen项目 */
    KAIZEN_PROJECT = "KAIZEN_PROJECT",
    /** 合理化建议评分 */
    PROPOSAL_SCORE = "PROPOSAL_SCORE",
    /** 部门年目标设置 */
    DEPARTMENT_YEAR_TARGET_SETTING = "DEPARTMENT_YEAR_TARGET_SETTING",
    /** 供应商 */
    SUPPLIER = "SUPPLIER",
    /** 采购订单 */
    PURCHASE_ORDER = "PURCHASE_ORDER",
    /** 收付款账户 */
    PAYMENT_ACCOUNT = "PAYMENT_ACCOUNT",
    /** 采购入库单 */
    PURCHASE_IN_ORDER = "PURCHASE_IN_ORDER",
    /** 采购退货单 */
    PURCHASE_RETURN_ORDER = "PURCHASE_RETURN_ORDER",
    /** 付款单 */
    PAYMENT_ORDER = "PAYMENT_ORDER",
    /** 付款退款单 */
    PAYMENT_RETURN_ORDER = "PAYMENT_RETURN_ORDER",
    /** 预付款单 */
    PREPAID_ORDER = "PREPAID_ORDER",
    /** 销售订单 */
    SALES_ORDER = "SALES_ORDER",
    /** 销售出库单 */
    SALES_OUT_STORAGE_ORDER = "SALES_OUT_STORAGE_ORDER",
    /** 销售退货单 */
    SALES_RETURN_ORDER = "SALES_RETURN_ORDER",
    /** 收款单 */
    RECEIVABLE_ORDER = "RECEIVABLE_ORDER",
    /** 收款退款单 */
    RECEIVABLE_RETURN_ORDER = "RECEIVABLE_RETURN_ORDER",
    /** 预收款单 */
    PRE_RECEIVABLE_ORDER = "PRE_RECEIVABLE_ORDER",
    /** 生产领料单 */
    PRODUCTION_MATERIAL_ISSUANCE_ORDER = "PRODUCTION_MATERIAL_ISSUANCE_ORDER",
    /** 生产退料单 */
    PRODUCTION_MATERIAL_RETURN_ORDER = "PRODUCTION_MATERIAL_RETURN_ORDER",
    /** 生产入库单 */
    PRODUCTION_STOCK_IN_ORDER = "PRODUCTION_STOCK_IN_ORDER",
    /** 生产退库单 */
    PRODUCTION_STOCK_RETURN_ORDER = "PRODUCTION_STOCK_RETURN_ORDER",
    /** 费用类型 */
    PRODUCE_FEE_TYPE = "PRODUCE_FEE_TYPE",
    /** 费用归集 */
    PRODUCE_FEE_COLLECT = "PRODUCE_FEE_COLLECT",
    /** 项目 */
    PROJECT = "PROJECT",
    /** 项目类型 */
    PROJECT_TYPE = "PROJECT_TYPE",
    /** 项目风险类型 */
    PROJECT_RISK_TYPE = "PROJECT_RISK_TYPE",
    /** 项目风险标识 */
    PROJECT_RISK_FLAG = "PROJECT_RISK_FLAG",
    /** 项目设备信息 */
    PROJECT_DEVICE_INFO = "PROJECT_DEVICE_INFO",
    /** 项目计划 */
    PROJECT_PLAN = "PROJECT_PLAN",
    /** 项目阶段 */
    PROJECT_STAGE = "PROJECT_STAGE",
    /** 项目任务 */
    PROJECT_TASK = "PROJECT_TASK",
    /** 评审任务 */
    PROJECT_TASK_REVIEW = "PROJECT_TASK_REVIEW",
    /** 决策任务 */
    PROJECT_TASK_DECISION = "PROJECT_TASK_DECISION",
    /** 项目任务类型 */
    PROJECT_TASK_TYPE = "PROJECT_TASK_TYPE",
    /** 项目成员 */
    PROJECT_MEMBER = "PROJECT_MEMBER",
    /** 项目角色 */
    PROJECT_ROLE = "PROJECT_ROLE",
    /** 项目风险 */
    PROJECT_RISK = "PROJECT_RISK",
    /** 项目费用 */
    PROJECT_FEE = "PROJECT_FEE",
    /** 质量问题 */
    PROJECT_QUALITY_ISSUE = "PROJECT_QUALITY_ISSUE",
    /** 质量目标 */
    PROJECT_QUALITY_TARGET = "PROJECT_QUALITY_TARGET",
    /** 项目会议纪要 */
    PROJECT_MEETING_SUMMARY = "PROJECT_MEETING_SUMMARY",
    /** 行动项 */
    PROJECT_ACTION_ITEM = "PROJECT_ACTION_ITEM",
    /** 领导批示 */
    PROJECT_LEADER_INSTRUCT = "PROJECT_LEADER_INSTRUCT",
    /** 项目大事记 */
    PROJECT_MEMORABILIA = "PROJECT_MEMORABILIA",
    /** 项目简报 */
    PROJECT_BRIEF_REPORT = "PROJECT_BRIEF_REPORT",
    /** 项目信息变更单 */
    PROJECT_MODIFICATION = "PROJECT_MODIFICATION",
    /** 项目计划变更单 */
    PROJECT_PLAN_MODIFICATION = "PROJECT_PLAN_MODIFICATION",
    /** 项目成员变更单 */
    PROJECT_MEMBER_MODIFICATION = "PROJECT_MEMBER_MODIFICATION",
    /** 项目资源 */
    PROJECT_RESOURCES = "PROJECT_RESOURCES",
    /** 项目文件 */
    PROJECT_FILE = "PROJECT_FILE",
    /** 项目文件夹 */
    PROJECT_FOLDER = "PROJECT_FOLDER",
    /** 项目关闭 */
    PROJECT_CLOSE = "PROJECT_CLOSE",
    /** 项目迁移 */
    PROJECT_TRANSFER = "PROJECT_TRANSFER",
    /** 年度质量目标 */
    QMS_ANNUAL_QUALITY_TARGET = "QMS_ANNUAL_QUALITY_TARGET",
    /** 质量工作计划 */
    QMS_QUALITY_WORK_PLAN = "QMS_QUALITY_WORK_PLAN",
    /** 未完成情况分析报告 */
    QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT = "QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT",
    /** 内部审核实施计划 */
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 内部审核检查记录 */
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS",
    /** 内部审核不符合项报告 */
    QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 内部审核建议项清单 */
    QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS",
    /** 内部审核报告 */
    QMS_INTERNAL_AUDIT_REPORT = "QMS_INTERNAL_AUDIT_REPORT",
    /** 内部审核不符合项纠正措施 */
    QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 目标项 */
    QMS_TARGET_ITEM = "QMS_TARGET_ITEM",
    /** 条款号及检查内容 */
    QMS_REGULATION_NO_AND_CONTENT = "QMS_REGULATION_NO_AND_CONTENT",
    /** 外部审核实施计划 */
    QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 外部审核不符合项报告 */
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 外部审核建议项清单 */
    QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS",
    /** 外部审核不符合项纠正措施 */
    QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 外部审核报告 */
    QMS_EXTERNAL_AUDIT_REPORT = "QMS_EXTERNAL_AUDIT_REPORT",
    /** 专项审核实施计划 */
    QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 专项审核检查记录 */
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS",
    /** 专项审核不符合项报告 */
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 专项审核不符合项纠正措施 */
    QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 专项审核建议项清单 */
    QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS = "QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS",
    /** 专项审核报告 */
    QMS_SPECIAL_AUDIT_REPORT = "QMS_SPECIAL_AUDIT_REPORT",
    /** 管理评审计划 */
    QMS_MANAGEMENT_REVIEW_PLAN = "QMS_MANAGEMENT_REVIEW_PLAN",
    /** 管理评审输入材料 */
    QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL = "QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL",
    /** 管理评审报告 */
    QMS_MANAGEMENT_REVIEW_REPORT = "QMS_MANAGEMENT_REVIEW_REPORT",
    /** 物料检验类别 */
    QMS_INSPECTION_CATEGORY = "QMS_INSPECTION_CATEGORY",
    /** 检验方法 */
    QMS_INSPECTION_METHOD = "QMS_INSPECTION_METHOD",
    /** 抽样标准 */
    QMS_SAMPLING_STANDARDS = "QMS_SAMPLING_STANDARDS",
    /** 检验项 */
    QMS_INSPECTION_ITEMS = "QMS_INSPECTION_ITEMS",
    /** 检验方案 */
    QMS_INSPECTION_SCHEME = "QMS_INSPECTION_SCHEME",
    /** 来料报检单 */
    QMS_INCOMING_INSPECTION_APPLY_FORM = "QMS_INCOMING_INSPECTION_APPLY_FORM",
    /** 来料检验任务 */
    QMS_INCOMING_INSPECTION_TASK = "QMS_INCOMING_INSPECTION_TASK",
    /** 来料检验报告 */
    QMS_INCOMING_INSPECTION_REPORT = "QMS_INCOMING_INSPECTION_REPORT",
    /** 首检报检单 */
    QMS_FIRST_INSPECTION_APPLY_FORM = "QMS_FIRST_INSPECTION_APPLY_FORM",
    /** 首检检验任务 */
    QMS_FIRST_INSPECTION_TASK = "QMS_FIRST_INSPECTION_TASK",
    /** 首检检验报告 */
    QMS_FIRST_INSPECTION_REPORT = "QMS_FIRST_INSPECTION_REPORT",
    /** 工序报检单 */
    QMS_PROCESS_INSPECTION_APPLY_FORM = "QMS_PROCESS_INSPECTION_APPLY_FORM",
    /** 工序检验任务 */
    QMS_PROCESS_INSPECTION_TASK = "QMS_PROCESS_INSPECTION_TASK",
    /** 工序检验报告 */
    QMS_PROCESS_INSPECTION_REPORT = "QMS_PROCESS_INSPECTION_REPORT",
    /** 成品报检单 */
    QMS_PRODUCT_INSPECTION_APPLY_FORM = "QMS_PRODUCT_INSPECTION_APPLY_FORM",
    /** 成品检验任务 */
    QMS_PRODUCT_INSPECTION_TASK = "QMS_PRODUCT_INSPECTION_TASK",
    /** 成品检验报告 */
    QMS_PRODUCT_INSPECTION_REPORT = "QMS_PRODUCT_INSPECTION_REPORT",
    /** 出货报检单 */
    QMS_SHIPMENT_INSPECTION_APPLY_FORM = "QMS_SHIPMENT_INSPECTION_APPLY_FORM",
    /** 出货检验任务 */
    QMS_SHIPMENT_INSPECTION_TASK = "QMS_SHIPMENT_INSPECTION_TASK",
    /** 出货检验报告 */
    QMS_SHIPMENT_INSPECTION_REPORT = "QMS_SHIPMENT_INSPECTION_REPORT",
    /** 质量人员 */
    QMS_QUALITY_PERSONNEL = "QMS_QUALITY_PERSONNEL",
    /** 不合格原因 */
    QMS_REASON_OF_NON_CONFORMANCE = "QMS_REASON_OF_NON_CONFORMANCE",
    /** 不合格品处理方式 */
    QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT = "QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT",
    /** 来料不合格品处理 */
    QMS_HANDLING_OF_INCOMING_NON_CONFORMING = "QMS_HANDLING_OF_INCOMING_NON_CONFORMING",
    /** 出货不合格品处理 */
    QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING = "QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING",
    /** 成品不合格品处理 */
    QMS_HANDLE_PRODUCT_NON_CONFORMING = "QMS_HANDLE_PRODUCT_NON_CONFORMING",
    /** 质量问题信息报告单 */
    QMS_QUALITY_ISSUE_INFORMATION_REPORT = "QMS_QUALITY_ISSUE_INFORMATION_REPORT",
    /** 质量问题分析报告单 */
    QMS_QUALITY_PROBLEM_ANALYSIS_REPORT = "QMS_QUALITY_PROBLEM_ANALYSIS_REPORT",
    /** 质量问题纠正措施实施报告单 */
    QMS_QUALITY_CORRECTIVE_ACTION_REPORT = "QMS_QUALITY_CORRECTIVE_ACTION_REPORT",
    /** 8D报告单 */
    QMS_8D_REPORT = "QMS_8D_REPORT",
    /** 技术归零报告单 */
    QMS_TECHNICAL_ZEROING_REPORT = "QMS_TECHNICAL_ZEROING_REPORT",
    /** 管理归零报告单 */
    QMS_MANAGE_ZEROING_REPORT = "QMS_MANAGE_ZEROING_REPORT",
    /** FRACAS报告单 */
    QMS_FRACAS_REPORT = "QMS_FRACAS_REPORT",
    /** 改进项目 */
    QMS_IMPROVEMENT_PROJECT = "QMS_IMPROVEMENT_PROJECT",
    /** 首检不合格品处理 */
    QMS_HANDLE_FIRST_INSPECT_DEFECTS = "QMS_HANDLE_FIRST_INSPECT_DEFECTS",
    /** 工序检不合格品处理 */
    QMS_HANDLE_PROCESS_INSPECT_DEFECTS = "QMS_HANDLE_PROCESS_INSPECT_DEFECTS",
    /** 巡检不合格品处理 */
    QMS_HANDLE_PATROL_INSPECT_DEFECTS = "QMS_HANDLE_PATROL_INSPECT_DEFECTS",
    /** 质量先进集体申报 */
    QMS_ADVANCE_TEAM_DECLARE = "QMS_ADVANCE_TEAM_DECLARE",
    /** 质量先进个人申报 */
    QMS_ADVANCE_PERSONNEL_DECLARE = "QMS_ADVANCE_PERSONNEL_DECLARE",
    /** 质量月报填报 */
    QMS_QUALITY_MONTH_REPORT_FILL = "QMS_QUALITY_MONTH_REPORT_FILL",
    /** 印章式样 */
    QMS_SEAL_STYLE = "QMS_SEAL_STYLE",
    /** 印章领用申请 */
    QMS_SEAL_APPLY_FOR_RECEIVING = "QMS_SEAL_APPLY_FOR_RECEIVING",
    /** 印章挂失申请 */
    QMS_SEAL_APPLY_FOR_REPORT_LOSS = "QMS_SEAL_APPLY_FOR_REPORT_LOSS",
    /** 印章台账 */
    QMS_SEAL_LEDGER = "QMS_SEAL_LEDGER",
    /** 印章销号申请 */
    QMS_SEAL_APPLY_FOR_CANCELLATION = "QMS_SEAL_APPLY_FOR_CANCELLATION",
    /** 印章更换申请 */
    QMS_SEAL_APPLY_FOR_REPLACEMENT = "QMS_SEAL_APPLY_FOR_REPLACEMENT",
    /** 巡检计划 */
    QMS_PATROL_INSPECTION_PLAN = "QMS_PATROL_INSPECTION_PLAN",
    /** 巡检任务 */
    QMS_PATROL_INSPECTION_TASK = "QMS_PATROL_INSPECTION_TASK",
    /** 巡检报告 */
    QMS_PATROL_INSPECTION_REPORT = "QMS_PATROL_INSPECTION_REPORT",
    /** 文件分类 */
    FILE_CATEGORY = "FILE_CATEGORY",
    /** 文件对象 */
    FILE_OBJECT = "FILE_OBJECT"
}

export enum EFormStructureVO1_isCustomSubmitContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFormStructureVO_permissionsType {
    /** 可编辑 */
    EDIT = "EDIT",
    /** 只读 */
    READONLY = "READONLY",
    /** 隐藏 */
    HIDDEN = "HIDDEN"
}

export enum EProcessFormVO_addressType {
    /** 省-市-区-详细地址 */
    REGION_AND_DETAIL_ADDRESS = "REGION_AND_DETAIL_ADDRESS",
    /** 省-市-区 */
    REGION = "REGION",
    /** 省-市-区-街道-详细地址 */
    STREET_AND_DETAIL_ADDRESS = "STREET_AND_DETAIL_ADDRESS",
    /** 省-市-区-街道 */
    STREET = "STREET"
}

export enum EProcessFormVO_associationQueryShowStyle {
    /** 单行 */
    SINGLE = "SINGLE",
    /** 表格 */
    TABLE = "TABLE"
}

export enum EProcessFormVO_canNegative {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_dateType {
    /** 年-月-日 */
    DAY = "DAY",
    /** 年-月-日 时:分 */
    MIN = "MIN",
    /** 年-月-日 时:分:秒 */
    SECOND = "SECOND",
    /** 时:分 */
    HOUR_MIN = "HOUR_MIN",
    /** 年-月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum EProcessFormVO_defaultDateType {
    /** 未配置 */
    NONE = "NONE",
    /** 系统时间 */
    SYSTEM = "SYSTEM",
    /** 固定时间 */
    FIX = "FIX"
}

export enum EProcessFormVO_defaultType {
    /** 固定值 */
    FIXED = "FIXED",
    /** 计算公式 */
    FORMULA = "FORMULA",
    /** 数据联动 */
    DATA_LINKAGE = "DATA_LINKAGE"
}

export enum EProcessFormVO_isAutoGetLocation {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isCanModifySelectorOption {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isHyperlinkEnabled {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isInsideTableBatchSelect {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isKit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isScan {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isSystemMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isSystemPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isTableShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isUseEmployeesWithAccounts {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_kitColumnType {
    /** 物料编码 */
    MATERIAL_CODE = "MATERIAL_CODE",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料名称 */
    MATERIAL_NAME = "MATERIAL_NAME",
    /** 库存 */
    WAREHOUSE_MATERIAL_RP_ID = "WAREHOUSE_MATERIAL_RP_ID",
    /** 入库仓位 */
    IN_STOREHOUSE = "IN_STOREHOUSE",
    /** 出库仓位 */
    OUT_STOREHOUSE = "OUT_STOREHOUSE",
    /** 出入库数量 */
    IN_OUT_QUANTITY = "IN_OUT_QUANTITY",
    /** 客户 */
    CUSTOMER = "CUSTOMER",
    /** 业务员 */
    BUSINESS_USER = "BUSINESS_USER",
    /** 收款金额 */
    RECEIVED_AMOUNT = "RECEIVED_AMOUNT",
    /** 应收金额 */
    RECEIVABLE_AMOUNT = "RECEIVABLE_AMOUNT",
    /** 供应商 */
    SUPPLIER = "SUPPLIER",
    /** 付款金额 */
    PAID_AMOUNT = "PAID_AMOUNT",
    /** 应付金额 */
    PAYABLE_AMOUNT = "PAYABLE_AMOUNT",
    /** 计量单位 */
    UNIT = "UNIT",
    /** 入库仓库 */
    IN_STORE = "IN_STORE",
    /** 入库仓库 */
    OUT_STORE = "OUT_STORE",
    /** 可用库存 */
    USABLE_QUANTITY = "USABLE_QUANTITY",
    /** 批次 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO"
}

export enum EProcessFormVO_kitType {
    /** 入库套件 */
    STORAGE_IN = "STORAGE_IN",
    /** 出库套件 */
    STORAGE_OUT = "STORAGE_OUT",
    /** 出库库存套件 */
    STORAGE_OUT_STORAGE = "STORAGE_OUT_STORAGE",
    /** 调拨套件 */
    STORAGE_MOVE = "STORAGE_MOVE",
    /** 调拨库存套件 */
    STORAGE_MOVE_STORAGE = "STORAGE_MOVE_STORAGE",
    /** 收款套件 */
    RECEIVED = "RECEIVED",
    /** 应收套件 */
    RECEIVABLE = "RECEIVABLE",
    /** 应收收款套件 */
    RECEIVABLE_COLLECTION = "RECEIVABLE_COLLECTION",
    /** 付款套件 */
    PAID = "PAID",
    /** 应付套件 */
    PAYABLE = "PAYABLE",
    /** 应付付款套件 */
    PAYABLE_PAYMENT = "PAYABLE_PAYMENT",
    /** 单据日期 */
    BILL_DATE = "BILL_DATE"
}

export enum EProcessFormVO_numberFormat {
    /** % */
    F1 = "F1",
    /** ￥ */
    F2 = "F2",
    /** $ */
    F3 = "F3",
    /** 金额大写 */
    F4 = "F4"
}

export enum EProcessFormVO_numberType {
    /** 整数 */
    INTEGER = "INTEGER",
    /** 小数 */
    DECIMAL = "DECIMAL"
}

export enum EProcessFormVO_organizationType {
    /** 非组织 */
    NONE = "NONE",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 人员 */
    USER = "USER",
    /** 处理人 */
    PROCESSOR = "PROCESSOR"
}

export enum EProcessFormVO_selectorOptionSource {
    /** 默认填充 */
    DEFAULT_FILL = "DEFAULT_FILL",
    /** 系统字典 */
    SYSTEM_DICTIONARY = "SYSTEM_DICTIONARY"
}

export enum EProcessFormVO_selectorOptionSourceBusinessCode {
    /** 物料种类 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 部门组织分类 */
    DEPARTMENT_ORG_CATEGORY = "DEPARTMENT_ORG_CATEGORY",
    /** 部门组织类型 */
    DEPARTMENT_ORG_TYPE = "DEPARTMENT_ORG_TYPE",
    /** 项目类型 */
    PROJECT_TYPE = "PROJECT_TYPE",
    /** 项目大类 */
    PROJECT_CATEGORY = "PROJECT_CATEGORY",
    /** 项目任务优先级 */
    PROJECT_TASK_PRIORITY = "PROJECT_TASK_PRIORITY",
    /** 项目行动项类型 */
    PROJECT_ACTION_ITEM_TYPE = "PROJECT_ACTION_ITEM_TYPE",
    /** 项目反馈周期 */
    PROJECT_FEEDBACK_CYCLE = "PROJECT_FEEDBACK_CYCLE",
    /** 项目会议类型 */
    PROJECT_MEETING_TYPE = "PROJECT_MEETING_TYPE",
    /** 项目密级类型 */
    PROJECT_SECRET_TYPE = "PROJECT_SECRET_TYPE",
    /** 监视频率 */
    QMS_ANNUAL_QUALITY_MONITOR_RATE = "QMS_ANNUAL_QUALITY_MONITOR_RATE",
    /** 定性目标值 */
    QMS_QUALITATIVE_TARGET_VALUE = "QMS_QUALITATIVE_TARGET_VALUE",
    /** 质量工作计划完成情况 */
    QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS = "QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS",
    /** 内部审核检查记录结果 */
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT",
    /** 内部审核不符合项程度 */
    QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE = "QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE",
    /** 验证结果 */
    QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT = "QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT",
    /** 验证结果 */
    QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT = "QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT",
    /** 验证结果 */
    QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT = "QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT",
    /** 内部审核实施计划成员分工类型 */
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE",
    /** 外部审核不符合项报告不符合程度 */
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE",
    /** 专项审核检查记录检查结果 */
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT",
    /** 专项审核不符合项报告不符合程度 */
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE",
    /** 国标文件 */
    QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS = "QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS",
    /** 质量人员授权检验职务 */
    QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES = "QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES",
    /** 质量人员工作形式 */
    QMS_QUALITY_PERSONNEL_WORKING_FORM = "QMS_QUALITY_PERSONNEL_WORKING_FORM",
    /** 质量人员分组 */
    QMS_QUALITY_PERSONNEL_GROUP = "QMS_QUALITY_PERSONNEL_GROUP",
    /** 质量人员证书名称 */
    QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME = "QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME",
    /** 质量人员状态 */
    QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS = "QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS",
    /** 领用所需资质 */
    QMS_SEAL_STYLE_QUALIFICATION = "QMS_SEAL_STYLE_QUALIFICATION",
    /** 印章状态 */
    QMS_SEAL_STATUS = "QMS_SEAL_STATUS",
    /** 所属分类 */
    QMS_ANNUAL_QUALITY_TARGET_CATEGORY = "QMS_ANNUAL_QUALITY_TARGET_CATEGORY",
    /** AQL */
    QMS_SAMPLING_STANDARDS_AQL = "QMS_SAMPLING_STANDARDS_AQL",
    /** 样本量字码 */
    QMS_SAMPLING_STANDARDS_CHARACTER_CODE = "QMS_SAMPLING_STANDARDS_CHARACTER_CODE",
    /** 抽样水平 */
    QMS_SAMPLING_STANDARDS_LEVEL = "QMS_SAMPLING_STANDARDS_LEVEL",
    /** 来料类型 */
    QMS_INSPECTION_INCOMING_TYPE = "QMS_INSPECTION_INCOMING_TYPE",
    /** 评审结果 */
    QMS_PROJECT_TASK_REVIEW_RESULT = "QMS_PROJECT_TASK_REVIEW_RESULT",
    /** 决策结果 */
    QMS_PROJECT_TASK_DECISION_RESULT = "QMS_PROJECT_TASK_DECISION_RESULT",
    /** 检验任务业务类型 */
    QMS_INSPECTION_BUSINESS_TYPE = "QMS_INSPECTION_BUSINESS_TYPE",
    /** 维修能力 */
    DEVICE_EMPLOYEE_MAINTAIN_LEVEL = "DEVICE_EMPLOYEE_MAINTAIN_LEVEL",
    /** 项目设备信息状态 */
    PROJECT_DEVICE_INFO_STATUS = "PROJECT_DEVICE_INFO_STATUS"
}

export enum EProcessFormVO_selectorType {
    /** 平铺 */
    FLAT = "FLAT",
    /** 下拉 */
    PULL_DOWN = "PULL_DOWN"
}

export enum EProcessFormVO_style {
    /** 高级 */
    ADVANCED = "ADVANCED",
    /** 级联 */
    CASCADE = "CASCADE"
}

export enum EProcessFormVO_tableType {
    /** 默认类型 */
    DEFAULT = "DEFAULT"
}

export enum EProcessFormVO_type {
    /** 单行文字 */
    INPUT_TEXT = "INPUT_TEXT",
    /** 多行文字 */
    TEXTAREA = "TEXTAREA",
    /** 数字 */
    NUMBER = "NUMBER",
    /** 日期 */
    DATE = "DATE",
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX",
    /** 图片上传 */
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    /** 附件上传 */
    FILE_UPLOAD = "FILE_UPLOAD",
    /** 表格 */
    TABLE = "TABLE",
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 关联表单多选 */
    FORM_RP_MULTI = "FORM_RP_MULTI",
    /** 流水号 */
    CODE = "CODE",
    /** 地址 */
    ADDRESS = "ADDRESS",
    /** 定位 */
    POSITION = "POSITION",
    /** 电子邮箱 */
    EMAIL = "EMAIL",
    /** 手机号码 */
    MOBILE = "MOBILE",
    /** 身份证号码 */
    ID_CARD = "ID_CARD",
    /** 富文本 */
    RICH_TEXT = "RICH_TEXT",
    /** 关联查询 */
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    /** 说明文字 */
    DESC_TEXT = "DESC_TEXT",
    /** 分隔符 */
    SPLIT_LINE = "SPLIT_LINE",
    /** 批次号 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO",
    /** 自定义公式 */
    FORMULA = "FORMULA"
}

export enum EProcessFormVO_typeGroup {
    /** 表单 */
    FORM = "FORM",
    /** 样式 */
    STYLE = "STYLE"
}

export enum EProcessFormVO_unableRepeat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_unableRepeatInTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_dateFormat {
    /** 年 */
    YEAR = "YEAR",
    /** 年月 */
    YEAR_MONTH = "YEAR_MONTH",
    /** 年月日 */
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 月日 */
    MONTH_DAY = "MONTH_DAY",
    /** 日 */
    DAY = "DAY"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_isCodeAccording {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_type {
    /** 固定值 */
    FIXED = "FIXED",
    /** 日期 */
    DATE = "DATE",
    /** 自动计数 */
    AUTO_NUMBER = "AUTO_NUMBER",
    /** 引用字段 */
    FLOW_PATH_FIELD = "FLOW_PATH_FIELD",
    /** ID的36进制 */
    ID36 = "ID36"
}

export enum EProcessFormsAssociateFormFilterGroupVO_isSystemDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormsAssociateFormFilterVO_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EProcessFormsAssociateFormFilterVO_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EProcessFormsAssociateFormFilterVO_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EProcessFormsAssociateFormFilterVO_isDisableEdit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormsAssociateFormFilterVO_isUseDateShowFormat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillVO_fillWay {
    /** 直接填充 */
    NONE = "NONE",
    /** 最新 */
    LAST = "LAST",
    /** 合并 */
    CONCAT = "CONCAT",
    /** 合计 */
    SUM = "SUM"
}

export enum EProcessFormAssociatedFormFillVO_isAllowModificationOfFillContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillVO_isDisableEdited {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessFormFormulaFieldReturnsVO_funType {
    /** 无函数 */
    DEFAULT = "DEFAULT",
    /** 求和 */
    SUM = "SUM",
    /** 最大值 */
    MAX = "MAX",
    /** 最小值 */
    MIN = "MIN",
    /** 平均值 */
    AVG = "AVG",
    /** 合并 */
    CONCAT = "CONCAT"
}

export enum ETheProcessFormFormulaFieldReturnsVO_type {
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 流程表单字段 */
    FORM_FIELD = "FORM_FIELD"
}

export enum EProcessFormFieldAssociationDictionaryOptionSetVO_isCanDelete {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldAssociationDictionaryOptionSetVO_isCanModify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldAssociationDictionaryOptionSetVO_isPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleCondition {
    /** 等于 */
    EQ = "EQ",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE"
}

export enum EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleType {
    /** 无限制 */
    NO_LIMIT = "NO_LIMIT",
    /** 固定值 */
    FIXED_VALUE = "FIXED_VALUE",
    /** 计算公式 */
    FORMULA = "FORMULA"
}
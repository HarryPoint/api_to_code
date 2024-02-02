// JSONResult«工艺卡信息返回VO»
export interface IJSONResult工艺卡信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺卡信息返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺卡信息返回VO
export interface I工艺卡信息返回VO {
    // id
    id: number;
    // 工艺卡名称
    name: string;
    // 工艺卡编号
    code: string;
    // 物料ids
    materialIds: number[];
    // 工序ids
    processIds: number[];
    // 文件集合
    fileList: I工艺卡明细返回VO[];
    // 描述集合
    textList: I工艺卡明细返回VO[];
    // 录入集合
    inputList: I工艺卡明细返回VO[];
}
// 工艺卡明细返回VO
export interface I工艺卡明细返回VO {
    // 明细id
    id: number;
    // 明细类型
    type: string;
    // 明细名称/标题
    name: string;
    // 明细编号
    code: string;
    // 描述内容/备注
    remark: string;
    // 文件名称
    fileName: string;
    // 文件key
    fileKey: string;
    // 文件完整url
    fileUrl: string;
    // 录入类型
    inputType: string;
    // 文本类型
    textType: string;
    // 文本比较值集
    textCompareValueList: string[];
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 图片最大上传量
    imageTotalCount: number;
    // 选项集
    selectorList: string[];
}

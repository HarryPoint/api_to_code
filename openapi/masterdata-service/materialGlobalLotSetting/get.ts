// JSONResult«物料全局批次设置编辑响应对象»
export interface IJSONResult物料全局批次设置编辑响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I物料全局批次设置编辑响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料全局批次设置编辑响应对象
export interface I物料全局批次设置编辑响应对象 {
    // 启用序列号
    enableSerialNo: string;
    // 启用批次
    enableLot: string;
    // 物料批次出库规则
    lotOutRule: string;
    // 启用质量追溯
    enableQualityTraceability: string;
    // 启用外部码
    enableExternalCode: string;
}

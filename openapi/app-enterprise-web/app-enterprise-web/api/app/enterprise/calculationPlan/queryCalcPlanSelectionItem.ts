// JSONResult«List«CalcPlanSelectionItemQueryResponseDTO»»
export interface IJSONResultListCalcPlanSelectionItemQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICalcPlanSelectionItemQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CalcPlanSelectionItemQueryResponseDTO
export interface ICalcPlanSelectionItemQueryResponseDTO {
    // ID
    id: number;
    // 方案名称
    name: string;
}

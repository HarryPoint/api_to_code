// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«List«工艺卡下拉选择列表搜索响应DTO»»
export interface IJSONResultListProcessDropDownListToSearchForResponseDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessDropDownSelectListSearchResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺卡下拉选择列表搜索响应DTO
export interface IProcessDropDownSelectListSearchResponseDTO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
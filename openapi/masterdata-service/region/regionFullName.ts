import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/行政区控制器/findRegionFullNameUsingPOST
export function fetchMethod(data: string[]) {
    return post({
      url: "/masterdata-service/region/regionFullName",
      data,
    });
}
// JSONResult«Map«string,string»»
export interface IJSONResultMapstringstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, string>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

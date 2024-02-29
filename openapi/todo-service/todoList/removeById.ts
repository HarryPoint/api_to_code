import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/removeByIdUsingPOST
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/todo-service/todoList/removeById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
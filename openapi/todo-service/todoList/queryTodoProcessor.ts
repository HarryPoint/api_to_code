import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/queryTodoProcessorUsingPOST
*/
export default function fetchMethod(options: { data: ITodoProcessorQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultTodoProcessorQueryResponseDTO>(
        {
            url: "/todo-service/todoList/queryTodoProcessor",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** TodoProcessorQueryRequestDTO */
export interface ITodoProcessorQueryRequestDTO {
    /** 代办ID列表 */
    todoIdList?: string[];
}
/** JSONResult«TodoProcessorQueryResponseDTO» */
export interface IJSONResultTodoProcessorQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITodoProcessorQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** TodoProcessorQueryResponseDTO */
export interface ITodoProcessorQueryResponseDTO {
    /** 代办处理人列表 */
    todoProcessorList?: ITodoProcessorDTO[];
}
/** TodoProcessorDTO */
export interface ITodoProcessorDTO {
    /** ID */
    id?: string;
    /** 代办处理人ID */
    userId?: string;
}
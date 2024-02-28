import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/邮件内容模板/addUsingPOST_1
*/
export default function fetchMethod(options: { data: IEmailContentTemplateAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailContentTemplate/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EmailContentTemplateAddRequestDTO */
export interface IEmailContentTemplateAddRequestDTO {
    /** 邮件内容 */
    content?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}

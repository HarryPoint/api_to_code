import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/产出报表(产出数据相关)相关/exportExcelUsingGET_12
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceDataReport/exportExcel",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
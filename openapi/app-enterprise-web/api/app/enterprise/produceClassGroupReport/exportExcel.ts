import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/产出报表(按班组统计)相关/exportExcelUsingGET_11
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceClassGroupReport/exportExcel",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
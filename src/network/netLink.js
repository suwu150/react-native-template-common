/**
 *@author jkwu
 *@date 2018/4/26
 *@desc 这里可以根据自己的需求进行url的修改，下面是一些演示案例
 *@param mod
 *@return
 */
import { serializeParam } from '../utils/formatUtil';
import NetConfig from './netConfig';

export const baiduOcrAi = 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic';

export const NetLink = {
  login: '/public/logon',
  queryInfo: `${NetConfig.BasePath}/OWController/queryInfo`,
};

// http://192.168.64.227:8080/amix/workflow/process/workflowTask


// leasing/webapi/resf/OWController/queryInfo?dono=EntCustomerDetail
export const queryInfo = (param) => {
  const paramX = param ? serializeParam(param) : '1=1';
  console.log(`${NetLink.queryInfo}?${paramX}`);
  return `${NetLink.queryInfo}?${paramX}`;
};

export const serializeParam = (params, field) => {
  let str = '';
  if (typeof params === 'string') {
    str = params;
  } else if (Array.isArray(params) && field) {
    params.forEach((p) => {
      if (typeof p === 'string' || typeof p === 'number') {
        str = `${str};${field}=${p}`;
      }
    });
  } else {
    Object.keys(params).forEach((p) => {
      if (Array.isArray(params[p])) {
        str = `${str};${serializeParam(params[p], p)}`;
      } else {
        str = `${str};${p}=${params[p]}`;
      }
    });
  }
  return str.replace(/^;/g, '');
};

export const filterProps = (obj, propNames) => {
  const objTmp = { ...obj };
  if (Array.isArray(propNames)) {
    propNames.forEach((item) => {
      delete objTmp[item];
    });
  } else {
    delete objTmp[propNames];
  }
  return objTmp;
};

const formatUtil = {
  serializeParam,
  filterProps,
};

export default formatUtil;

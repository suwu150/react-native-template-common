import ActionTypes from '../constants/actionType';

const _showLoading = () => {
  return {
    type: ActionTypes.SHOW_LOADING
  };
};

const _dismissLoading = () => {
  return {
    type: ActionTypes.DISMISS_LOADING
  };
};

const CommonAction = {
  showLoading: () => _showLoading(),
  dismissLoading: () => _dismissLoading(),
};

export default CommonAction;

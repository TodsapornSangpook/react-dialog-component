import { createElement, useState, useCallback } from 'react';
import { Modal } from 'antd';

var Dialog = function Dialog(_ref) {
  var title = _ref.title,
      content = _ref.content,
      visible = _ref.visible,
      onClickOk = _ref.onClickOk,
      onClickCancel = _ref.onClickCancel;
  return createElement(Modal, {
    title: title,
    visible: visible,
    onOk: onClickOk,
    onCancel: onClickCancel
  }, createElement("p", null, content));
};

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

var useDialog = function useDialog() {
  var initState = {
    title: '',
    content: '',
    visible: false,
    callbackCancelDialog: undefined,
    callbackOkDialog: undefined
  };

  var _useState = useState(initState),
      state = _useState[0],
      setState = _useState[1];

  var onShowDialog = useCallback(function (_ref) {
    var _ref$title = _ref.title,
        title = _ref$title === void 0 ? '' : _ref$title,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? '' : _ref$content,
        _ref$callbackCancelDi = _ref.callbackCancelDialog,
        callbackCancelDialog = _ref$callbackCancelDi === void 0 ? onHideDialog : _ref$callbackCancelDi,
        _ref$callbackOkDialog = _ref.callbackOkDialog,
        callbackOkDialog = _ref$callbackOkDialog === void 0 ? onHideDialog : _ref$callbackOkDialog;
    setState({
      title: title,
      content: content,
      visible: true,
      callbackCancelDialog: callbackCancelDialog,
      callbackOkDialog: callbackOkDialog
    });
  }, []);
  var onHideDialog = useCallback(function () {
    setState(initState);
  }, []);
  var onClickOk = useCallback(function () {
    if (state.callbackOkDialog) {
      state.callbackOkDialog();
    }

    onHideDialog();
  }, [state]);
  var onClickCancel = useCallback(function () {
    if (state.callbackCancelDialog) {
      state.callbackCancelDialog();
    }

    onHideDialog();
  }, [state]);
  return {
    dialogProps: {
      title: state.title,
      content: state.content,
      visible: state.visible,
      onClickOk: onClickOk,
      onClickCancel: onClickCancel
    },
    onShowDialog: onShowDialog,
    onHideDialog: onHideDialog
  };
};

export { Dialog, ExampleComponent, useDialog };
//# sourceMappingURL=index.modern.js.map

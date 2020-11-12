interface onShowDialogParamInterface {
    title?: string;
    content?: string;
    callbackCancelDialog?: () => void;
    callbackOkDialog?: () => void;
}
export declare const useDialog: () => {
    dialogProps: {
        title: string;
        content: string;
        visible: boolean;
        onClickOk: () => void;
        onClickCancel: () => void;
    };
    onShowDialog: ({ title, content, callbackCancelDialog, callbackOkDialog }: onShowDialogParamInterface) => void;
    onHideDialog: () => void;
};
export {};

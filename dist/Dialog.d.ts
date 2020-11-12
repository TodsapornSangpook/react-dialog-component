/// <reference types="react" />
interface DialogProps {
    title: string;
    content: string;
    visible: boolean;
    onClickOk: () => void;
    onClickCancel: () => void;
}
export declare const Dialog: ({ title, content, visible, onClickOk, onClickCancel }: DialogProps) => JSX.Element;
export {};

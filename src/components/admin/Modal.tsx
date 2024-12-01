import {ReactElement} from "react";

type ModalProps = {
    show: boolean,
    onClose: any,
    children: ReactElement
}
export const Modal = ({ show, onClose, children }: ModalProps) => {
    return show ? (
        <div
            className="absolute z-50 flex rounded-lg items-center self-center justify-center w-[80%] bg-black/40 overflow-y-scroll"
            onClick={onClose}
        >
            <div
                className="w-[100%] p-5 bg-white"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button className="text-xl" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    ) : null;
};

import {ReactElement} from "react";

type ModalProps = {
    show: boolean,
    onClose: any,
    children: ReactElement
}
export const Modal = ({ show, onClose, children }: ModalProps) => {
    return show ? (
        <div
            className="fixed z-50 flex items-center self-center justify-center h-[95%] w-full bg-black/40 overflow-y-scroll pt-24"
            onClick={onClose}
        >
            <div
                className="w-[50%] mr-[15%] p-5 bg-white rounded-lg  "
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

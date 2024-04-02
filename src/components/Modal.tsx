import { Smile } from "lucide-react";
import { Frown } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import ReactDOM from "react-dom";

type ModalProps = {
    open: boolean;
    loading: boolean;
    submitSuccess: boolean;
    submitFailed: boolean;
    onClose: () => void;
};

function Modal({
    open,
    onClose,
    loading,
    submitSuccess,
    submitFailed,
}: ModalProps) {
    if (!open) return null;

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 z-50 p-4">
            {loading && <LoaderCircle className="animate-spin stroke-white" />}
            {submitSuccess && (
                <div className="bg-white p-6 rounded shadow-lg w-full sm:max-w-prose">
                    <Smile className="mx-auto stroke-gdcgreen" />
                    <p className="text-center text-lg font-bold mt-1">
                        Submit Successful!
                    </p>
                    <p className="text-center text-base">
                        A representative will contact you within the next 24hrs.
                    </p>
                    <button
                        className="bg-gdcgreen text-white py-3 rounded-full w-full mt-4"
                        onClick={onClose}>
                        Close
                    </button>
                </div>
            )}
            {submitFailed && (
                <div className="bg-white p-6 rounded shadow-lg w-full sm:max-w-prose">
                    <Frown className="mx-auto stroke-pink-700" />
                    <p className="text-center text-lg font-bold mt-1">
                        Submit Failed!
                    </p>
                    <p className="text-center text-base">
                        Sorry, please try again or contact us.
                    </p>
                    <button
                        className="bg-pink-700 text-white py-3 rounded-full w-full mt-4"
                        onClick={onClose}>
                        Close
                    </button>
                </div>
            )}
        </div>,

        modalRoot
    );
}

export default Modal;

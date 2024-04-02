import { Link } from "react-router-dom";

function ActionBtn() {
    return (
        <Link to="/order-page">
            <div className="bg-gdcgreen text-sm text-white p-4 text-center mx-auto max-w-md rounded-full hover:shadow-xl hover:bg-gdcgreen2 hover:shadow-gdcgreen2/10 font-display">
                <div className="flex gap-2 justify-center">
                    <p className="font-bold">
                        Transform Your Body In No Time!{" "}
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="animate-bounce">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8 " />
                        <path d="m8 12 4 4 4-4" />
                    </svg>
                </div>
                <p className="max-w-sm mx-auto">
                    Order Your 28 Days Slimming Capsule Today & Get Free
                    Delivery (Nigeria)
                </p>
            </div>
        </Link>
    );
}

export default ActionBtn;

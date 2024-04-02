import fitCapImg from "../assets/images/fitcap_flyer.webp";

type PackagesProps = {
    handleSelectPackage: (clickedPackage: string) => void;
};

function Packages({ handleSelectPackage }: PackagesProps) {
    const handlePackageClick = (clickedPackage: string) => {
        handleSelectPackage(clickedPackage);
    };

    return (
        <div className="mx-auto mt-6 w-full sm:flex items-center justify-center gap-4 text-black">
            <div className="mx-auto shadow-[0rem_0.1rem_0.3rem_0.3rem_rgba(0,0,0,0.1)] p-4 rounded-2xl mt-8 hover:shadow-[0rem_0.1rem_0.4rem_0.4rem_rgba(0,0,0,0.1)]">
                <h2 className="text-center text-gdcgreen text-2xl font-bold">
                    SINGLE PACKAGE
                </h2>
                <p className="text-center text-lg">
                    BUY 1 (GET A N10,000 DISCOUNT)
                </p>
                <img
                    src={fitCapImg}
                    alt="fitcap flyer"
                    className="mx-auto my-2"
                />
                <h2 className="text-center text-lg font-bold mt-4 leading-5">
                    YOUR ORDER INCLUDES...
                </h2>
                <div className="flex justify-center mt-2">
                    <ul className="list-none">
                        <li className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#017758"
                                stroke="none"
                                className="w-5 h-5 mr-2 inline">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="w-full align-middle leading-6">
                                1 Bottle of 28 Days Slimming Capsule
                            </span>
                        </li>
                        <li className="flex items-center justify-center mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#017758"
                                stroke="none"
                                className="w-5 h-5 mr-2 inline">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="w-full align-middle leading-6">
                                Free Nationwide Delivery!
                            </span>
                        </li>
                    </ul>
                </div>
                <h2 className="text-center text-5xl font-black mt-4">
                    N14,000
                </h2>
                <p className="text-center text-3xl font-bold line-through">
                    N35,000
                </p>
                <div
                    onClick={() => handlePackageClick("single-package")}
                    className="mx-auto bg-gdcgreen rounded-full text-white px-8 py-4 text-center mt-4 hover:shadow-xl hover:bg-gdcgreen2 hover:shadow-gdcgreen2/10 cursor-pointer">
                    <div className="flex gap-2 justify-center">
                        <p className="text-sm font-bold">I Want This Package</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-arrow-down inline-flex animate-bounce">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8 " />
                            <path d="m8 12 4 4 4-4" />
                        </svg>
                    </div>
                    <p className="text-sm pt-1 leading-4">
                        Get Free Delivery (Anywhere In Nigeria)
                    </p>
                </div>
            </div>

            <div className="mx-auto shadow-[0rem_0.1rem_0.3rem_0.3rem_rgba(0,0,0,0.1)] p-4 rounded-2xl mt-8 hover:shadow-[0rem_0.1rem_0.4rem_0.4rem_rgba(0,0,0,0.1)]">
                <h2 className="text-center text-gdcgreen text-2xl font-bold">
                    DOUBLE PACKAGE
                </h2>
                <p className="text-center text-lg">
                    BUY 2 (GET A N20,000 DISCOUNT)
                </p>
                <img
                    src={fitCapImg}
                    alt="fitcap flyer"
                    className="mx-auto my-2"
                />
                <h2 className="text-center text-lg font-bold mt-4 leading-5">
                    YOUR ORDER INCLUDES...
                </h2>
                <div className="flex justify-center mt-2">
                    <ul className="list-none">
                        <li className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#017758"
                                stroke="none"
                                className="w-5 h-5 mr-2 inline">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="w-full align-middle leading-6">
                                2 Bottles of 28 Days Slimming Capsule
                            </span>
                        </li>
                        <li className="flex items-center justify-center mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#017758"
                                stroke="none"
                                className="w-5 h-5 mr-2 inline">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="w-full align-middle leading-6">
                                Free Nationwide Delivery!
                            </span>
                        </li>
                    </ul>
                </div>
                <h2 className="text-center text-5xl font-black mt-4">
                    N26,000
                </h2>
                <p className="text-center text-3xl font-bold line-through">
                    N50,000
                </p>
                <div
                    onClick={() => handlePackageClick("double-package")}
                    className="mx-auto bg-gdcgreen rounded-full text-white px-8 py-4 text-center mt-4 hover:shadow-xl hover:bg-gdcgreen2 hover:shadow-gdcgreen2/10 cursor-pointer">
                    <div className="flex gap-2 justify-center">
                        <p className="text-sm font-bold">I Want This Package</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-arrow-down inline-flex animate-bounce">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8 " />
                            <path d="m8 12 4 4 4-4" />
                        </svg>
                    </div>
                    <p className="text-sm pt-1 leading-4">
                        Get Free Delivery (Anywhere In Nigeria)
                    </p>
                </div>
            </div>

            <div className="mx-auto shadow-[0rem_0.1rem_0.3rem_0.3rem_rgba(0,0,0,0.1)] p-4 rounded-2xl mt-8 hover:shadow-[0rem_0.1rem_0.4rem_0.4rem_rgba(0,0,0,0.1)]">
                <h2 className="text-center text-gdcgreen text-2xl font-bold">
                    THRIPLE PACKAGE
                </h2>
                <p className="text-center text-lg">
                    BUY 3 (GET A N30,000 DISCOUNT)
                </p>
                <img
                    src={fitCapImg}
                    alt="fitcap flyer"
                    className="mx-auto my-2"
                />
                <h2 className="text-center text-lg font-bold mt-4 leading-5">
                    YOUR ORDER INCLUDES...
                </h2>
                <div className="flex justify-center mt-2">
                    <ul className="list-none">
                        <li className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#017758"
                                stroke="none"
                                className="w-5 h-5 mr-2 inline">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="w-full align-middle leading-6">
                                3 Bottle of 28 Days Slimming Capsule
                            </span>
                        </li>
                        <li className="flex items-center justify-center mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#017758"
                                stroke="none"
                                className="w-5 h-5 mr-2 inline">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="w-full align-middle leading-6">
                                Free Nationwide Delivery!
                            </span>
                        </li>
                    </ul>
                </div>
                <h2 className="text-center text-5xl font-black mt-4">
                    N38,000
                </h2>
                <p className="text-center text-3xl font-bold line-through">
                    N75,000
                </p>
                <div
                    onClick={() => handlePackageClick("thriple-package")}
                    className="mx-auto bg-gdcgreen rounded-full text-white px-8 py-4 text-center mt-4 hover:shadow-xl hover:bg-gdcgreen2 hover:shadow-gdcgreen2/10 cursor-pointer">
                    <div className="flex gap-2 justify-center">
                        <p className="text-sm font-bold">I Want This Package</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-arrow-down inline-flex animate-bounce">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8 " />
                            <path d="m8 12 4 4 4-4" />
                        </svg>
                    </div>
                    <p className="text-sm pt-1 leading-4">
                        Get Free Delivery (Anywhere In Nigeria)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Packages;

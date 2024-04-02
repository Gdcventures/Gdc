import Packages from "../components/Packages";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import grandStoresCac from "../assets/images/grand-stores-cac.jpg";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ScrollToTop from "../components/ScrollToTop";

// Form data type declaration
type FormDataType = {
    firstName: string;
    lastName: string;
    email: string;
    streetAddress: string;
    state: string;
    phoneNumber?: string;
    selectedPackage: string;
};

function OrderPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedPackage, setSelectedPackage] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitSucess, setIsSubmitSuccess] = useState(false);
    const [isSubmitFailed, setIsSubmitFailed] = useState(false);

    const [hours, setHours] = useState(7 * 24);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormDataType>();

    // Scroll to from when a package is selected
    const scrollToForm = (clickedPackage: string) => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });

            setSelectedPackage(clickedPackage);
        }
    };

    // Format time and count down implementation
    const formatTime = (value: number): string => {
        return value < 10 ? `0${value}` : `${value}`;
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        clearInterval(interval);
                    }
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [hours, minutes, seconds]);

    // Regular expression for basic email validation and white space only input check
    const isNotEmptyString = (value: string) => {
        return /\S/.test(value);
    };
    const isValidEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    // On form submit function
    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        setIsOpen(true);
        setIsLoading(true);

        emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
        emailjs
            .send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: data.email,
                    street_address: data.streetAddress,
                    state: data.state,
                    phone_number: data.phoneNumber,
                    package: data.selectedPackage,
                }
            )
            .then((response) => {
                setIsLoading(false);
                setIsSubmitSuccess(true);
                reset();
                console.log(response);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsSubmitFailed(true);
                console.log(error);
            });
    };

    return (
        <>
            <ScrollToTop />
            <Header />

            <div className="max-w-screen-lg mx-auto px-4 py-6 pt-4 text-black">
                <main className="w-full">
                    <h1 className="text-center text-4xl font-bold font-display">
                        HURRY UP & PLACE YOUR ORDER NOW & GET DELIVERY!
                    </h1>
                    <p className="text-center text-lg">
                        CHOOSE YOUR PACKAGE AND PLACE YOUR ORDER BELOW...
                    </p>
                    <Packages handleSelectPackage={scrollToForm} />
                    <p className="text-center font-bold text-lg mt-12">
                        PLEASE DON'T FORGET THIS OFFER LASTS FOR A LIMITED TIME
                        ONLY!
                    </p>

                    <div className="flex items-center justify-center max-w-md mx-auto gap-2 mt-4">
                        <div className="bg-black text-white p-2 rounded-full flex-1">
                            <p className="font-medium text-xl text-center">
                                {formatTime(hours)}
                            </p>
                            <p className="text-sm text-center">hours</p>
                        </div>
                        <div className="bg-black text-white p-2 rounded-full flex-1">
                            <p className="font-medium text-xl text-center">
                                {formatTime(minutes)}
                            </p>
                            <p className="text-sm text-center">minutes</p>
                        </div>
                        <div className="bg-black text-white p-2 rounded-full flex-1">
                            <p className="font-medium text-xl text-center">
                                {formatTime(seconds)}
                            </p>
                            <p className="text-sm text-center">seconds</p>
                        </div>
                    </div>

                    <h2 className="text-center text-3xl mt-8 py-2 px-6 rounded-full font-black max-w-md mx-auto leading-8 font-display">
                        PLACE YOUR ORDER BELOW
                    </h2>

                    <div className="mt-8 max-w-md mx-auto">
                        <form
                            className="w-full"
                            ref={formRef}
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate>
                            <p className="text-center font-bold">
                                BEFORE YOU FILL THIS FORM MAKE SURE YOU WILL
                                COLLECT THE PRODUCT. PLEASE DON'T WASTE OUR TIME
                                AND MONEY SENDING IT TO YOU IF YOU DON'T NEED
                                IT!
                            </p>

                            <label className="block mt-6">
                                <span className="text-sm font-medium">
                                    First name:
                                </span>
                                <input
                                    type="text"
                                    autoComplete="first-name"
                                    {...register("firstName", {
                                        required: "First name is required",
                                        validate: {
                                            notOnlySpaces: (value) =>
                                                isNotEmptyString(value) ||
                                                "Last name cannot be empty",
                                        },
                                        minLength: {
                                            value: 1,
                                            message:
                                                "Last name must be at least 1 character",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Last name must not exceed 20 characters",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.firstName ? "true" : "false"
                                    }
                                    className="w-full border-[#1a1a1a] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen"
                                />
                                {errors.firstName && (
                                    <p
                                        role="alert"
                                        className="text-pink-700 text-sm h-1">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </label>

                            <label className="block mt-4">
                                <span className="text-sm font-medium">
                                    Last name:
                                </span>
                                <input
                                    type="text"
                                    autoComplete="family-name"
                                    {...register("lastName", {
                                        required: "Last name is required",
                                        validate: {
                                            notOnlySpaces: (value) =>
                                                isNotEmptyString(value) ||
                                                "Last name cannot be empty",
                                        },
                                        minLength: {
                                            value: 1,
                                            message:
                                                "Last name must be at least 1 character",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Last name must not exceed 20 characters",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.lastName ? "true" : "false"
                                    }
                                    className="w-full border-[#1a1a1a] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen"
                                />
                                {errors.lastName && (
                                    <p
                                        role="alert"
                                        className="text-pink-700 text-sm h-1">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </label>

                            <label className="block mt-4">
                                <span className="text-sm font-medium">
                                    Email:
                                </span>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        validate: {
                                            validEmail: (value) =>
                                                isValidEmail(value) ||
                                                "Invalid email format",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.email ? "true" : "false"
                                    }
                                    className="w-full border-[#1a1a1a] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen"
                                />
                                {errors.email && (
                                    <p
                                        role="alert"
                                        className="text-pink-700 text-sm h-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </label>

                            <label className="block mt-4">
                                <span className="text-sm font-medium">
                                    Street Address:
                                </span>
                                <input
                                    type="text"
                                    autoComplete="street-address"
                                    {...register("streetAddress", {
                                        required: "Street Address is required",
                                        validate: {
                                            notOnlySpaces: (value) =>
                                                isNotEmptyString(value) ||
                                                "Street Address cannot be empty",
                                        },
                                        minLength: {
                                            value: 1,
                                            message:
                                                "Street Address must be at least 1 character",
                                        },
                                        maxLength: {
                                            value: 60,
                                            message:
                                                "Street Address must not exceed 60 characters",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.streetAddress ? "true" : "false"
                                    }
                                    className="w-full border-[#1a1a1a] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen"
                                />
                                {errors.streetAddress && (
                                    <p
                                        role="alert"
                                        className="text-pink-700 text-sm h-1">
                                        {errors.streetAddress.message}
                                    </p>
                                )}
                            </label>

                            <label className="block mt-4">
                                <span className="text-sm font-medium">
                                    State:
                                </span>
                                <input
                                    type="text"
                                    autoComplete="address-level1"
                                    {...register("state", {
                                        required: "State is required",
                                        validate: {
                                            notOnlySpaces: (value) =>
                                                isNotEmptyString(value) ||
                                                "State cannot be empty",
                                        },
                                        minLength: {
                                            value: 1,
                                            message:
                                                "State must be at least 1 character",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "State must not exceed 60 characters",
                                        },
                                    })}
                                    aria-invalid={
                                        errors.state ? "true" : "false"
                                    }
                                    className="w-full border-[#1a1a1a] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen"
                                />
                                {errors.state && (
                                    <p
                                        role="alert"
                                        className="text-pink-700 text-sm h-1">
                                        {errors.state.message}
                                    </p>
                                )}
                            </label>

                            <label className="block mt-4">
                                <span className="text-sm font-medium">
                                    Phone (optional):
                                </span>
                                <input
                                    type="tel"
                                    {...register("phoneNumber")}
                                    autoComplete="phone"
                                    className="w-full border-[#1a1a1a] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen"
                                />
                            </label>

                            <label className="block mt-4">
                                <span className="text-sm font-medium">
                                    Product:
                                </span>
                                <select
                                    value={selectedPackage}
                                    {...register("selectedPackage", {
                                        required: true,
                                        onChange: (e) =>
                                            setSelectedPackage(e.target.value),
                                    })}
                                    className="w-full border-[#473b3b] shadow-sm rounded-lg focus:border-gdcgreen focus:ring-gdcgreen">
                                    <option disabled value="">
                                        Please select a package
                                    </option>
                                    <option value="single-package">
                                        N18,000 For 1 Bottle of The 28 Days
                                        Sleeping Capsule
                                    </option>
                                    <option value="double-package">
                                        N26,000 For 2 Bottles of The 28 Days
                                        Sleeping Capsule
                                    </option>
                                    <option value="thriple-package">
                                        N38,000 For 3 Bottles of The 28 Days
                                        Sleeping Capsule
                                    </option>
                                </select>
                                {errors.selectedPackage && (
                                    <p
                                        role="alert"
                                        className="text-pink-700 text-sm h-1">
                                        *
                                    </p>
                                )}
                            </label>
                            <input
                                type="submit"
                                value="SUBMIT ORDER"
                                className="w-full py-4 mt-8 bg-gdcgreen text-white rounded-lg text-2xl font-black transition-all ease-in-out hover:shadow-xl hover:bg-gdcgreen2 hover:shadow-gdcgreen2/10"
                            />
                        </form>
                    </div>

                    <p className="text-center text-4xl mx-auto max-w-prose font-bold mt-14">
                        YOU CAN TRUST US...
                    </p>
                    <p className="mt-2 text-center text-lg mx-auto max-w-prose">
                        The 28 Days Slimming Capsule Has Been Reviewed and Trust
                        By 25000+ Ladies and Gentlemen, We’re A Company With
                        Business Registration Number In Nigeria And An Office In
                        Lagos.
                    </p>
                    <p className="mt-2 text-center text-lg mx-auto max-w-prose font-bold">
                        Check Our CAC Registration Certificate Below.
                    </p>
                    <img
                        src={grandStoresCac}
                        alt="grand stores cac"
                        className="mx-auto mt-4"
                    />
                    <p className="mt-2 text-center text-lg mx-auto max-w-prose">
                        Be Sure You Are Receiving The 100% Original Product
                        You’re About To Order
                    </p>
                    <p className="mt-2 text-center text-lg mx-auto max-w-prose">
                        Also Our Office Address Is At… 235, Kusenla Road, Chisco
                        Bus-stop, Ikate-Elegushi, Lekki, Lagos
                    </p>
                </main>
            </div>
            <Contact bgCol={"gdcgreen"} acCol={"white"} />
            <Footer />

            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                loading={isLoading}
                submitSuccess={isSubmitSucess}
                submitFailed={isSubmitFailed}
            />
        </>
    );
}

export default OrderPage;

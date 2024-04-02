import WhatsAppButton from "./WhatsAppButton";

type ContactProps = {
    bgCol: string;
    acCol: string;
};

function Contact({ bgCol, acCol }: ContactProps) {
    return (
        <div className={`bg-${bgCol} px-4 py-8 text-black`}>
            <p className="text-center text-4xl mx-auto max-w-prose font-bold">
                NEED HELP?
            </p>
            <p
                className={`mt-2 text-center text-lg mx-auto max-w-prose font-bold text-${acCol}`}>
                CALL OUR CUSTOMER CARE LINE
            </p>
            <p className="mt-2 text-center text-4xl sm:text-5xl font-display">
                08101967989
            </p>

            <div className="text-center mt-6">
                <WhatsAppButton bgCol={bgCol} acCol={acCol} />
            </div>

            <p className="mt-8 text-center text-lg mx-auto max-w-prose">
                OUR CUSTOMER CARE WILL CALL YOU WITHIN 24HRS AFTER YOU PLACE
                YOUR ORDER.
            </p>
            <p className="mt-2 text-center text-lg mx-auto max-w-prose font-bold">
                DELIVERY TIME: 1 - 5 WORKING DAYS
            </p>
        </div>
    );
}

export default Contact;

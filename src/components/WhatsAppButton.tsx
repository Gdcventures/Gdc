type whatsappProps = {
    bgCol: string;
    acCol: string;
};

function WhatsAppButton({ bgCol, acCol }: whatsappProps) {
    const phoneNumber = "07019133659";
    const message = "Hello! I want to make enquiries about your product.";

    const handleWhatsAppClick = () => {
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <button
            type="button"
            onClick={handleWhatsAppClick}
            className={`bg-${acCol} hover:scale-[1.03] hover:shadow-lg transition-all ease-in-out text-${bgCol} font-bold py-4 px-6 rounded-full`}
            aria-label="open whatsapp">
            OPEN WHATSAPP
        </button>
    );
}

export default WhatsAppButton;

import client1 from "../assets/images/client1.webp";
import testi1 from "../assets/images/testi1.webp";
import client2 from "../assets/images/client2.webp";
import testi2 from "../assets/images/testi2.webp";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.webp";

function Testimonials() {
    return (
        <div className="bg-gdcgreen text-white mt-8">
            <div className="max-w-screen-lg mx-auto px-4 py-6 grid">
                <div className="md:flex gap-4">
                    <div>
                        <p className="text-center text-lg mt-8 mx-auto max-w-prose font-bold font-display">
                            Don’t just take my words for it.
                        </p>
                        <p className="text-center text-lg mt-4 mx-auto max-w-prose">
                            …Here’s some of the transformation of a fraction of
                            our buyers who has had success with the breakthrough
                            weight loss solution.
                        </p>
                        <p className="text-center text-lg mt-2 mx-auto max-w-prose">
                            This is Gloria a 300 level student of Political
                            science Unilag; she shared with us her
                            transformation pictures after using the{" "}
                            <span className="font-bold">
                                28 Day Slimming Capsule!
                            </span>
                        </p>
                    </div>
                    <img
                        src={client1}
                        alt="gloria client"
                        className="mx-auto mt-4"
                    />
                </div>

                <p className="text-center text-lg mt-16 mx-auto max-w-prose">
                    Below is another satisfied buyer who prefers unnamed
                </p>
                <img src={testi1} alt="testimony 1" className="mx-auto mt-4" />

                <p className="text-center text-lg mt-16 mx-auto max-w-prose">
                    Yet another satisfied transformed buyer by name Yetunde, got
                    good result
                </p>
                <div className="mt-4 gap-4 w-full mx-auto md:w-[50%] md:flex justify-center">
                    <img src={testi2} alt="testimony 2" className="mt-2" />
                    <img src={client2} alt="Yetunde client" className="mt-2" />
                </div>

                <div className="mt-16 mx-auto md:flex gap-4">
                    <div className="mx-auto">
                        <p className="text-center text-lg mx-auto max-w-prose">
                            Yet another satisfied client who used the 28 days
                            slimming capsule
                        </p>
                        <img
                            src={client3}
                            alt="belly woman"
                            className="mt-4 mx-auto w-[80%]"
                        />
                    </div>

                    <div className="mx-auto mt-8 md:mt-0">
                        <p className="text-center text-lg mx-auto max-w-prose">
                            It also works for like crazy for men who has pot
                            belly
                        </p>
                        <img
                            src={client4}
                            alt="belly man"
                            className="mt-4 mx-auto"
                        />
                    </div>
                </div>

                <p className="text-center text-lg mt-16 mx-auto max-w-prose">
                    I could fill up this page with transformation pictures and
                    unsolicited testimonials of people like you, this amazing
                    breakthrough{" "}
                    <span className="font-bold">28 Day Slimming Capsule!</span>{" "}
                    has helped. But it might still not convince you so I am also
                    giving you my word.
                </p>
            </div>
        </div>
    );
}

export default Testimonials;

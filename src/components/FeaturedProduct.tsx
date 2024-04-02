import Carousel from "./Carousel";
import ActionBtn from "./ActionBtn";
import fitCapImg from "../assets/images/fitcap_flyer.webp";
import twoFat from "../assets/images/two_fat.png";
import fitCap1 from "../assets/images/fit_cap1.webp";
import fitCap2 from "../assets/images/fit_cap2.webp";
import fitCap3 from "../assets/images/fit_cap3.webp";
import fitCapCollage from "../assets/images/fitcap_collage.webp";

function FeaturedProduct() {
    const slides = [fitCap1, fitCap2, fitCap3];

    return (
        <div className="max-w-screen-lg mx-auto px-4 pt-4 text-black">
            <main className="grid w-full">
                <h1 className="text-center font-display text-4xl font-bold">
                    TRANSFORM YOUR WELLNESS JOURNEY WITH OUR 28 DAYS ACTION
                    SLIMMING CAPSULE
                </h1>
                <p className="text-center text-lg">
                    LOSE EXCESS WEIGHT, POT BELLY, LOVE HANDLES IN NO TIME...
                </p>
                <img
                    src={fitCapImg}
                    alt="fitcap flyer"
                    className="mx-auto mt-4"
                />
                <p className="text-center text-lg mt-8 mb-2">
                    Order Yours Today For Only
                    <span className="font-bold">
                        {" "}
                        N14,000 & Get Free Delivery!
                    </span>
                </p>

                <ActionBtn />

                <p className="mx-auto text-center text-lg mt-8 mb-2 max-w-prose">
                    If you are
                    <span className="font-bold"> a man with pot belly </span>or
                    <span className="font-bold"> a woman with belly fat </span>
                    or perhaps just want to lose fat around your arms or other
                    part of your body.
                </p>

                <img src={twoFat} alt="two fat" className="mx-auto mt-2" />

                <h2 className="text-center text-lg mt-8 font-bold font-display">
                    This product would help you MASSIVELY…
                </h2>
                <div className="flex justify-center p-4">
                    <ul
                        role="list"
                        className="marker:text-[#017758] list-disc font-bold">
                        <li>Boost metabolism so you burn more calories</li>
                        <li>
                            Reduce the absorption of fat from food in the
                            intestines
                        </li>
                        <li>Suppress appetite so you feel less hungry</li>
                        <li>Boosts Energy Levels</li>
                    </ul>
                </div>

                <p className="text-center text-lg mt-8 mx-auto max-w-prose">
                    My name is Damilola, a health & fitness coach and for the
                    past 2 years I have been helping over weight men and women
                    like you get their dream body without taking expensive
                    pills( that don’t even work) or crazy diet plans that starve
                    you.
                </p>
                <p className="text-center text-lg mt-2 mx-auto max-w-prose font-semibold font-display">
                    I have Good News for You!
                </p>
                <p className="text-center text-lg mt-2 mx-auto max-w-prose">
                    Something that works exactly like a switch that you can do,
                    and then eat the usual things you eat….
                </p>
                <p className="text-center text-lg mt-2 mx-auto max-w-prose">
                    Go about your normal activities without worrying about what
                    you eat or whether you are having enough exercise.
                </p>
                <p className="text-center text-lg mt-2 mx-auto max-w-prose">
                    and it will still take off fat fast….without a single side
                    effect.
                </p>
                <p className="text-center text-lg mt-2 mx-auto max-w-prose font-semibold font-display">
                    It is the Amazing 28 Days Slimming Capsule.
                </p>

                <div className="mt-8 mb-4">
                    <Carousel slides={slides} />
                </div>
                <ActionBtn />

                <p className="text-center text-lg mt-4 mx-auto max-w-prose">
                    This product which is created with the help of health
                    experts was developed as a internal body cleansing system
                    with 100 percent natural ingredients.. every overweight
                    person can take to lose weight and get a flatter belly in
                    the shortest time possible with no side effect.
                </p>
                <p className="text-center text-lg mt-2 mx-auto max-w-prose">
                    The{" "}
                    <span className="font-bold">28 Days Slimming Capsule</span>{" "}
                    is an exclusive blend of Lemongrass, Ginseng, Sencha Green
                    Tea and Moringa is packed with naturally cleansing
                    ingredients to clean your colon, purify your body and boost
                    your metabolism.
                </p>

                <img
                    src={fitCapCollage}
                    alt="fit cap collage"
                    className="mx-auto mt-2"
                />
                <ActionBtn />
            </main>
        </div>
    );
}

export default FeaturedProduct;

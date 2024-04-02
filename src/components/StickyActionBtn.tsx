import ActionBtn from "./ActionBtn";
import fitCap1 from "../assets/images/fit_cap1.webp";

function StickyActionBtn() {
    return (
        <div className="bg-black text-white sticky bottom-0">
            <div className="max-w-screen-lg mx-auto px-4 py-4 md:flex justify-center">
                <div className="mb-2 mx-auto flex gap-2 items-center justify-center">
                    <img
                        src={fitCap1}
                        alt="fitcap small"
                        className="rounded-full w-16"
                    />
                    <p className="text-center text-lg max-w-sm">
                        <span className="font-bold underline">
                            Transform Your Body
                        </span>{" "}
                        With The{" "}
                        <span className="font-bold underline">
                            28 Days Slimming Capsule!
                        </span>
                    </p>
                </div>
                <div className="">
                    <ActionBtn />
                </div>
            </div>
        </div>
    );
}

export default StickyActionBtn;

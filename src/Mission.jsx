

const Mission = () => {
    return (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mt-5">
                <span className=" rounded-full border-[0.5px] border-[#020043] px-5 py-2 font-medium text-[#020043]">Who are we</span>
                <h2 className="font-semibold text-4xl text-[#020043] md:pr-80 mt-8">
                    We Help To Get  Soultions
                </h2>
                <p className="my-8 md:pr-48 text-[#020043]">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

                </p>

                <button className=" rounded-xl  bg-[#FFC637] px-5 py-2 font-medium text-black">Learn More</button>
            </div>
            <div className="relative">
                <div>
                    <img src="https://i.postimg.cc/Bv73rph6/Rectangle-24.png" alt="" />
                </div>
                <div className="w-[395px] h-[210px] bg-[#343268] rounded-3xl flex justify-center flex-col gap-2 px-8 mt-[-11.25rem] ml-[-5.75rem] relative z-10">
                    <h2 className="text-2xl font-medium text-white">Our Mission is simple</h2>
                    <p className="text-gray-400">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>

        </div>
    );
};

export default Mission;
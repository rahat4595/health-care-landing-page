

const Health = () => {
    return (
        <section className="bg-[#ffc6370c] h-[928px] rounded-2xl p-5">
            <div className="my-20 grid grid-cols-2 mt-5 ml-5">
                <div className="mt-5">
                    <span className=" rounded-full border-[0.5px] border-[#020043] px-5 py-2 font-medium text-[#020043]">Services</span>
                    <h2 className="font-semibold text-4xl text-[#020043] pr-48 mt-8">
                    Empowering Health, Enriching Lives
                    </h2>
                    <p className="my-8 pr-48 text-[#020043]">
                    We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.

                    </p>

                    <button className=" rounded-xl  bg-[#FFC637] px-5 py-2 font-medium text-black">Appointment</button>
                </div>
                <div className="relative">
                    <div>
                        <img src="../src/assets/Rectangle 27-2.png" className="rounded-3xl" alt="" />
                    </div>
                    <div className="w-[321px] h-[144px] bg-[#343268c7] rounded-3xl flex justify-center flex-col gap-2 px-8 mt-[-11.25rem] ml-5 relative z-10">
                        <h2 className="text-2xl font-medium text-white">Our Mission is simple</h2>
                        <p className="text-gray-400">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>

                <div className="relative mt-20">
                    <div>
                        <img src="../src/assets/Rectangle 27-1.png" className="rounded-3xl" alt="" />
                    </div>
                    <div className="w-[321px] h-[144px] bg-[#343268c7] rounded-3xl flex justify-center flex-col gap-2 px-8 mt-[-11.25rem] ml-5 relative z-10">
                        <h2 className="text-2xl font-medium text-white">Our Mission is simple</h2>
                        <p className="text-gray-400">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
                
                <div className="relative mt-20">
                    <div>
                        <img src="../src/assets/Rectangle 27.png" className="rounded-3xl" alt="" />
                    </div>
                    <div className="w-[321px] h-[144px] bg-[#343268c7] rounded-3xl flex justify-center flex-col gap-2 px-8 mt-[-11.25rem] ml-5 relative z-10">
                        <h2 className="text-2xl font-medium text-white">Our Mission is simple</h2>
                        <p className="text-gray-400">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Health;
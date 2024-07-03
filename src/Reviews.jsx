

const Reviews = () => {
    return (
        <div className="my-20">
            <div className="my-20">
                <span className=" rounded-full border-[0.5px] border-[#020043] px-5 py-2 font-medium text-[#020043]">Testimonial</span>
                <h2 className="font-semibold text-4xl text-[#020043] mt-8">
                    What they say about us
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-[#ffc6370c]">

                    <div className="p-4 space-y-2 text-sm text-gray-400">
                        <h2 className="font-semibold text-xl text-[#020043]">
                            Expertise and Compassion Combined
                        </h2>
                        <p className="text-[#020043ba] text-xs">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    </div>
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="../src/assets/Ellipse 10.png" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-gray-400"><span className="text-[#020043] font-semibold">Sarah D,</span> IT Professional</p>
                                <img className="mt-2" src="../src/assets/Frame 10.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-[#ffc6370c]">

                    <div className="p-4 space-y-2 text-sm text-gray-400">
                        <h2 className="font-semibold text-xl text-[#020043]">
                            Life-Saving Care, Life-Changing Experience
                        </h2>
                        <p className="text-[#020043ba] text-xs">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    </div>
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="../src/assets/Ellipse 10 (1).png" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-gray-400"><span className="text-[#020043] font-semibold">Michael R,</span> Business Executive</p>
                                <img className="mt-2" src="../src/assets/Frame 10.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-[#ffc6370c]">

                    <div className="p-4 space-y-2 text-sm text-gray-400">
                        <h2 className="font-semibold text-xl text-[#020043]">
                            A Partner in Health and
                            Wellness
                        </h2>
                        <p className="text-[#020043ba] text-xs">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                    </div>
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="../src/assets/Ellipse 10 (2).png" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-gray-400"><span className="text-[#020043] font-semibold">David S,</span> Lawyer</p>
                                <img className="mt-2" src="../src/assets/Frame 10.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;
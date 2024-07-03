

const Faq = () => {
    return (
        <div className="my-20">
            <div className="">
                <span className=" rounded-full border-[0.5px] border-[#020043] px-5 py-2 font-medium text-[#020043]">Faq</span>
                <h2 className="font-semibold text-4xl text-[#020043] mt-8">
                    Frequently Asked Question
                </h2>
            </div>
            <div>
                <div className="collapse collapse-arrow mt-5 bg-[#ffc6370c]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium border-b-2"> What are your office hours?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mt-5 bg-[#ffc6370c]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium border-b-2"> How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mt-5 bg-[#ffc6370c]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium border-b-2"> Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mt-5 bg-[#ffc6370c]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium border-b-2"> What should I bring to my appointment?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mt-5 bg-[#ffc6370c]">
                    <input type="radio" name="my-accordion-2"  />
                    <div className="collapse-title text-xl font-medium border-b-2"> Do you offer telemedicine appointments?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Faq;
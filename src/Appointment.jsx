

const Appointment = () => {
    const CoverStyle = {
        height: '470px',
        backgroundImage: ' url("../src/assets/Group 43.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="my-24 flex justify-between py-10 px-12" style={CoverStyle}>
            <div className="mt-10">
                <h2 className="font-semibold text-5xl text-white  mt-8">
                    Get Your <br />

                    First Appointment <br />
                    
                    at 50% Off! <br />
                </h2>
                
                <div className="flex gap-5 mt-5">
                <button className=" rounded-lg  bg-[#FFC637] items-center px-5 py-2 font-medium flex gap-2 text-black">Appointment <img src="../src/assets/Frame 6 (1).png" alt="" /> </button>
                <button className=" rounded-lg border items-center px-5 py-2 font-medium flex gap-2 text-white">Learn More <img src="../src/assets/Frame 6.png" alt="" /></button>
                </div>
            </div>
            <div>
                <img src="../src/assets/logo light.png" alt="" />
            </div>
        </div>
    );
};

export default Appointment;
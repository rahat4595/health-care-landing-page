import './App.css'

const Care = () => {
    const cardStyle = {
        height: '312px',
        backgroundImage: ' url("../src/assets/Rectangle 16.png")',
        backgroundRepeat: 'no-repeat'

    }
    return (
        <div className="grid grid-cols-1fr-2fr-1fr my-10 ">
            <div style={cardStyle}>
                <div>
                    <h2 className="text-4xl mt-4 ml-4 text-[#020043] font-semibold">90%</h2>
                    <p className="mt-4 ml-4  text-[#020043]">
                        Patient satisfaction <br /> rate,reflecting <br /> our commitment.
                    </p>
                    <div className="ml-6 mt-4">
                        <img src="../src/assets/Group 12.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="">

             <div>
                <h2 className='text-center text-5xl font-semibold text-[#020043]'>Comprehensive Care for Every Patient</h2>
             </div>
             <div className='grid grid-cols-3 mt-10 gap-5'>
                <img src="../src/assets/Group 14.png" alt="" /><img className='mt-5' src="../src/assets/Group 8.png" alt="" /><img src="../src/assets/Group 13 (1).png" alt="" />
             </div>

            </div>
            <div style={cardStyle} className='ml-16'>
                <div>
                    <h2 className="text-4xl mt-4 ml-4 text-[#020043] font-semibold">50+</h2>
                    <p className="mt-4 ml-4 text-[#020043] ">
                        Free lession video <br />
                        for patient
                    </p>
                    <div className="ml-6 mt-4">
                        <img src="../src/assets/Group.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;
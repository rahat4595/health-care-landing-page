import './App.css'

const Care = () => {
    const cardStyle = {
        height: '312px',
        backgroundImage: ' url("https://i.postimg.cc/L6J92cdp/Rectangle-16.png")',
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
                        <img src="https://i.postimg.cc/B6Z3yy5R/Group-12.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="">

             <div>
                <h2 className='text-center text-5xl font-semibold text-[#020043]'>Comprehensive Care for Every Patient</h2>
             </div>
             <div className='grid grid-cols-3 mt-10 gap-5'>
                <img src="https://i.postimg.cc/5tbWYGrj/Group-14.png" alt="" />
                <img className='mt-5' src="https://i.postimg.cc/YSpTqF4W/Group-8.png" alt="" />
                <img src="https://i.postimg.cc/QM0wBM5n/Group-13-1.png" alt="" />
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
                        <img src="https://i.postimg.cc/XXSzMBSX/Group.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;
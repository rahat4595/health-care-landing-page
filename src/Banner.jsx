const Banner = () => {
    const bannerStyle = {
        height: '470px',
        backgroundImage: ' url("../src/assets/Group 2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="rounded-2xl mt-10" style={bannerStyle}></div>
    );
};

export default Banner;

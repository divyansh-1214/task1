import React from 'react';
import { useRef } from 'react';

function Hero() {
    const r11 = useRef(null)
    const r12 = useRef(null)
    function handle11() {
        r11.current.style.transition = "transform 0.3s ease";
        r11.current.style.transform = "rotate(15deg)";
        r12.current.style.transition = "transform 0.3s ease";
        r12.current.style.transform = "rotate(-25deg)";
    }
    function handle12() {
        r11.current.style.transform = "rotate(0deg)"
        r12.current.style.transform = "rotate(-20deg)"
    }

    const r31 = useRef(null);
    const r32 = useRef(null);
    function handle31() {
        r31.current.style.transition = "transform 0.3s ease";
        r31.current.style.transform = "rotate(-30deg)";
        r32.current.style.transition = "transform 0.3s ease";
        r32.current.style.transform = "rotate(30deg)";
    }
    function handle32() {
        r31.current.style.transform = "rotate(-20deg)"
        r32.current.style.transform = "rotate(20deg)"
    }

    const r41 = useRef(null)
    const r42 = useRef(null)
    const r43 = useRef(null)
    function handlein4() {
        r41.current.style.transition = "transform 0.5s ease"
        r41.current.style.transform = "rotate(-35deg)"
        r42.current.style.transition = "transform 0.7s ease"
        r42.current.style.transform = "rotate(-20deg)"
        r43.current.style.transition = "transform 0.9s ease"
        r43.current.style.transform = "rotate(-15deg)"
    }
    function handleout4() {
        r41.current.style.transform = "rotate(-15deg)"
        r42.current.style.transform = "rotate(-10deg)"
        r43.current.style.transform = "rotate(-5deg)"
    }

    const r5 = useRef(null);
    function handlein5() {
        r5.current.style.transition = "transform 0.5s ease"
        r5.current.style.transform = "translateY(-50px)"
    }
    function handleout5() {
        r5.current.style.transform = "translateX(0px)"
    }

    const r6 = useRef(null);
    function handlein6() {
        r6.current.style.transition = " transform 0.6s ease";
        r6.current.style.transform = "translateY(-20px)"
    }
    function handleout6() {
        r6.current.style.transform = "translateX(0px)"
    }


    const r21 = useRef(null)
    const r22 = useRef(null)
    const r23 = useRef(null)
    function handlein2(){
        r21.current.style.transition = "transform 0.8s ease"
        r21.current.style.transform = "translateY(30px)"
        r22.current.style.transition = "transform 0.8s ease"
        r22.current.style.transform = "translateY(-30px)"
        r23.current.style.transition = "transform 0.8s ease"
        r23.current.style.transform = "translateY(30px)"
    }
    function handleout2(){
        r21.current.style.transform = "translateY(0px)"
        r22.current.style.transform = "translateY(0px)"
        r23.current.style.transform = "translateY(0px)"
    }
    return (
        <>
            <div className=' grid justify-center items-center  w-screen h-screen overflow-x-auto'>
                <h1 className='text-7xl pt-10 pb-10 w-full justify-center text-center '>Explore endless <br /> possibilities.</h1>
                <div className='canvas mx-5 text-center justify-center grid grid-flow-col   gap-5 grid-rows-3 grid-cols-7' style={{ height: '50rem', width: '50rem' }}>
                    <div className=' bg-[#c3b2e7] rounded-3xl relative  row-span-2  col-span-3' onMouseEnter={handle11} onMouseLeave={handle12}>
                        <h1 className='flex pt-4 px-4 text-2xl justify-start text-[#7e4a72]'>Customization</h1>
                        <div className='1 grid grid-rows-3 relative'>
                            <div className='relative '>
                                <img ref={r11} className='absolute top-12 right-12 ' src="./public/1.2.png" style={{ width: '7.5rem' }} alt="" />
                                <img className='absolute w-32 top-12 left-12' src="./public/1.1.png" alt="" ref={r12} style={{ transform: 'rotate(-20deg)' }} />
                            </div>
                            <div className='bg-white relative overflow-hidden top-72 h-[4rem] w-[22rem] ml-[-3rem] p-3 rounded-xl '>
                                <img className=' w-[60rem] absolute' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525386194aa04d73fdaab28_customization-options.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#f9a575] relative col-span-5 rounded-3xl flex overflow-hidden'  onMouseEnter={handlein2} onMouseLeave={handleout2}>
                        <div className='w-[fit] text-[#873915] absolute p-3 bottom-0 text-start'>
                            <h1 className='text-3xl font-semibold'>Send Gifts</h1>
                            <p className='text-lg w-[12rem]'>Send as a group with friends or individually</p>
                        </div>
                        <div className='grid grid-cols-3 w-80 right-[8rem]  absolute ' style={{ transform: 'rotate(-20deg)' }}>
                            <div className='absolute top-5 left-0 m-5' ref={r21}>
                                <img className='p-2  w-[8rem] rounded-2xl ' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525428301c0c827c6c29243_gifts-card-bath-body-works.webp" alt="" />
                                <img className='p-2 w-[8rem] rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp" alt="" />
                                <img className='p-2 w-[8rem] rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652542828b6c40e266484f93_gifts-card-doordash.webp" alt="" />
                            </div>
                            <div className='absolute top-[-2rem] left-32 px-5' ref={r22}>
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652542833f884b05c29eca1a_gifts-card-dunkin-donuts.webp" alt="" />
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce078cb06ac26896fb7_wallet-card-victorias-secret.webp" alt="" />
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce094aa04d73fdff6d4_wallet-card-nike.webp" alt="" />
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254283c2dced4668a125c8_gifts-card-ulta.webp" alt="" />
                            </div>
                            <div className='absolute w-64 left-64 px-8' ref={r23}>
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254283c535bafbfa5b3720_gifts-card-sephora.webp" alt="" />
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282816c4f99f9a04c7b_gifts-card-target.webp" alt="" />
                                <img className='p-2 w-[8rem] top-0 rounded-2xl' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce001c0c827c6bac1fb_wallet-card-starbucks.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#f782a4] col-span-4 relative rounded-3xl' onMouseEnter={handle31} onMouseLeave={handle32}>
                        <div className='relative'>
                            <img className='w-36 absolute right-28 top-0 ' ref={r31} style={{ transform: 'rotate(-20deg)' }} src="./public/2.1.png" alt="" />
                            <img className='w-44 absolute right-5 top-0 rounded-xl rotate-12' ref={r32} style={{ transform: 'rotate(20deg)' }} src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253a825d829fa71580e41b_scheduling-ui.svg" alt="" />
                        </div>
                        <div className='absolute p-2 justify-start text-start bottom-0 '>
                            <h1 className='text-3xl font-semibold pb-1 text-[#5f3675]'>Scheduling</h1>
                            <p className='w-[15rem] text-[#663575]'>Schedule all your cards and gifts now and we’ll send them later</p>
                        </div>
                    </div>
                    <div className=' bg-[#c8da8e] col-span-2 grid grid-rows-2 rounded-3xl' onMouseEnter={handlein4} onMouseLeave={handleout4}>
                        <div className='relative justify-center text-center p-2'>
                            <img className='absolute rounded-xl h-20 w-44 top-2 ' ref={r41} style={{ transform: 'rotate(-15deg)' }} src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce078cb06ac26896fb7_wallet-card-victorias-secret.webp" alt="" />
                            <img className='absolute  rounded-xl h-20 w-44 top-4' ref={r42} style={{ transform: 'rotate(-10deg)' }} src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce094aa04d73fdff6d4_wallet-card-nike.webp" alt="" />
                            <img className='absolute  rounded-xl h-20 w-44 top-6 ' ref={r43} style={{ transform: 'rotate(-5deg)' }} src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce001c0c827c6bac1fb_wallet-card-starbucks.webp" alt="" />
                            <img className='absolute  rounded-xl h-20 w-48 top-8' src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce030282e8a2f1e202a_wallet-givingli-cash.svg" alt="" />
                        </div>
                        <div className='justify-start text-start text-[#244a1f]'>
                            <h1>Wallet</h1>
                            <p>Access all your gifts and save up your Givingli Cash</p>
                        </div>
                    </div>
                    <div className=' bg-[#fede6e] col-span-2 grid grid-rows-2 px-4 overflow-hidden rounded-3xl' onMouseEnter={handlein5} onMouseLeave={handleout5}>
                        <div className='justify-start text-start text-[#654a1f]'>
                            <h1>Inbox</h1>
                            <p>Track your gifts, group chats, and sent cards</p>
                        </div>
                        <div className='overflow-hidden w-full justify-end rounded-xl'>
                            <img className='rounded-xl w-60' ref={r5} src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253fb67d7b8af4623b9bef_inbox-ui.webp" alt="" />
                        </div>
                    </div>
                    <div className=' bg-[#b8cfdd] col-span-2 rounded-3xl grid grid-rows-2 overflow-hidden pl-4' onMouseEnter={handlein6} onMouseLeave={handleout6}>
                        <div className='w-fit h-fit text-[#1a4766]'>
                            <h1>Reminders</h1>
                            <p>Never miss a birthday again</p>
                        </div>
                        <div >
                            <img ref={r6} src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254928fb080a7f70152b1b_reminders-ui.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;


// sm: min-width: 640px (small devices).
// md: min-width: 768px (tablets).(983)
// lg: min-width: 1024px (laptops).
// xl: min-width: 1280px (larger laptops/desktops).
// 2xl: min-width: 1536px.

// import React from 'react';
// import { useRef } from 'react';
// const App = () => {
//   const r = useRef(null);
//   const handleMouseEnter = () => {
//     r.current.style.backgroundColor = "lightgreen";
//     console.log("Mouse entered!");
//   };

//   const handleMouseLeave = () => {
//     console.log("Mouse left!");
//   };

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ width: "200px", height: "200px", background: "lightcoral" }}
//       ref={r}
//     >
//       Hover over me!
//     </div>
//   );
// };

// export default App;
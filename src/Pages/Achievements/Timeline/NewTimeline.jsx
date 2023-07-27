import React from 'react'
import achieveData from '../Achievements.json';


export default function NewTimeline() {
    const [item_, setItem_] = React.useState(achieveData[0]);

    return (
        <div>
            <TimelineItem item_={item_}>

                <div className="w-[10px] min-h-screen bg-black bg-gradient-to-b
            from-[#ff6f00]
            via-[#ffbf00]
            to-[#8b0066]
            grid
            place-items-center
            z-10
            ">
                    {achieveData.map((item, idx) => (
                        <button className='bg-white w-10 h-10 ml-[-7.5px] rounded-full' key={idx}
                            id={item.title}
                            onClick={() => { setItem_(item) }}
                        />
                    ))}
                </div>
            </TimelineItem>
        </div>
    )
}


const TimelineItem = ({ item_, children }) => {
    const [currImageIndex, setCurrImageIndex] = React.useState(0);

    // Function to automatically change the image every 2 seconds
    const autoChangeImage = () => {
        if (item_.images.length > 1) {
            setCurrImageIndex((prevCurrImageIndex) => (prevCurrImageIndex + 1) % item_.images.length);
        }
        else {
            setCurrImageIndex(0)
        }
    };

    React.useEffect(() => {
        setCurrImageIndex(0)
        const intervalId = setInterval(autoChangeImage, 2000); // 2 seconds
        return () => clearInterval(intervalId);
    }, [item_.images.length]);

    return (
        <div className=' grid place-items-center text-center grid-cols-[9fr_1fr_9fr]'>
            <img src={item_.images[currImageIndex]} alt="" className='w-full h-full absolute z-0 blur-lg hover:blur-sm ease-out duration-100' />
            <h1 className='text-white z-10'>{item_.title}</h1>
            {children}
            <p className='text-white z-10 px-20'>{item_.description}</p>
        </div>
    )
}
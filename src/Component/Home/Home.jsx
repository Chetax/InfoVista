import { useEffect, useState } from 'react';
import LeftNav from '../LeftNav/LeftNav';
import MobileLeftNav from '../LeftNav/MobileLeftNev';

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth > 700 ? <LeftNav /> : <MobileLeftNav />}
        </>
    );
}

export default Home;

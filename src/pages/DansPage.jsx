import {useEffect, useState} from "react";
import MobileDans from "../components/MobileDans.jsx";
import DesktopDans from "../components/DesktopDans.jsx";


const DansPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile ? <MobileDans /> : <DesktopDans />;
};

export default DansPage;
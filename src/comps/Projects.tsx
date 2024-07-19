import { motion } from "framer-motion";
import { useState } from "react";
import HotelCard from "./hotelcard";
import FilculCard from "./philculcard";
import './cardstyle.scss'

export default function Projects(){
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setOpenCardIndex(openCardIndex === index ? null : index);
    };

    return (
        <>
            <div style={{display: "inline-block"}}>
                <h1>Here are some of the projects I've worked on.</h1>
            <div className = "ProjectListGrid">
                <motion.div
                        transition={{ layout: { type: 'spring' } }}
                        layout
                        onClick={() => handleCardClick(0)}
                        className="card"
                        style={{ borderRadius: '2rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
                    >
                        <motion.h2 layout="position">Hotel Booking Web Application</motion.h2>
                        {openCardIndex === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="expanded"
                            >
                                <HotelCard />
                            </motion.div>
                        )}
                    </motion.div>
                    <motion.div
                        transition={{ layout: { type: 'spring' } }}
                        layout
                        onClick={() => handleCardClick(1)}
                        className="card"
                        style={{ borderRadius: '2rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
                    >
                        <motion.h2 layout="position">Philcul Membership Management System</motion.h2>
                        {openCardIndex === 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="expanded"
                            >
                                <FilculCard />
                            </motion.div>
                        )}
                    </motion.div>
            </div>
            </div>
        </>
    )
}
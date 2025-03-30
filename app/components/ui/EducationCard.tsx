import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

interface EducationCardProps {
     institution: string;
     location: string;
     degree: string;
     duration: string;
     score: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, location, degree, duration, score }) => {
     return (
          <motion.div
               className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full h-full min-w-[300px] max-w-[500px] min-h-[250px] flex-wrap flex-col justify-between"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
          >
               <div>
                    <div className="flex items-center gap-4">
                         <MdSchool className="text-4xl text-blue-400" />
                         <h2 className="text-2xl font-bold">{institution}</h2>
                    </div>
                    <p className="flex items-center text-gray-300 mt-2">
                         <FaMapMarkerAlt className="mr-2 text-yellow-400" /> {location}
                    </p>
                    <p className="flex items-center text-gray-300 mt-2"> 
                         <FaGraduationCap className="mr-2 text-green-400" /> {degree}
                    </p>
               </div>
               <div>
                    <p className="text-gray-300 mt-2">🕒 {duration}</p>
                    <p className="text-gray-300 mt-2">📈 {score}</p>
               </div>
          </motion.div>
     );
};

export default EducationCard;

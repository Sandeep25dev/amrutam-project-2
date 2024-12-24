import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import DoctorCard from "../components/DoctorCard";
import { FilterOption } from "../types/filterOptions";

const FindDoctors: React.FC = () => {
  const filterOptions: FilterOption[] = [
    { label: "Expertise", options: ["Cardiology", "Dermatology", "Neurology"] },
    { label: "Gender", options: ["Male", "Female"] },
    { label: "Fees", options: ["Below ₹1000", "₹1000-₹2000", "Above ₹2000"] },
    { label: "Languages", options: ["English", "Hindi", "Bengali"] },
  ];
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Filters filters={filterOptions} />
      <div className="max-w-[1220px] mx-auto grid grid-cols-3 gap-7 p-4">
        {[1, 2, 3].map((_, index) => (
          <DoctorCard
            key={index}
            name="Dr. Prerna Narang"
            specialization="Male-Female Infertility"
            experience="7 years of Experience"
            languages="English, Hindi, Marathi"
            videoConsultationFee="₹800"
            chatConsultationFee="Free"
            rating={4.5}
            imageUrl="src/assets/doctor-img.png"
          />
        ))}
      </div>
    </div>
  );
};

export default FindDoctors;

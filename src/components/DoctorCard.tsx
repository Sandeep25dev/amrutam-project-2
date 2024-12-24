import React from "react";
import Button from "./Button";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  languages: string;
  videoConsultationFee: string;
  chatConsultationFee: string;
  rating: number;
  imageUrl: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  languages,
  videoConsultationFee,
  chatConsultationFee,
  rating,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm bg-[#FFF7E2] rounded-xl shadow-md p-6">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
          <div className="absolute bottom-0 right-0 bg-black text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center">
            {rating}
            <span className="ml-1 text-yellow-400">★</span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
          {name}
        </h2>
        <p className="text-gray-600 flex items-center text-sm mb-1">
          <span className="mr-2">📌</span>
          {specialization}
        </p>
        <p className="text-gray-600 flex items-center text-sm mb-1">
          <span className="mr-2">🎓</span>
          {experience}
        </p>
        <p className="text-gray-600 flex items-center text-sm mb-4">
          <span className="mr-2">💬</span>
          Speaks: {languages}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center border border-gray-300 bg-white rounded-lg p-2">
            <p className="text-gray-800 text-sm">Video Consultation</p>
            <p className="font-bold text-green-600 text-sm">
              {videoConsultationFee}
            </p>
          </div>
          <div className="text-center border border-gray-300 bg-white rounded-lg p-2">
            <p className="text-gray-800 text-sm">Chat Consultation</p>
            <p className="font-bold text-green-600 text-sm">
              {chatConsultationFee}
            </p>
          </div>
        </div>

        <Button variant="outlined" classname="w-full mb-2">
          View Profile
        </Button>
        <Button variant="primary" classname="w-full">
          Book a consultation
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;

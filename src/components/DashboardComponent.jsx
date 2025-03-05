import React, { useEffect, useState } from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  const DsColor = (totalTasks) => {
    if (totalTasks === 24) return "bg-[#F4538A]"; 
    if (totalTasks === 11) return "bg-[#59D5E0CF]";     
    if (totalTasks === 14) return "bg-[#FAA300CF]";   
    if (totalTasks === 8) return "bg-[#F5DD61]";     
    return "bg-gray-200"; 
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.map((option) => (
          <div
            key={option.id}
            className={`flex ${option.color} gap-5 py-3.5 px-4 rounded-xl w-[210px] bg-white`}
          >
            <div className={`${DsColor(option.totalTasks)} p-2 rounded-xl w-[58px] h-[58px] flex items-center justify-center`}>
              <img src={option.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{option.totalTasks}</p>
              <p className="text-[#2B343B] text-[14px]">{option.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
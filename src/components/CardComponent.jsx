import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ project }) {
  if (!project) return null;

  const ProgressColor = (progress) => {
    switch (progress) {
      case '25':
        return 'bg-[#F4538A]'; // Pink
      case '50':
        return 'bg-[#F5DD61]'; // Cyan
      case '75':
        return 'bg-[#FAA300]'; // Yellow
      case '100':
        return 'bg-[#59D5E0]'; // Orange
      default:
        return 'bg-gray-200'; // Default
    }
  };

  const DateColor = (progress) => {
    switch (progress) {
      case '25':
        return 'text-[#F4538A]'; // Pink
      case '50':
        return 'text-[#F5DD61]'; // Cyan
      case '75':
        return 'text-[#FAA300]'; // Yellow
      case '100':
        return 'text-[#59D5E0]'; // Orange
      default:
        return 'text-gray-500'; // Default gray
    }
  };

  return (
    <div className="p-2">
      <div className="w-full p-6 bg-white rounded-2xl shadow-sm">
        <div className="flex justify-between mb-5">
          <p className={`${DateColor(project.progress)} font-bold text-[11px]`}>
            {project.dueDate}
          </p>
          <EllipsisVertical size={20} className="text-gray-500" />
        </div>
        <h5 className="capitalize mb-2 text-[20px] font-semibold tracking-tight text-gray-900">
          {project.name}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-[#2B343B] text-[10px]" style={{ height: "40px" }}>
          {project.description}
        </p>
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{project.progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`${ProgressColor(project.progress)} h-2.5 rounded-full`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-end">
          <p className="font-medium bg-gray-100 text-[15px] py-1.5 px-4 rounded-lg max-w-28 text-center">
            {project.daysLeft}
          </p>
        </div>
      </div>
    </div>
  );
}

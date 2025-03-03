import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [sortOrder, setSortOrder] = useState("");
  const [favorites, setFavorites] = useState({});

  // Sorting Function
  const sortedMaterials = [...learningMaterials].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title); 
    } else if (sortOrder === "desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle favorite status
    }));
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[916px]">
      {/* Calling FilterComponent */}
      <FilterComponent setSortOrder={setSortOrder} />

      {/* Title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* Materials List */}
      <div className="space-y-3">
        {sortedMaterials.map((option) => (
          <div
            key={option?.id}
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
          >
            <img
              src={option.image}
              alt={option.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">{option.title}</p>
                <Star
                  size={20}
                  fill={favorites[option.id] ? "yellow" : "none"}
                  stroke={favorites[option.id] ? "yellow" : "black"}
                  className="cursor-pointer"
                  onClick={() => toggleFavorite(option.id)}
                />
              </div>
              <p className="text-gray-400 text-[10px]">
                Posted at:{" "}
                {new Date(option.postedAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

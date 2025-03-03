import React from "react";

export default function FilterComponent({ setSortOrder }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}

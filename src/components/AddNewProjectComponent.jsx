import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddNewProjectComponent({ setProjects }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [progress, setProgress] = useState("");
  const [description, setDescription] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const formatDate = (date) => {
    const selectedDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return selectedDate.toLocaleDateString("en-US", options);
  };

  const calculateDaysLeft = (date) => {
    if (!date) return "";
    const selectedDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = selectedDate - currentDate;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? `${daysLeft} days left` : "Expired";
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const projectDescription = description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const formattedDueDate = formatDate(dueDate);

    // Add new project to the state
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        name: projectName,
        dueDate: formattedDueDate,
        progress,
        description: projectDescription,
        daysLeft: calculateDaysLeft(dueDate),
      },
    ]);
    setProjectName("");
    setDueDate("");
    setProgress("");
    setDescription("");
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-sm">
          <div className="relative p-4 w-full max-w-md bg-white rounded-2xl shadow-sm">
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Create New Project
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                ✖
              </button>
            </div>

            <form className="p-4" onSubmit={handleCreateProject}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="bg-gray-50 border rounded-lg block w-full p-2.5"
                    placeholder="Type Project Name"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="dueDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    min={today}
                    className="bg-gray-50 border rounded-lg block w-full p-2.5"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="progress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Progress
                  </label>
                  <select
                    id="progress"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                    className="bg-gray-50 border rounded-lg block w-full p-2.5"
                    required
                  >
                    <option value="">Select Progress</option>
                    <option value="100">100%</option>
                    <option value="75">75%</option>
                    <option value="50">50%</option>
                    <option value="25">25%</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description (Optional)
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50 border rounded-lg block w-full p-2.5 resize-none overflow-hidden"
                    placeholder="Write project description here"
                  ></textarea>
                </div>
              </div>

              {/* Days Left Display */}
              <div className="text-center mb-3 font-medium">
                {dueDate && <p>⏳ {calculateDaysLeft(dueDate)}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

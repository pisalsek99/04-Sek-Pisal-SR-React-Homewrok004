import React, { useState, useEffect } from "react";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import CardComponent from "./components/CardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import DashboardComponent from "./components/DashboardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";

function App() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (searchVal === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchVal, projects]);

  return (
    <div className="flex bg-gray-100">
      <aside className="w-64">
        <SidebarComponent />
      </aside>
      <div className="flex flex-col flex-1">
        <header className="w-full p-4">
          <TopNavbarComponent setSearchVal={setSearchVal} /> 
        </header>
        <div className="flex flex-1">
          <main className="flex-1 p-6">
            <section>
              <div className="mb-4">
                <DashboardComponent />
              </div>
              <div className="flex justify-between">
                <AssignmentsComponent />
                <AddNewProjectComponent setProjects={setProjects} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <CardComponent key={index} project={project} />
                ))}
              </div>
            </section>
          </main>
          <aside className="w-[320px] p-4">
            <h2 className="text-lg font-semibold mb-3">Learning Materials</h2>
            <LearningMaterialsComponent />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;

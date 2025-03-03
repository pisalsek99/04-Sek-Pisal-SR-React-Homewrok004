import React from "react";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import CardComponent from "./components/CardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import DashboardComponent from "./components/DashboardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";

function App() {
  return (
    <div className="flex bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-64 ">
        <SidebarComponent />
      </aside>

      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header className="w-full p-4 ">
          <TopNavbarComponent />
        </header>

        <div className="flex flex-1">
          {/* Dashboard Content */}
          <main className="flex-1 p-6">
            <section>
              {/* Dashboard Component */}
              <div className="mb-4">
                <DashboardComponent />
              </div>

              {/* Button Add */}
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-5">Assignment</h2>
                <AddNewProjectComponent />
              </div>
              
              {/* Crad Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardComponent />
              </div>
            </section>
          </main>

          {/* Learning Materials */}
          <aside className="w-[320px] p-4 ">
            <h2 className="text-lg font-semibold mb-3">Learning Materials</h2>
            <LearningMaterialsComponent />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;

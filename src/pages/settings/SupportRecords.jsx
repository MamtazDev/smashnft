import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SettingsSidebar from "../../partials/settings/SettingsSidebar";
import AccountPanel from "../../partials/settings/AccountPanel";

const SupportRecords = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Account Support ✨
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <SettingsSidebar />
                <div className="grow">
                  {/* Panel body */}
                  <div className="p-6 space-y-6">
                    <h2 className="text-2xl text-slate-800 font-bold">
                      {" "}
                      Account support
                    </h2>
                    <p>If you need help with your account, we can help you</p>

                    {/* Business Profile */}
                    <section>
                      <div className="sm:flex gap-2 sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                        <div>
                          <select className="w-full">
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                          </select>
                        </div>
                        <div>
                          <select className="w-full">
                            <option>Contact market support </option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                            <option>General Help</option>
                          </select>
                        </div>
                        <div>
                          <label for="">Title</label>
                          <input type="text" />
                        </div>
                        <div>
                          <label for="">Transfer ID (optional)</label>
                          <input type="text" />
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Panel footer */}
                  <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                      <div className="flex self-end">
                        <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                          Cancel
                        </button>
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupportRecords;

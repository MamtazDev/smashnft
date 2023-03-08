import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const AddSupport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };
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
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <section>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">
                    Add Support type
                  </h2>

                  <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        <span className="text-red-600">*</span> Languages
                      </label>
                      <select>
                        <option>Please select a language</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="business-id"
                      >
                        <span className="text-red-600">*</span> Title
                      </label>
                      <input
                        className="form-input w-full"
                        type="text"
                        placeholder="Please enter a title"
                        required
                      />
                    </div>
                  </div>
                  {/* Panel footer */}
                  <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                      <div className="flex self-end">
                        <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">
                          Indeed Set
                        </button>
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
                          Take Eliminate
                        </button>
                      </div>
                    </div>
                  </footer>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddSupport;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

import ProductImage01 from "../../images/related-product-01.jpg";
import ProductImage02 from "../../images/related-product-02.jpg";
import ProductImage03 from "../../images/related-product-03.jpg";

const AddArticle = () => {
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
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">
                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">
                      Add Article ✨
                    </h1>
                  </header>
                  {/* Billing Information */}
                  <div>
                    <form>
                      <div className="space-y-4">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Languages <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                            >
                              <option>Languages</option>
                              <option>USA</option>
                              <option>United Kingdom</option>
                            </select>
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Information type{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                            >
                              <option>Please select information</option>
                              <option>USA</option>
                              <option>United Kingdom</option>
                            </select>
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-address"
                            >
                              Title <span className="text-rose-500">*</span>
                            </label>
                            <input
                              id="card-address"
                              className="form-input w-full"
                              type="text"
                            />
                          </div>
                          <div className="flex-1">
                            <label
                              className="block text-sm font-medium mb-1"
                              htmlFor="card-country"
                            >
                              Recommended{" "}
                              <span className="text-rose-500">*</span>
                            </label>
                            <select
                              id="card-country"
                              className="form-select w-full"
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-6">
                        <button className="bg-blue-500 text-white rounded-lg p-2" type="">Indeed Set</button>
                        <button className="border text-white rounded-lg p-2" type="">Take Eliminate</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddArticle;

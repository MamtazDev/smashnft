import React, { useState } from "react";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const ContractApplication = () => {
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
            <div className="sm:flex flex-wrap gap-8 sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Contract Application ✨
                </h1>
              </div>

              <div>
                <label className="mr-2" for="status">
                  Application user
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter the applicant"
                />
              </div>

              <div>
                <label className="mr-2" for="status">
                  Contract type
                </label>
                <select className="border-none" name="status" id="status">
                  <option>please select contract type</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Contract name
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter the contract name"
                />
              </div>

              <div>
                <label className="mr-2" for="status">
                  Main chain
                </label>
                <select className="border-none" name="status" id="status">
                  <option>Please select the main chain</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <div>
                <label className="mr-2" for="status">
                  E-mail
                </label>
                <input
                  className="border-none"
                  type="email"
                  placeholder="please enter email address"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Contract address
                </label>
                <input
                  className="border-none"
                  type="text"
                  placeholder="please enter the contract address"
                />
              </div>
              <div>
                <label className="mr-2" for="status">
                  Status
                </label>
                <select className="border-none" name="status" id="status">
                  <option>Please select a Status</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label className="mr-2" for="status">
                  Create time
                </label>
                <input
                  className="border-none"
                  type="date"
                  placeholder="please enter menu name"
                />
              </div>
            </div>

            {/* Table */}
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full divide-y divide-slate-200">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select all</span>
                          <input className="form-checkbox" type="checkbox" />
                        </label>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Application user
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Contract name
                      </div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Contract type
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Main chain</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Initial block
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">E-mail</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold">Contract address</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">state</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">我不知道</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Reviewer</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Audit time</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Create time</div>
                    </th>

                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Operation</div>
                    </th>
                  </tr>
                </thead>

                {/* Table body */}
                <tbody className="text-sm">
                  <tr>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select</span>
                          <input className="form-checkbox" type="checkbox" />
                        </label>
                      </div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-red-600">0xjhhg...jhgg</div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>blank</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>ERC1155</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>BSCTest</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>154258896</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>blank</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-red-600">0xjhhg...jhgg</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="bg-green-200 p-2 rounded-lg">
                        Approved
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>1</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>admin</div>
                    </td>

                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>2022-01-25</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div>2022-01-25</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-blue-600">Edit Delete</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContractApplication;

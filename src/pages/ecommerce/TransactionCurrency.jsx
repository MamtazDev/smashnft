import React, { useState } from "react";
import DateSelect from "../../components/DateSelect";
import PaginationClassic from "../../components/PaginationClassic";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import {BiEditAlt} from "react-icons/bi";
import {RiDeleteBin5Line} from 'react-icons/ri';

const TransactionCurrency = () => {
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
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                   Transaction Currency ✨
                  </h1>
                </div>
  
                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                  {/* Delete button */}
                  {/* <DeleteButton selectedItems={selectedItems} /> */}
                  {/* Dropdown */}
                  <DateSelect />
                  {/* Filter button */}
                  {/* <FilterButton align="right" /> */}
                  {/* Add customer button */}
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg
                      className="w-4 h-4 fill-current opacity-50 shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add Order</span>
                  </button>
                </div>
              </div>
  
              {/* Table */}
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full divide-y divide-slate-200">
                  {/* Table header */}
                  <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
                    <tr>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Chain name</div>
                      </th>
  
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Icon</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Token</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Token type</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Contract address</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Accuracy</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Sort</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">USD Tex change rate</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Status</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Creation time</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Operation</div>
                      </th>
                    
                    </tr>
                  </thead>
  
                  {/* Table body */}
                  <tbody className="text-sm">
                    <tr>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>Rinkeby</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
                          <img
                            className="ml-1"
                            src="https://avatars.githubusercontent.com/u/6250754?s=200&v=4"
                            width="50"
                            height="50"
                          />
                        </div>
                      </td>
  
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>ETH</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="bg-green-200 p-2 rounded-lg">Main chain to</div>
                      </td>
  
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>0xhhgj...jhhfv</div>
                      </td>
  
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>18</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>1</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>3269.26</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="bg-blue-200 p-2 rounded-lg">Enable</div>
                      </td>
                     
                     
                  
  
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div>2022-01-25</div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-blue-600"><BiEditAlt/> Edit <br/> <RiDeleteBin5Line/> Delete</div>
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

export default TransactionCurrency;
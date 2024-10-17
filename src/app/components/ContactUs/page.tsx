/* eslint-disable react/display-name */
"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const card2 = [
    {
      title: "Project Request",
      header: "Mail us your requirements to get a free quote",
      email: "24techtonic@gmail.com",
      number: [{ country: "Pakistan", phone: "+92 301 5522240" }],
    },
    {
      title: "Apply for Job",
      header: "Become a Problem Solver by Joining Our Team",
      email: "agha.abdulqadirbusiness@gmail.com",
      number: [{ country: "Pakistan", phone: "+92 315 2942127" }],
    },
  ];

  return (
    <div className="flex flex-col bg-[#EFEAE3] lg:flex-row gap-4">
      <form className="flex-2 mx-3 lg:mx-12 max-w-3xl md:mx-auto bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-20 mt-20">
        <h1 className="text-5xl font-bold mb-10">
          Request for Project Proposal
        </h1>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="companyName"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Company Name"
              className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="mobileNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              id="mobileNumber"
              type="text"
              placeholder="Phone Number"
              className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              pattern="\d*"
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="budget"
            className="block text-gray-700 font-bold mb-2"
          >
            Select Budget
          </label>
          <select
            id="budget"
            className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-4 px-3 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Budget</option>
            <option value="Less Than $5000">Less Than $5000</option>
            <option value="$5000 to $10000">$5000 to $10000</option>
            <option value="$10000 to $50000">$10000 to $50000</option>
            <option value="$50000+">$50000+</option>
          </select>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {[
            "Web App",
            "Mobile App",
            "UI/UX",
            "IT Consulting",
            "DevOps",
            "AR/VR",
            "Internet of Things",
            "Hire Dedicated Developers",
            "Others",
          ].map((category) => (
            <div
              key={category}
              className="box bg-white p-4 m-2 text-center rounded-xl cursor-pointer shadow-md hover:shadow-lg hover:shadow-orange-200 hover:transition-shadow duration-600 border"
            >
              {category}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-[#12a6e6] text-white py-4 rounded-xl text-lg font-bold"
          >
            Submit Request
          </button>
        </div>
      </form>

      <div className="flex flex-1 gap-10 flex-col justify-center items-center mx-3">
        {card2.map((item, index) => (
          <div
            key={index}
            className="p-6 md:w-[30rem] w-full bg-[#f7f7f7] m-4 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-lg mb-2">{item.header}</p>
            <a
              href={`mailto:${item.email}`}
              className="flex items-center text-lg text-blue-500"
            >
              <FaEnvelope className="text-blue-600 mr-2" size={15} />
              {item.email}
            </a>
            <br />
            <div className="grid grid-cols-1 text-lg mb-2 text-blue-500">
              {item.number.map((num, i) => (
                <a
                  key={i}
                  href={`tel:${num.phone}`}
                  className="flex items-center mb-2"
                >
                  <FaPhoneAlt className="text-blue-600 mr-2" size={15} />
                  <span>{num.phone}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

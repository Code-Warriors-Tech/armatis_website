'use client'
import { serviceTabs } from "@/constant/data";
import { useState } from "react";

const DomainTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services at AMARITS Consulting</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            We deliver expert solutions in Information Technology and the organization of technical and scientific events to help you achieve impactful results.
            </p>
        </div>
        <div className="mb-6 flex justify-center gap-4">
            {serviceTabs.map((tab, index) => (
            <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                index === activeTab
                    ? "bg-[#ED1969] text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
            >
                {tab.label}
            </button>
            ))}
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {serviceTabs[activeTab].services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DomainTabs;

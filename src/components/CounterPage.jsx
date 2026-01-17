import React, { useEffect, useState } from "react";
import { FaUsers, FaHandshake, FaBuilding, FaCheckCircle } from "react-icons/fa";

const CounterPage = () => {
  const [counts, setCounts] = useState({
    agents: 0,
    customers: 0,
    projects: 0,
    sales: 0,
  });

  useEffect(() => {
    const target = {
      agents: 50,
      customers: 1200,
      projects: 85,
      sales: 430,
    };

    const interval = setInterval(() => {
      setCounts((prev) => {
        let updated = { ...prev };
        let finished = true;

        Object.keys(target).forEach((key) => {
          if (prev[key] < target[key]) {
            updated[key] += Math.ceil(target[key] / 80);
            finished = false;
          }
        });

        if (finished) clearInterval(interval);
        return updated;
      });
    }, 40);
  }, []);

  return (
    <section
      className="relative w-full bg-cover bg-center py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=60')",
      }}
    >
      {/* Overlay Blur for better visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-4xl mb-2 text-blue-400" />
          <h2 className="text-4xl font-bold">{counts.agents}+</h2>
          <p className="text-lg font-medium">Total Agents</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <FaHandshake className="text-4xl mb-2 text-green-400" />
          <h2 className="text-4xl font-bold">{counts.customers}+</h2>
          <p className="text-lg font-medium">Happy Customers</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <FaBuilding className="text-4xl mb-2 text-yellow-400" />
          <h2 className="text-4xl font-bold">{counts.projects}+</h2>
          <p className="text-lg font-medium">Total Projects</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-4xl mb-2 text-purple-400" />
          <h2 className="text-4xl font-bold">{counts.sales}+</h2>
          <p className="text-lg font-medium">Properties Sold</p>
        </div>

      </div>
    </section>
  );
};

export default CounterPage;

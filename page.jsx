"use client";
import React, { useState } from 'react';
import Interaction from '../tabs/Interaction';
import History from '../tabs/History';
import Script from '../tabs/Script';
import Connector from '../tabs/connector';
import AgentAssist from '../tabs/AgentAssist';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Interaction');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Interaction':
        return <Interaction />;
      case 'History':
        return <History />;
      case 'Script':
        return <Script />;
      case 'Connector':
        return <Connector />;
      case 'AgentAssist':
        return <AgentAssist />;
      default:
        return <Interaction />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for Current Call */}
      <div className="w-1/4 p-6 bg-white shadow-lg border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Current Call</h2>
        {/* Add ConversationTranscript here if needed */}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 bg-white shadow-lg">
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to My Custom Dashboard!
        </h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-4 border-b pb-2">
          {['Interaction', 'History', 'Script', 'Connector', 'AgentAssist'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-t-md ${
                activeTab === tab ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// // import React from "react";

// // function CoordinatorDashboard() {
// //   return <div className="p-8">Welcome to the Coordinator Dashboard!</div>;
// // }

// // export default CoordinatorDashboard;

// import {
//   AlertCircle,
//   Bell,
//   Briefcase,
//   CheckCircle,
//   ChevronRight,
//   FileText,
//   LogOut,
//   Star,
//   Users,
//   XCircle
// } from "lucide-react";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function CoordinatorDashboard() {
//   const navigate = useNavigate();

//   const menuItems = [
//     { name: "Students", icon: <Users size={20} />, path: "/coordinator/students" },
//     { name: "Internship Opportunities", icon: <Briefcase size={20} />, path: "/coordinator/opportunities" },
//     { name: "Reports", icon: <FileText size={20} />, path: "/coordinator/reports" },
//     { name: "Notifications", icon: <Bell size={20} />, path: "/coordinator/notifications", badge: 5 },
//   ];

//   const internshipStatusData = [
//     { 
//       title: "Active Interns",
//       count: "45",
//       detail: "Currently placed",
//       icon: <Users size={24} />,
//       color: "bg-blue-500"
//     },
//     { 
//       title: "Pending Placements",
//       count: "12",
//       detail: "Awaiting placement",
//       icon: <AlertCircle size={24} />,
//       color: "bg-yellow-500"
//     },
//     { 
//       title: "Completed",
//       count: "28",
//       detail: "This semester",
//       icon: <CheckCircle size={24} />,
//       color: "bg-green-500"
//     }
//   ];

//   const pendingApprovals = [
//     {
//       studentName: "Sarah Johnson",
//       company: "TechCorp",
//       position: "Frontend Developer",
//       status: "Pending Review",
//       date: "2024-03-15"
//     },
//     {
//       studentName: "Michael Smith",
//       company: "DataSys Inc",
//       position: "Data Analyst",
//       status: "Pending Review",
//       date: "2024-03-14"
//     },
//     {
//       studentName: "Emily Brown",
//       company: "InnovateHub",
//       position: "UX Designer",
//       status: "Pending Review",
//       date: "2024-03-13"
//     }
//   ];

//   const topPerformers = [
//     {
//       name: "John Davis",
//       company: "TechCorp",
//       rating: 4.9,
//       feedback: "Exceptional problem-solving skills"
//     },
//     {
//       name: "Lisa Wang",
//       company: "InnovateHub",
//       rating: 4.8,
//       feedback: "Outstanding team player"
//     },
//     {
//       name: "Alex Martinez",
//       company: "DataSys Inc",
//       rating: 4.7,
//       feedback: "Excellent technical abilities"
//     }
//   ];

//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg">
//         <div className="flex items-center justify-center h-16 border-b">
//           <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
//         </div>
//         <nav className="mt-6">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//             >
//               <div className="flex items-center">
//                 <span className="text-gray-500">{item.icon}</span>
//                 <span className="ml-3">{item.name}</span>
//               </div>
//               {item.badge && (
//                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                   {item.badge}
//                 </span>
//               )}
//               <ChevronRight size={16} className="text-gray-400" />
//             </Link>
//           ))}
//           <button
//             onClick={handleLogout}
//             className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
//           >
//             <LogOut size={20} />
//             <span className="ml-3">Logout</span>
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <div className="p-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Coordinator Overview</h2>
          
//           {/* Internship Status Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {internshipStatusData.map((card, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className={`p-3 rounded-full ${card.color} bg-opacity-10`}>
//                       <div className={`text-${card.color.split('-')[1]}-500`}>
//                         {card.icon}
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-medium text-gray-600">{card.title}</p>
//                       <p className="text-2xl font-bold text-gray-900 mt-1">{card.count}</p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-500">{card.detail}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Applications Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//             {/* Pending Approvals */}
//             <div className="bg-white rounded-lg shadow-md">
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Approvals</h3>
//                 <div className="space-y-4">
//                   {pendingApprovals.map((approval, index) => (
//                     <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                       <div className="flex-1">
//                         <p className="font-medium text-gray-900">{approval.studentName}</p>
//                         <p className="text-sm text-gray-500">{approval.company} - {approval.position}</p>
//                         <p className="text-xs text-gray-400">Applied: {approval.date}</p>
//                       </div>
//                       <div className="flex space-x-2">
//                         <button className="p-2 text-green-500 hover:bg-green-50 rounded-full">
//                           <CheckCircle size={20} />
//                         </button>
//                         <button className="p-2 text-red-500 hover:bg-red-50 rounded-full">
//                           <XCircle size={20} />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Student Performance */}
//             <div className="bg-white rounded-lg shadow-md">
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Students</h3>
//                 <div className="space-y-4">
//                   {topPerformers.map((student, index) => (
//                     <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                       <div className="flex items-center justify-between mb-2">
//                         <p className="font-medium text-gray-900">{student.name}</p>
//                         <div className="flex items-center text-yellow-500">
//                           <Star size={16} className="fill-current" />
//                           <span className="ml-1 text-sm">{student.rating}</span>
//                         </div>
//                       </div>
//                       <p className="text-sm text-gray-500">{student.company}</p>
//                       <p className="text-sm text-gray-600 mt-1">{student.feedback}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Performance Trends */}
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800">Overall Performance Metrics</h3>
//                 <select className="text-sm border rounded-md p-2">
//                   <option>This Month</option>
//                   <option>Last 3 Months</option>
//                   <option>This Year</option>
//                 </select>
//               </div>
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div className="p-4 bg-green-50 rounded-lg">
//                   <p className="text-green-600 font-bold text-2xl">92%</p>
//                   <p className="text-sm text-gray-600">Placement Rate</p>
//                 </div>
//                 <div className="p-4 bg-blue-50 rounded-lg">
//                   <p className="text-blue-600 font-bold text-2xl">4.7</p>
//                   <p className="text-sm text-gray-600">Avg. Performance</p>
//                 </div>
//                 <div className="p-4 bg-purple-50 rounded-lg">
//                   <p className="text-purple-600 font-bold text-2xl">87%</p>
//                   <p className="text-sm text-gray-600">Retention Rate</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CoordinatorDashboard;

import {
  AlertCircle,
  Bell,
  Briefcase,
  CheckCircle,
  ChevronRight,
  FileText,
  LogOut,
  Menu,
  Star,
  Users,
  X,
  XCircle
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CoordinatorDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Students", icon: <Users size={20} />, path: "/coordinator/students" },
    { name: "Internship Opportunities", icon: <Briefcase size={20} />, path: "/coordinator/opportunities" },
    { name: "Reports", icon: <FileText size={20} />, path: "/coordinator/reports" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/coordinator/notifications", badge: 5 },
  ];

  const internshipStatusData = [
    { 
      title: "Active Interns",
      count: "45",
      detail: "Currently placed",
      icon: <Users size={24} />,
      color: "bg-blue-500"
    },
    { 
      title: "Pending Placements",
      count: "12",
      detail: "Awaiting placement",
      icon: <AlertCircle size={24} />,
      color: "bg-yellow-500"
    },
    { 
      title: "Completed",
      count: "28",
      detail: "This semester",
      icon: <CheckCircle size={24} />,
      color: "bg-green-500"
    }
  ];

  const pendingApprovals = [
    {
      studentName: "Sarah Johnson",
      company: "TechCorp",
      position: "Frontend Developer",
      status: "Pending Review",
      date: "2024-03-15"
    },
    {
      studentName: "Michael Smith",
      company: "DataSys Inc",
      position: "Data Analyst",
      status: "Pending Review",
      date: "2024-03-14"
    },
    {
      studentName: "Emily Brown",
      company: "InnovateHub",
      position: "UX Designer",
      status: "Pending Review",
      date: "2024-03-13"
    }
  ];

  const topPerformers = [
    {
      name: "John Davis",
      company: "TechCorp",
      rating: 4.9,
      feedback: "Exceptional problem-solving skills"
    },
    {
      name: "Lisa Wang",
      company: "InnovateHub",
      rating: 4.8,
      feedback: "Outstanding team player"
    },
    {
      name: "Alex Martinez",
      company: "DataSys Inc",
      rating: 4.7,
      feedback: "Excellent technical abilities"
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:hidden z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
        <div className="w-8" /> {/* Placeholder for balance */}
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
        w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out
      `}>
        <div className="flex items-center justify-between h-16 border-b px-6">
          <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="flex items-center">
                <span className="text-gray-500">{item.icon}</span>
                <span className="ml-3">{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          >
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Coordinator Overview</h2>
          
          {/* Internship Status Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            {internshipStatusData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${card.color} bg-opacity-10`}>
                      <div className={`text-${card.color.split('-')[1]}-500`}>
                        {card.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-600">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{card.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-6">
            {/* Pending Approvals */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Approvals</h3>
                <div className="space-y-4">
                  {pendingApprovals.map((approval, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{approval.studentName}</p>
                        <p className="text-sm text-gray-500">{approval.company} - {approval.position}</p>
                        <p className="text-xs text-gray-400">Applied: {approval.date}</p>
                      </div>
                      <div className="flex space-x-2 self-end sm:self-center">
                        <button className="p-2 text-green-500 hover:bg-green-50 rounded-full">
                          <CheckCircle size={20} />
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                          <XCircle size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Student Performance */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Students</h3>
                <div className="space-y-4">
                  {topPerformers.map((student, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">{student.name}</p>
                        <div className="flex items-center text-yellow-500">
                          <Star size={16} className="fill-current" />
                          <span className="ml-1 text-sm">{student.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{student.company}</p>
                      <p className="text-sm text-gray-600 mt-1">{student.feedback}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trends */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Overall Performance Metrics</h3>
                <select className="text-sm border rounded-md p-2">
                  <option>This Month</option>
                  <option>Last 3 Months</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-green-600 font-bold text-2xl">92%</p>
                  <p className="text-sm text-gray-600">Placement Rate</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-600 font-bold text-2xl">4.7</p>
                  <p className="text-sm text-gray-600">Avg. Performance</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-purple-600 font-bold text-2xl">87%</p>
                  <p className="text-sm text-gray-600">Retention Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoordinatorDashboard;

// import {
//   AlertCircle,
//   Bell,
//   Briefcase,
//   CheckCircle,
//   ChevronRight,
//   FileText,
//   LogOut,
//   Menu,
//   Star,
//   Users,
//   X,
//   XCircle
// } from "lucide-react";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Line, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale, 
//   LinearScale, 
//   PointElement, 
//   LineElement, 
//   Title, 
//   Tooltip, 
//   Legend, 
//   ArcElement
// );

// function CoordinatorDashboard() {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const menuItems = [
//     { name: "Students", icon: <Users size={20} />, path: "/coordinator/students" },
//     { name: "Internship Opportunities", icon: <Briefcase size={20} />, path: "/coordinator/opportunities" },
//     { name: "Reports", icon: <FileText size={20} />, path: "/coordinator/reports" },
//     { name: "Notifications", icon: <Bell size={20} />, path: "/coordinator/notifications", badge: 5 },
//   ];

//   const internshipStatusData = [
//     { 
//       title: "Active Interns",
//       count: "45",
//       detail: "Currently placed",
//       icon: <Users size={24} />,
//       color: "bg-blue-500"
//     },
//     { 
//       title: "Pending Placements",
//       count: "12",
//       detail: "Awaiting placement",
//       icon: <AlertCircle size={24} />,
//       color: "bg-yellow-500"
//     },
//     { 
//       title: "Completed",
//       count: "28",
//       detail: "This semester",
//       icon: <CheckCircle size={24} />,
//       color: "bg-green-500"
//     }
//   ];

//   const pendingApprovals = [
//     {
//       studentName: "Sarah Johnson",
//       company: "TechCorp",
//       position: "Frontend Developer",
//       status: "Pending Review",
//       date: "2024-03-15"
//     },
//     {
//       studentName: "Michael Smith",
//       company: "DataSys Inc",
//       position: "Data Analyst",
//       status: "Pending Review",
//       date: "2024-03-14"
//     },
//     {
//       studentName: "Emily Brown",
//       company: "InnovateHub",
//       position: "UX Designer",
//       status: "Pending Review",
//       date: "2024-03-13"
//     }
//   ];

//   const topPerformers = [
//     {
//       name: "John Davis",
//       company: "TechCorp",
//       rating: 4.9,
//       feedback: "Exceptional problem-solving skills"
//     },
//     {
//       name: "Lisa Wang",
//       company: "InnovateHub",
//       rating: 4.8,
//       feedback: "Outstanding team player"
//     },
//     {
//       name: "Alex Martinez",
//       company: "DataSys Inc",
//       rating: 4.7,
//       feedback: "Excellent technical abilities"
//     }
//   ];

//   const handleLogout = () => {
//     navigate("/");
//   };

//   // Chart data
//   const chartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Internship Placements',
//         data: [30, 40, 35, 50, 45, 60],
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: true,
//         tension: 0.1,
//       },
//     ],
//   };

//   // Pie chart data for Performance
//   const performanceData = {
//     labels: ['Excellent', 'Good', 'Needs Improvement'],
//     datasets: [
//       {
//         data: [50, 30, 20],
//         backgroundColor: ['#4CAF50', '#FFEB3B', '#FF5722'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Pie chart data for Interns
//   const internData = {
//     labels: ['Active', 'Pending', 'Completed'],
//     datasets: [
//       {
//         data: [45, 12, 28],
//         backgroundColor: ['#2196F3', '#FFEB3B', '#4CAF50'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Mobile Sidebar Overlay */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Mobile Header */}
//       <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:hidden z-30">
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
//         >
//           <Menu size={24} />
//         </button>
//         <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
//         <div className="w-8" /> {/* Placeholder for balance */}
//       </div>

//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}>
//         <div className="flex items-center justify-between h-16 border-b px-6">
//           <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
//           <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 lg:hidden">
//             <X size={20} />
//           </button>
//         </div>
//         <nav className="mt-6">
//           {menuItems.map((item, index) => (
//             <Link key={index} to={item.path} className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200" onClick={() => setSidebarOpen(false)}>
//               <div className="flex items-center">
//                 <span className="text-gray-500">{item.icon}</span>
//                 <span className="ml-3">{item.name}</span>
//               </div>
//               {item.badge && (
//                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                   {item.badge}
//                 </span>
//               )}
//               <ChevronRight size={16} className="text-gray-400" />
//             </Link>
//           ))}
//           <button onClick={handleLogout} className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
//             <LogOut size={20} />
//             <span className="ml-3">Logout</span>
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto pt-16 lg:pt-0">
//         <div className="p-4 md:p-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Coordinator Overview</h2>

//           {/* Internship Status Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
//             {internshipStatusData.map((card, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
//                 <div className="p-4 md:p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className={`p-3 rounded-full ${card.color} bg-opacity-10`}>
//                       <div className={`text-${card.color.split('-')[1]}-500`}>
//                         {card.icon}
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-medium text-gray-600">{card.title}</p>
//                       <p className="text-2xl font-semibold text-gray-800">{card.count}</p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-500">{card.detail}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pending Approvals */}
//           <div className="bg-white rounded-lg shadow-md mb-6">
//             <div className="p-4 md:p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Approvals</h3>
//               <div className="space-y-4">
//                 {pendingApprovals.map((approval, index) => (
//                   <div key={index} className="flex items-center justify-between py-4 border-b last:border-b-0">
//                     <div className="flex items-center">
//                       <span className="font-medium text-gray-800">{approval.studentName}</span>
//                       <span className="ml-2 text-gray-500">for {approval.position} at {approval.company}</span>
//                     </div>
//                     <span className={`text-sm font-semibold ${approval.status === "Pending Review" ? 'text-yellow-500' : 'text-gray-500'}`}>
//                       {approval.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Top Performers */}
//           <div className="bg-white rounded-lg shadow-md mb-6">
//             <div className="p-4 md:p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performers</h3>
//               <div className="space-y-4">
//                 {topPerformers.map((performer, index) => (
//                   <div key={index} className="flex items-center justify-between py-4 border-b last:border-b-0">
//                     <div>
//                       <span className="font-medium text-gray-800">{performer.name}</span>
//                       <span className="ml-2 text-gray-500">{performer.company}</span>
//                     </div>
//                     <div className="text-right">
//                       <span className="font-semibold text-gray-900">{performer.rating}</span>
//                       <p className="text-sm text-gray-500 mt-1">{performer.feedback}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Performance Pie Chart */}
//           <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h3>
//             <div className="h-48 w-48 mx-auto">
//               <Pie data={performanceData} />
//             </div>
//           </div>

//           {/* Intern Pie Chart */}
//           <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Intern Status Overview</h3>
//             <div className="h-48 w-48 mx-auto">
//               <Pie data={internData} />
//             </div>
//           </div>

//           {/* Chart Section */}
//           <div className="bg-white rounded-lg shadow-md p-6 mt-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Internship Placements Overview</h3>
//             <div className="h-64">
//               <Line data={chartData} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CoordinatorDashboard;
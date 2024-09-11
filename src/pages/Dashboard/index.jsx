// import React, { useState, useEffect } from 'react';
// import { Menu, MenuItem, IconButton } from '@mui/material';
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { BsSearch, BsArrowUpRightSquare } from 'react-icons/bs';
// import Chart from 'chart.js/auto';
// import p2 from './assets/images/p2.png'; 
// import p3 from './assets/images/p3.png'; 
// import p1 from './assets/images/p1.png'; 
// import p4 from './assets/images/p4.png';

// const AdminPage = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleUserIconClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (path) => {
//     setAnchorEl(null);
//     if (path) {
//       if (path === '/') {
//         localStorage.removeItem('token');
//       }
//       navigate(path);
//     }
//   };

//   useEffect(() => {
//     const ctx = document.getElementById('revenueChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14'],
//         datasets: [{
//           label: 'Revenue',
//           data: [30000, 35000, 32000, 42000, 50000, 48000, 47000, 52000],
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 2,
//           pointBackgroundColor: 'rgba(75, 192, 192, 1)',
//           pointBorderColor: 'rgba(75, 192, 192, 1)',
//           pointHoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//           pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
//         }],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             grid: {
//               color: 'rgba(200, 200, 200, 0.2)',
//             },
//           },
//           x: {
//             grid: {
//               color: 'rgba(200, 200, 200, 0.2)',
//             },
//           },
//         },
//         elements: {
//           point: {
//             radius: 4,
//             hoverRadius: 6,
//           },
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     });

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (searchTerm.toLowerCase() === 'dashboard') {
//       navigate('/Admin');
//     } else if (searchTerm.toLowerCase() === 'property list') {
//       navigate('/propertylist');
//     } else if (searchTerm.toLowerCase() === 'city list') {
//       navigate('/citylist');
//     } else if (searchTerm.toLowerCase() === 'user') {
//       navigate('/list');
//     } else if (searchTerm.toLowerCase() === 'notification') {
//       navigate('/notification');
//     } else if (searchTerm.toLowerCase() === 'inquiry') {
//       navigate('/inquiry');
//     } else {
//       alert('Page not found');
//     }
//   };

//   const filteredOrders = [
//     { property: 'Barhat Blue', date: 'Jul 15, 2024', price: '$359.90', customer: 'M-Starlight', status: 'Received' },
//     { property: 'Soft Ginger', date: 'Jul 16, 2024', price: '$420.78', customer: 'Serene W', status: 'Received' },
//     // Add more orders as needed
//   ].filter(order => 
//     order.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.status.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const topProperties = [
//     { name: 'Emerald Velvet', price: '$355.90', image: p2 },
//     { name: 'Velvet Coral', price: '$279.00', image: p3 },
//     { name: 'Rotterdam', price: '$329.95', image: p1 },
//     { name: 'Happy Yellow', price: '$315.50', image: p4 },
//     // Add more properties as needed
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-gray-300 p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-semibold text-black">Welcome To The Admin Page</h1>
//           <IconButton
//             aria-controls="user-menu"
//             aria-haspopup="true"
//             onClick={handleUserIconClick}
//           >
//             <FaUserCircle size={32} className="text-black" />
//           </IconButton>
//           <Menu
//             id="user-menu"
//             anchorEl={anchorEl}
//             keepMounted
//             open={Boolean(anchorEl)}
//             onClose={() => handleMenuClose(null)}
//           >
//             <MenuItem onClick={() => handleMenuClose('/profile')}>Profile</MenuItem>
//             <MenuItem onClick={() => handleMenuClose('/')}>Logout</MenuItem>
//             <MenuItem onClick={() => handleMenuClose('/change-password')}>Change Password</MenuItem>
//           </Menu>
//         </div>

//         <div className="bg-[#1a303d] p-4 rounded-lg mb-3 custom-text-color">
//           <div className="flex justify-between items-center mb-4">
//             <div className="relative w-full">
//               <div className="bg-gray-100 p-3 rounded-lg flex items-center mt-2 w-full">
//                 <div className="flex items-center w-full">
//                   <form onSubmit={handleSearch} className="flex w-full">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchTerm}
//                       onChange={handleSearchChange}
//                       className="border rounded-lg p-2 bg-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-light-blue-500"
//                     />
//                     <button type="submit" className="bg-gray-200 rounded-lg flex items-center justify-center p-2 ml-2">
//                       <BsSearch className="text-gray-600 cursor-pointer size-5 mr-3 ml-3" />
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="bg-gradient-to-r from-white to-dark-blue p-4 rounded-lg shadow-lg col-span-1 lg:col-span-2 flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Total Revenue</h2>
//             <p className="text-2xl font-semibold text-gray-800 mb-4">$17,086.92</p>
//             <div className="flex-1 relative">
//               <canvas id="revenueChart" className="w-full h-full"></canvas>
//             </div>
//           </div>
//           <div className="bg-gradient-to-r from-white to-sky p-3 rounded-lg shadow-lg col-span-1 flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Top Property</h2>
//             <ul className="flex-1 overflow-auto">
//               {topProperties.map((property, index) => (
//                 <li key={index} className="bg-gray-300 text-black rounded-lg p-4 mb-2 flex items-center space-x-4">
//                   <img src={property.image} alt={property.name} className="w-12 h-12 rounded-full" />
//                   <div>
//                     <p className="font-semibold">{property.name}</p>
//                     <p className="text-sm">{property.price}</p>
//                   </div>
//                   <BsArrowUpRightSquare size={24} className="text-gray-600" />
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-gradient-to-r from-white to-dark-blue p-3 rounded-lg shadow-lg col-span-1 flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Traffic</h2>
//             <p className="text-2xl font-semibold text-gray-800 mb-4">231,809</p>
//             <div className="flex-1">
//               <canvas id="trafficChart" className="w-full h-full"></canvas>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
//           <div className="bg-gradient-to-r from-white to-sky p-3 rounded-lg shadow-lg flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Product Sold</h2>
//             <p className="text-2xl font-semibold text-gray-800 mb-4">329</p>
//           </div>
//           <div className="bg-gradient-to-r from-white to-dark-blue p-3 rounded-lg shadow-lg flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Total Income</h2>
//             <p className="text-2xl font-semibold text-gray-800 mb-4">$24,329.49</p>
//           </div>
//         </div>

//         <div className="bg-[#1a303d] p-4 rounded-lg mt-3">
//           <h2 className="text-xl font-bold mb-2 custom-text-color">Recent Orders</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
//                   <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                   <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
//                   <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredOrders.map((order, index) => (
//                   <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap">{order.property}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminPage;

// import React, { useState, useEffect } from 'react';
// import { Menu, MenuItem, IconButton } from '@mui/material';
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { BsSearch, BsArrowUpRightSquare } from 'react-icons/bs';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import p2 from './assets/images/p2.png'; 
// import p3 from './assets/images/p3.png'; 
// import p1 from './assets/images/p1.png'; 
// import p4 from './assets/images/p4.png';

// const AdminPage = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();
//   const circleRadius = 50; // Radius of the circle
//   const strokeWidth = 10;  // Width of the stroke
//   const circleCircumference = 2 * Math.PI * circleRadius;
//   const [inventoryCount, setInventoryCount] = useState(0);
//   const [error, setError] = useState('');
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleUserIconClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (path) => {
//     setAnchorEl(null);
//     if (path) {
//       if (path === '/') {
//         localStorage.removeItem('token');
//       }
//       navigate(path);
//     }
//   };

//   useEffect(() => {
//     const ctx = document.getElementById('revenueChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14'],
//         datasets: [{
//           label: 'Revenue',
//           data: [30000, 35000, 32000, 42000, 50000, 48000, 47000, 52000],
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 2,
//           pointBackgroundColor: 'rgba(75, 192, 192, 1)',
//           pointBorderColor: 'rgba(75, 192, 192, 1)',
//           pointHoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//           pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
//         }],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             grid: {
//               color: 'rgba(200, 200, 200, 0.2)',
//             },
//           },
//           x: {
//             grid: {
//               color: 'rgba(200, 200, 200, 0.2)',
//             },
//           },
//         },
//         elements: {
//           point: {
//             radius: 4,
//             hoverRadius: 6,
//           },
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     });

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (searchTerm.toLowerCase() === 'dashboard') {
//       navigate('/');
//     } else if (searchTerm.toLowerCase() === 'propertylist') {
//       navigate('/propertylist');
//     } else if (searchTerm.toLowerCase() === 'property') {
//       navigate('/propertylist1');  
//     } else if (searchTerm.toLowerCase() === 'citylist') {
//       navigate('/citylist');
//     } else if (searchTerm.toLowerCase() === 'user') {
//       navigate('/list');
//     } else if (searchTerm.toLowerCase() === 'notification') {
//       navigate('/notification');
//     } else if (searchTerm.toLowerCase() === 'inquiry') {
//       navigate('/inquiry');
//     } else {
//       alert('Page not found');
//     }
//   };

//   const handleInventoryBoxClick = () => {
//     navigate('/cardlist'); // Change '/inventory' to the desired path
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         console.error('No token found');
//         setError('No token found');
//         return;
//     }

//     try {
//         const response = await axios.get('http://localhost:8000/api/topproperty/', {
//             headers: {
//                 Authorization: `Token ${token}`,
//             },
//         });
//         setProperties(response.data);
//         setInventoryCount(response.data.length); // Update inventory count
//     } catch (error) {
//         console.error('There was an error fetching the properties!', error);
//         setError('There was an error fetching the properties');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="bg-blue-500 p-4 flex justify-between items-center">
//         <h1 className="text-white text-2xl">Admin Dashboard</h1>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="px-4 py-2 rounded-full"
//           />
//           <button onClick={handleSearch} className="absolute right-2 top-2 text-gray-500">
//             <BsSearch />
//           </button>
//         </div>
//         <IconButton onClick={handleUserIconClick} color="inherit">
//           <FaUserCircle className="text-white" />
//         </IconButton>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(null)}>
//           <MenuItem onClick={() => handleMenuClose('/profile')}>Profile</MenuItem>
//           <MenuItem onClick={() => handleMenuClose('/changepassword')}>Change Password</MenuItem>
//           <MenuItem onClick={() => handleMenuClose('/')}>Logout</MenuItem>
//         </Menu>
//       </div>
//       <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//           <div>
//             <h2 className="text-lg font-semibold">Total Revenue</h2>
//             <p className="text-2xl">$52,000</p>
//           </div>
//           <BsArrowUpRightSquare className="text-blue-500 text-4xl" />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Top Products</h2>
//           <div className="relative h-40">
//             <canvas id="revenueChart"></canvas>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Traffic</h2>
//           <div className="relative h-40">
//             <canvas id="revenueChart"></canvas>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Product Sold</h2>
//           <p className="text-2xl">3,200</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Total Income</h2>
//           <p className="text-2xl">$85,000</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Recent Orders</h2>
//           <ul>
//             <li>Order #1234</li>
//             <li>Order #1235</li>
//             <li>Order #1236</li>
//           </ul>
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold">Property Inventory</h2>
//           <div className="flex items-center justify-between mb-4">
//             <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//               <p className="text-lg font-semibold">Inventory Count</p>
//               <p className="text-2xl">{inventoryCount}</p>
//             </div>
//             <button
//               onClick={handleInventoryBoxClick}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Manage Properties
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
//             {properties.map(property => (
//               <div key={property._id} className="bg-white p-4 rounded-lg shadow-md">
//                 <img
//                   src={p1}
//                   alt="Property"
//                   className="w-full h-40 object-cover rounded-md mb-2"
//                 />
//                 <h3 className="text-lg font-semibold">{property.property_name}</h3>
//                 <p className="text-gray-500">{property.property_price}</p>
//                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Chart from 'chart.js/auto';
import p2 from './assets/images/p2.png'; 
import p3 from './assets/images/p3.png'; 
import p1 from './assets/images/p1.png'; 
import p4 from './assets/images/p4.png';
import axios from 'axios';

const AdminPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [inventoryCount, setInventoryCount] = useState(0);
  const [error, setError] = useState('');
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const circleRadius = 50; // Radius of the circle
  const strokeWidth = 10;  // Width of the stroke
  const circleCircumference = 2 * Math.PI * circleRadius;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) {
      if (path === '/') {
        localStorage.removeItem('token');
      }
      navigate(path);
    }
  };

  useEffect(() => {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14'],
        datasets: [{
          label: 'Revenue',
          data: [30000, 35000, 32000, 42000, 50000, 48000, 47000, 52000],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(200, 200, 200, 0.2)',
            },
          },
          x: {
            grid: {
              color: 'rgba(200, 200, 200, 0.2)',
            },
          },
        },
        elements: {
          point: {
            radius: 4,
            hoverRadius: 6,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.toLowerCase() === 'dashboard') {
      navigate('/');
    } else if (searchTerm.toLowerCase() === 'propertylist') {
      navigate('/propertylist');
    } else if (searchTerm.toLowerCase() === 'property') {
      navigate('/propertylist1');  
    } else if (searchTerm.toLowerCase() === 'citylist') {
      navigate('/citylist');
    } else if (searchTerm.toLowerCase() === 'user') {
      navigate('/list');
    } else if (searchTerm.toLowerCase() === 'notification') {
      navigate('/notification');
    } else if (searchTerm.toLowerCase() === 'inquiry') {
      navigate('/inquiry');
    } else {
      alert('Page not found');
    }
  };

  const filteredOrders = [
    { property: 'Barhat Blue', date: 'Jul 15, 2024', price: '$359.90', customer: 'M-Starlight', status: 'Received' },
    { property: 'Soft Ginger', date: 'Jul 16, 2024', price: '$420.78', customer: 'Serene W', status: 'Received' },
    // Add more orders as needed
  ].filter(order => 
    order.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topProperties = [
    { name: 'Emerald Velvet', price: '$355.90', image: p2 },
    { name: 'Velvet Coral', price: '$279.00', image: p3 },
    { name: 'Rotterdam', price: '$329.95', image: p1 },
    { name: 'Happy Yellow', price: '$315.50', image: p4 },
    // Add more properties as needed
  ];

  const handleInventoryBoxClick = () => {
    navigate('/cardlist'); // Change '/inventory' to the desired path
  };

  useEffect(() => {
    fetchProperties();
  }, []);
  

  const fetchProperties = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No token found');
        setError('No token found');
        return;
    }

    try {
        const response = await axios.get('http://localhost:8000/api/topproperty/', {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        setProperties(response.data);
        setInventoryCount(response.data.length); // Update inventory count
    } catch (error) {
        console.error('There was an error fetching the properties!', error);
        setError('There was an error fetching the properties');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-gray-700 p-4 flex justify-between items-center">
          <h1 className="text-white text-2xl">Admin Dashboard</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-full"
            />
            <button onClick={handleSearch} className="absolute right-2 top-2 text-gray-500">
              <BsSearch />
            </button>
          </div>
          <IconButton onClick={handleUserIconClick} color="inherit">
            <FaUserCircle className="text-white" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(null)}>
            <MenuItem onClick={() => handleMenuClose('/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => handleMenuClose('/change-password')}>Change Password</MenuItem>
            <MenuItem onClick={() => handleMenuClose('/')}>Logout</MenuItem>
          </Menu>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <div className="bg-gradient-to-r from-white to-dark-blue p-4 rounded-lg shadow-lg lg:col-span-2 flex flex-col">
            <h2 className="text-xl font-bold mb-2">Total Revenue</h2>
            <p className="text-2xl font-semibold text-gray-800 mb-4">$17,086.92</p>
            <div className="flex-1 relative">
              <canvas id="revenueChart" className="w-full h-full"></canvas>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white to-sky p-3 rounded-lg shadow-lg lg:col-span-1 flex flex-col">
            <h2 className="text-xl font-bold mb-2">Top Property</h2>
            <ul className="flex-1 overflow-auto">
              {topProperties.map((property, index) => (
                <li key={index} className="bg-gray-300 text-black rounded-lg p-4 mb-2 flex items-center space-x-4">
                  <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{property.name}</h3>
                    <p className="text-sm text-gray-600">{property.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1a303d] p-4 rounded-lg shadow-lg cursor-pointer" onClick={handleInventoryBoxClick}>
            <h2 className="text-xl text-gray-100 font-bold mb-2">Property Inventory</h2>
            <p className="text-green-500">Total Properties: {inventoryCount}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Product Sold</h2>
            <p className="text-gray-600">Data...</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Total Income</h2>
            <p className="text-gray-600">Data...</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Recent Orders</h2>
            <p className="text-gray-600">Data...</p>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-500 text-white">
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPage;








// import React, { useState } from 'react';
// import axios from 'axios';

// const PropertyCardAddForm = ({ onAddProperty }) => {
//     const [formData, setFormData] = useState({
//         user_id: '',
//         property_category_type: '',
//         property_owner_type: '',
//         address: '',
//         city_name: '',
//         property_type: '',
//         property_name: '',
//         property_price : '',
//         safety_deposit: '',
//         property_description: '',
//         latitude: '',
//         longitude: '',
//         available_on_date: '',
//         expiry_date: '',
//         property_added_date: '',
//         bhk_type: '',
//         area_sq: '',
//         units: '',
//         available_status: '',
//         active_status: '',
//         cover_image: '',
//         bathroom_type: '',
//         amenities: '',
//     });
//     const [image, setImage] = useState(null);
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevData => ({ ...prevData, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const requiredFields = ['user_id', 'property_category_type', 'address', 'city_name', 'property_type', 'property_name', 'property_price'];
//         const missingFields = requiredFields.some(field => !formData[field]);
//         if (missingFields) {
//             setError('All required fields must be filled');
//             return;
//         }

//         const formDataToSubmit = new FormData();
//         for (const key in formData) {
//             formDataToSubmit.append(key, formData[key]);
//         }
//         if (image) formDataToSubmit.append('cover_image', image);

//         const token = localStorage.getItem('token');
//         if (!token) {
//             setError('No token found');
//             return;
//         }

//         axios.post('http://localhost:8000/api/topproperty/', formDataToSubmit, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 Authorization: `Token ${token}`,
//             },
//         })
//         .then(response => {
//             onAddProperty(response.data);
//             // Reset form and image state
//             setFormData({
//                 user_id: '',
//         property_category_type: '',
//         property_owner_type: '',
//         address: '',
//         city_name: '',
//         property_type: '',
//         property_name: '',
//         property_price : '',
//         safety_deposit: '',
//         property_description: '',
//         latitude: '',
//         longitude: '',
//         available_on_date: '',
//         expiry_date: '',
//         property_added_date: '',
//         bhk_type: '',
//         area_sq: '',
//         units: '',
//         available_status: '',
//         active_status: '',
//         cover_image: '',
//         bathroom_type: '',
//         amenities: '',
//             });
//             setImage(null);
//             setError('');
//         })
//         .catch(error => {
//             console.error('There was an error adding the property:', error.response ? error.response.data : error.message); // Improved error logging
//             setError('There was an error adding the property');
//         });
//     };

//     return (
//         <div className="max-w-6xl mx-auto bg-gray-250 p-10 border border-gray-300 rounded-lg w-full">
//             <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
//                 {error && <p className="text-red-500 text-sm mb-4 w-full">{error}</p>}

//                 {/* Left Column */}
//                 <div className="flex-1 flex flex-col gap-4">
//                     <InputField id="user_id" label="User ID" value={formData.user_id} onChange={handleChange} />
//                     <SelectField
//                         id="property_category_type"
//                         label="Property Category Type"
//                         value={formData.property_category_type}
//                         onChange={handleChange}
//                         options={['Buy', 'Rent', 'Commercial', 'PG', 'Plot']}
//                     />
//                     <SelectField
//                         id="property_owner_type"
//                         label="Property Owner Type"
//                         value={formData.property_owner_type}
//                         onChange={handleChange}
//                         options={['Owner', 'Dealer', 'Developer']}
//                     />
//                     <InputField id="address" label="Address" value={formData.address} onChange={handleChange} />
//                     <SelectField
//                         id="city_name"
//                         label="City Name"
//                         value={formData.city_name}
//                         onChange={handleChange}
//                         options={['Baner', 'Katraj', 'Wakad', 'Amirpeth', 'Sarjapur Road', 'Koyambedu', 'Andheri']}
//                     />
//                     <SelectField
//                         id="property_type"
//                         label="Property Type"
//                         value={formData.property_type}
//                         onChange={handleChange}
//                         options={['Apartment', 'Plot', 'Flat', 'Independent House', 'Villa', 'Office', 'Retail Shop', 'Warehouse', 'Vacation Home', 'Hostel', 'Independent Floor']}
//                     />
//                     <InputField id="property_name" label="Property Name" value={formData.name} onChange={handleChange} />
//                     <InputField id="property_price" label="Price" type="number" value={formData.price} onChange={handleChange} />
//                     <InputField id="safety_deposit" label="Safety Deposit" type="number" value={formData.safety_deposit} onChange={handleChange} />
//                     <SelectField
//                         id="bathroom_type"
//                         label="Bathroom Type"
//                         value={formData.bathroom_type}
//                         onChange={handleChange}
//                         options={['Combined', 'Separate']}
//                     />
//                     <InputField id="amenities" label="Amenities" value={formData.amenities} onChange={handleChange} />
//                 </div>

//                 {/* Right Column */}
//                 <div className="flex-1 flex flex-col gap-4">
//                     <InputField id="latitude" label="Latitude" type="number" step="0.0001" value={formData.latitude} onChange={handleChange} />
//                     <InputField id="longitude" label="Longitude" type="number" step="0.0001" value={formData.longitude} onChange={handleChange} />
//                     <InputField id="available_on_date" label="Available On Date" type="date" value={formData.available_on_date} onChange={handleChange} />
//                     <InputField id="expiry_date" label="Expiry Date" type="date" value={formData.expiry_date} onChange={handleChange} />
//                     <InputField id="property_added_date" label="Property Added Date" type="date" value={formData.property_added_date} onChange={handleChange} />
//                     <InputField id="bhk_type" label="BHK Type" value={formData.bhk_type} onChange={handleChange} />
//                     <InputField id="area_sq" label="Area (sq ft)" type="number" value={formData.area_sq} onChange={handleChange} />
//                     <InputField id="units" label="Units" type="number" value={formData.units} onChange={handleChange} />
//                     <SelectField
//                         id="available_status"
//                         label="Available Status"
//                         value={formData.available_status}
//                         onChange={handleChange}
//                         options={['Available', 'Not Available']}
//                     />
//                     <SelectField
//                         id="active_status"
//                         label="Active Status"
//                         value={formData.active_status}
//                         onChange={handleChange}
//                         options={['Active', 'Inactive']}
//                     />
//                     <div className="flex flex-col gap-4">
//                         <label className="block text-gray-700 font-bold mb-2" htmlFor="cover_image">
//                             Cover Image
//                         </label>
//                         <input
//                             type="file"
//                             id="cover_image"
//                             accept="image/*"
//                             onChange={(e) => setImage(e.target.files[0])}
//                             className="form-input"
//                         />
//                     </div>
                   
//                 </div>
//                 <div className="w-20% flex justify-center ">
//                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 h-20 rounded hover:bg-blue-700 mb-2">
//                         Add Property
//                     </button>
//                 </div>
                
//             </form>
//         </div>
//     );
// };

// const InputField = ({ id, label, value, onChange, type = 'text' }) => (
//     <div>
//         <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
//             {label}
//         </label>
//         <input
//             type={type}
//             id={id}
//             value={value}
//             onChange={onChange}
//             className="form-input"
//         />
//     </div>
// );

// const SelectField = ({ id, label, value, onChange, options }) => (
//     <div>
//         <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
//             {label}
//         </label>
//         <select
//             id={id}
//             value={value}
//             onChange={onChange}
//             className="form-select"
//         >
//             <option value="">Select...</option>
//             {options.map(option => (
//                 <option key={option} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     </div>
// );

// export default PropertyCardAddForm;



// import React, { useState, useEffect } from 'react';
// import { Menu, MenuItem, IconButton } from '@mui/material';
// import { FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { BsSearch, BsArrowUpRightSquare } from 'react-icons/bs';
// import Chart from 'chart.js/auto';
// import p2 from './assets/images/p2.png'; 
// import p3 from './assets/images/p3.png'; 
// import p1 from './assets/images/p1.png'; 
// import p4 from './assets/images/p4.png';
// import axios from 'axios';

// const AdminPage = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [inventoryCount, setInventoryCount] = useState(0);
//   const [error, setError] = useState('');
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();
//   const circleRadius = 50; // Radius of the circle
//   const strokeWidth = 10;  // Width of the stroke
//   const circleCircumference = 2 * Math.PI * circleRadius;

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleUserIconClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (path) => {
//     setAnchorEl(null);
//     if (path) {
//       if (path === '/') {
//         localStorage.removeItem('token');
//       }
//       navigate(path);
//     }
//   };

//   useEffect(() => {
//     const ctx = document.getElementById('revenueChart').getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14'],
//         datasets: [{
//           label: 'Revenue',
//           data: [30000, 35000, 32000, 42000, 50000, 48000, 47000, 52000],
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 2,
//           pointBackgroundColor: 'rgba(75, 192, 192, 1)',
//           pointBorderColor: 'rgba(75, 192, 192, 1)',
//           pointHoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//           pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
//         }],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             grid: {
//               color: 'rgba(200, 200, 200, 0.2)',
//             },
//           },
//           x: {
//             grid: {
//               color: 'rgba(200, 200, 200, 0.2)',
//             },
//           },
//         },
//         elements: {
//           point: {
//             radius: 4,
//             hoverRadius: 6,
//           },
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     });

//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (searchTerm.toLowerCase() === 'dashboard') {
//       navigate('/');
//     } else if (searchTerm.toLowerCase() === 'propertylist') {
//       navigate('/propertylist');
//     } else if (searchTerm.toLowerCase() === 'property') {
//       navigate('/propertylist1');  
//     } else if (searchTerm.toLowerCase() === 'citylist') {
//       navigate('/citylist');
//     } else if (searchTerm.toLowerCase() === 'user') {
//       navigate('/list');
//     } else if (searchTerm.toLowerCase() === 'notification') {
//       navigate('/notification');
//     } else if (searchTerm.toLowerCase() === 'inquiry') {
//       navigate('/inquiry');
//     } else {
//       alert('Page not found');
//     }
//   };

//   const filteredOrders = [
//     { property: 'Barhat Blue', date: 'Jul 15, 2024', price: '$359.90', customer: 'M-Starlight', status: 'Received' },
//     { property: 'Soft Ginger', date: 'Jul 16, 2024', price: '$420.78', customer: 'Serene W', status: 'Received' },
//     // Add more orders as needed
//   ].filter(order => 
//     order.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     order.status.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const topProperties = [
//     { name: 'Emerald Velvet', price: '$355.90', image: p2 },
//     { name: 'Velvet Coral', price: '$279.00', image: p3 },
//     { name: 'Rotterdam', price: '$329.95', image: p1 },
//     { name: 'Happy Yellow', price: '$315.50', image: p4 },
//     // Add more properties as needed
//   ];

//   const handleInventoryBoxClick = () => {
//     navigate('/cardlist'); // Change '/inventory' to the desired path
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);
  

//   const fetchProperties = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         console.error('No token found');
//         setError('No token found');
//         return;
//     }

//     try {
//         const response = await axios.get('http://localhost:8000/api/topproperty/', {
//             headers: {
//                 Authorization: `Token ${token}`,
//             },
//         });
//         setProperties(response.data);
//         setInventoryCount(response.data.length); // Update inventory count
//     } catch (error) {
//         console.error('There was an error fetching the properties!', error);
//         setError('There was an error fetching the properties');
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100">
//         <div className="bg-blue-500 p-4 flex justify-between items-center">
//           <h1 className="text-white text-2xl">Admin Dashboard</h1>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="px-4 py-2 rounded-full"
//             />
//             <button onClick={handleSearch} className="absolute right-2 top-2 text-gray-500">
//               <BsSearch />
//             </button>
//           </div>
//           <IconButton onClick={handleUserIconClick} color="inherit">
//             <FaUserCircle className="text-white" />
//           </IconButton>
//           <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(null)}>
//             <MenuItem onClick={() => handleMenuClose('/profile')}>Profile</MenuItem>
//             <MenuItem onClick={() => handleMenuClose('/change-password')}>Change Password</MenuItem>
//             <MenuItem onClick={() => handleMenuClose('/')}>Logout</MenuItem>
//           </Menu>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="bg-gradient-to-r from-white to-dark-blue p-4 rounded-lg shadow-lg col-span-1 lg:col-span-2 flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Total Revenue</h2>
//             <p className="text-2xl font-semibold text-gray-800 mb-4">$17,086.92</p>
//             <div className="flex-1 relative">
//               <canvas id="revenueChart" className="w-full h-full"></canvas>
//             </div>
//           </div>
//           <div className="bg-gradient-to-r from-white to-sky p-3 rounded-lg shadow-lg col-span-1 flex flex-col">
//             <h2 className="text-xl font-bold mb-2">Top Property</h2>
//             <ul className="flex-1 overflow-auto">
//               {topProperties.map((property, index) => (
//                 <li key={index} className="bg-gray-300 text-black rounded-lg p-4 mb-2 flex items-center space-x-4">
//                   <img 
//                     src={property.image} 
//                     alt={property.name} 
//                     className="w-12 h-12 object-cover rounded-full" 
//                   />
//                   <div>
//                     <p className="font-bold">{property.name}</p>
//                     <p>{property.price}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
//           <div className="bg-gradient-to-r from-white to-blue p-4 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer" onClick={handleInventoryBoxClick}>
//             <h2 className="text-xl font-bold mb-2">Inventory Count</h2>
//             <p className="text-2xl font-semibold text-gray-800">{inventoryCount}</p>
//           </div>
//           <div className="bg-gradient-to-r from-white to-dark-blue p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
//             <h2 className="text-xl font-bold mb-2">Product Sold</h2>
//             <p className="text-2xl font-semibold text-gray-800">1,233</p>
//           </div>
//           <div className="bg-gradient-to-r from-white to-purple p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
//             <h2 className="text-xl font-bold mb-2">Total Income</h2>
//             <p className="text-2xl font-semibold text-gray-800">$12,000</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
//           <div className="bg-gradient-to-r from-white to-dark-blue p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-2">Recent Orders</h2>
//             <ul>
//               {filteredOrders.map((order, index) => (
//                 <li key={index} className="bg-gray-100 text-black rounded-lg p-4 mb-2 flex justify-between items-center">
//                   <div>
//                     <p className="font-bold">{order.property}</p>
//                     <p className="text-sm text-gray-600">{order.date}</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">{order.price}</p>
//                     <p className="text-sm text-gray-600">{order.customer}</p>
//                   </div>
//                   <p className={`font-semibold ${order.status === 'Received' ? 'text-green-500' : 'text-yellow-500'}`}>
//                     {order.status}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminPage;





{/* <div className="absolute inset-0 flex justify-center items-center">
<svg width="120" height="120" viewBox="0 0 120 120">
  <circle
    cx="60"
    cy="60"
    r={circleRadius}
    stroke="gray"
    strokeWidth={strokeWidth}
    fill="transparent"
  />
  <circle
    cx="60"
    cy="60"
    r={circleRadius}
    stroke="skyblue"
    strokeWidth={strokeWidth}
    fill="transparent"
    strokeDasharray={circleCircumference}
    strokeDashoffset={circleCircumference * (1 - inventoryCount / 100)}
  />
  <text
    x="60"
    y="60"
    textAnchor="middle"
    dy=".3em"
    fontSize="20px"
    fontWeight="bold"
  >
    {inventoryCount}
  </text>
</svg>
</div> */}


{/* <InputField 
                            id="cover_image" 
                            label="Cover Image" 
                            type="file" 
                            onChange={handleFileChange} 
                            icon={<BsFillImageFill />} 
                        />

                    </div>
                    

                </div>
                {formData.cover_image && (
                 <div className="mb-4">
                <img
                src={`http://localhost:8000${formData.cover_image}`} // Adjust the path as needed
                alt="Cover"
                className="w-half h-auto border rounded-lg ml-2 "
               />
              </div>
              
              )}
              */
             }
            //  import React, { useState } from 'react';
            //  import axios from 'axios';
            //  import { useNavigate } from 'react-router-dom';
            //  import backgroundImage from './assets/images/login.jpg'; // Import your image
             
             
            //  const LoginForm = () => {
            //      const [username, setUsername] = useState('');
            //      const [password, setPassword] = useState('');
            //      const [error, setError] = useState('');
            //      const navigate = useNavigate();
             
            //      const handleLogin = async (username, password) => {
            //          try {
            //              const response = await axios.post('http://localhost:8000/api/login/', { username, password });
            //              localStorage.setItem('token', response.data.token);
            //              navigate('/admin'); // Redirect to admin page after successful login
            //          } catch (error) {
            //              setError('Invalid username or password');
            //              console.error('Login error', error);
            //          }
            //      };
             
            //      const handleSubmit = (e) => {
            //          e.preventDefault();
            //          handleLogin(username, password);
            //      };
             
            //      return (
            //          <div
            //              className="flex items-center justify-center min-h-screen"
            //              style={{
            //                  backgroundImage: `url(${backgroundImage})`,
            //                  backgroundSize: 'cover',
            //                  backgroundPosition: 'center',
            //              }}
            //          >
            //              <div
            //                  className="w-full max-w-md rounded-lg p-8"
            //                  style={{
            //                      backgroundColor: 'transparent', // Set the background color to transparent
            //                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Add box shadow for the border effect
            //                  }}
            //              >
            //                  <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
            //                  <form onSubmit={handleSubmit}>
            //                      <div className="mb-4">
            //                          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            //                              Username
            //                          </label>
            //                          <input
            //                              id="username"
            //                              type="text"
            //                              placeholder="Username"
            //                              onChange={(e) => setUsername(e.target.value)}
            //                              required
            //                              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            //                          />
            //                      </div>
            //                      <div className="mb-6">
            //                          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            //                              Password
            //                          </label>
            //                          <input
            //                              id="password"
            //                              type="password"
            //                              placeholder="Password"
            //                              onChange={(e) => setPassword(e.target.value)}
            //                              required
            //                              className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            //                          />
            //                      </div>
            //                      {error && <p className="text-red-500 text-xs italic">{error}</p>} {/* Error message */}
            //                      <div className="flex items-center justify-center"> {/* Center the button container */}
            //                          <button
            //                              type="submit"
            //                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            //                          >
            //                              Login
            //                          </button>
            //                      </div>
            //                  </form>
            //              </div>
            //          </div>
            //      );
            //  };
             
            //  export default LoginForm;             


<svg viewBox="0 0 120 120" className="w-32 h-32">
      <circle
        cx="60"
        cy="60"
        r={circleRadius}
        fill="none"
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="60"
        cy="60"
        r={circleRadius}
        fill="none"
        stroke="#64b5f6"
        strokeWidth={strokeWidth}
        strokeDasharray={circleCircumference}
        strokeDashoffset={circleCircumference * (1 - (productSoldData.length / 100))}
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dy=".3em"
        stroke='skyblue'
        fontSize="25px"
        // fontWeight="bold"
      >
         {productSoldData.length}
      </text>
    </svg>
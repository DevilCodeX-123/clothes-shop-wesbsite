import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { 
  FiUsers, FiCheckSquare, FiUserCheck, 
  FiTrendingUp, FiAlertTriangle, FiArrowRight, FiShoppingCart, FiStar
} from 'react-icons/fi';
import { FaShirt } from 'react-icons/fa6';
import { 
  Chart as ChartJS, 
  CategoryScale, LinearScale, PointElement, LineElement, 
  Title, Tooltip, Legend, Filler 
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, 
  Title, Tooltip, Legend, Filler
);

const stats = [
  { label: 'TOTAL PRODUCTS', value: '1,422', change: '+12% from last month', icon: <FaShirt />, color: '#EBF1FF', iconColor: '#3B82F6' },
  { label: 'TOTAL EMPLOYEES', value: '84', change: '2 new hires pending', icon: <FiUsers />, color: '#F0FDF4', iconColor: '#22C55E' },
  { label: 'ACTIVE TASKS', value: '312', change: '14 overdue alerts', icon: <FiCheckSquare />, color: '#FEF3F2', iconColor: '#EF4444' },
  { label: 'TODAY\'S ATTENDANCE', value: '92%', change: '78 present / 6 absent', icon: <FiUserCheck />, color: '#FFF7ED', iconColor: '#F97316' },
];

const lowStockItems = [
  { id: 1, name: 'Midnight Blazer (L)', stock: 'ONLY 2 LEFT', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=100' },
  { id: 2, name: 'Heritage Red Sneaker', stock: 'RESTOCK SUGGESTED', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100' },
  { id: 3, name: 'Cashmere Knit - Cream', stock: 'THRESHOLD REACHED', image: 'https://images.unsplash.com/photo-1598533161399-52e6840742d8?auto=format&fit=crop&q=80&w=100' },
];

const recentActivities = [
  { id: 1, type: 'inventory', text: 'Inventory Updated: 40 units of \'Silk Scarves\' added to main warehouse.', time: 'Today, 09:42 AM', user: 'System' },
  { id: 2, type: 'employee', text: 'New Employee Hired: Priya Sharma joined the Sales Department.', time: 'Yesterday, 04:15 PM', user: 'HR Portal' },
  { id: 3, type: 'promotion', text: 'Promotion Alert: \'Mid-Summer Sale\' configuration finalized.', time: 'Yesterday, 11:30 AM', user: 'Marketing' },
  { id: 4, type: 'audit', text: 'Audit Complete: Q2 stock verification completed successfully.', time: '22 June, 02:00 PM', user: 'Warehouse Team' },
];

const topPerformers = [
  { id: 1, name: 'Ananya Verma', role: 'SALES LEAD', rating: 4.8, satisfied: '98% Satisfied', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
  { id: 2, name: 'Rohan Mehta', role: 'STORE OPS', rating: 4.7, satisfied: '94% Satisfied', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
];

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sales Revenue',
      data: [45000, 52000, 48000, 61000, 55000, 72000, 68000],
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: '#3B82F6',
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { mode: 'index', intersect: false },
  },
  scales: {
    y: { beginAtZero: true, grid: { color: '#F3F4F6' } },
    x: { grid: { display: false } },
  },
};

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard-view">
        <header className="dashboard-header">
          <div>
            <h1>Overview Dashboard</h1>
            <p>MONDAY, 24 JUNE 2024</p>
          </div>
          <button className="add-product-btn">+ Add Product</button>
        </header>

        {stats.length > 0 && (
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: stat.color, color: stat.iconColor }}>
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <span className="stat-label">{stat.label}</span>
                  <h2 className="stat-value">{stat.value}</h2>
                  <p className="stat-change">{stat.change}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="dashboard-main-grid">
          <div className="chart-container">
            <div className="chart-header">
              <h3>Sales Trend Performance</h3>
              <p>Revenue analysis across all boutique categories</p>
              <div className="chart-period">Last 7 Days</div>
            </div>
            <div className="chart-body">
              <Line data={chartData} options={chartOptions} height={100} />
            </div>
          </div>

          <div className="low-stock-card">
            <h3>Low Stock Alerts</h3>
            <div className="stock-list">
              {lowStockItems.map(item => (
                <div key={item.id} className="stock-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <span className="stock-status">{item.stock}</span>
                  </div>
                  <button className="cart-btn"><FiShoppingCart /></button>
                </div>
              ))}
            </div>
            <button className="view-all-btn">View All Inventory</button>
          </div>
        </div>

        <div className="dashboard-bottom-grid">
          <div className="activities-card">
            <h3>Recent Activities</h3>
            <div className="activity-timeline">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p>{activity.text}</p>
                    <div className="activity-meta">
                      <span>{activity.time}</span> • <span>{activity.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="performers-card">
            <h3>Top Performance Ratings</h3>
            <div className="performers-list">
              {topPerformers.map(performer => (
                <div key={performer.id} className="performer-item">
                  <img src={performer.image} alt={performer.name} />
                  <div className="performer-info">
                    <h4>{performer.name}</h4>
                    <span>{performer.role}</span>
                    <div className="performer-rating">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} size={12} fill={i < Math.floor(performer.rating) ? "#FFB000" : "none"} color="#FFB000" />
                      ))}
                    </div>
                    <span className="performer-stat">{performer.satisfied}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="full-report-btn">Full Report</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { 
  FiStar, FiCheckCircle, FiUsers, 
  FiLogIn, FiLogOut, FiFileText, FiChevronRight, FiVolume2
} from 'react-icons/fi';
import { FaQrcode, FaWallet } from 'react-icons/fa6';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  return (
    <AdminLayout>
      <div className="employee-dashboard">
        <header className="employee-header">
          <div className="greeting">
            <h1>Namaste, Vikram</h1>
            <p>Mumbai Flagship Store</p>
          </div>
          <div className="duty-toggle">
            <span>Active Duty</span>
            <div className="toggle-switch active"></div>
          </div>
        </header>

        {/* Top Metrics */}
        <div className="employee-metrics">
          <div className="metric-card">
            <div className="metric-header">
              <FiStar className="icon star" />
              <span className="change">+0.2 this week</span>
            </div>
            <div className="metric-body">
              <span className="label">CUSTOMER RATING</span>
              <h2 className="value">4.9<span>/5</span></h2>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <FiCheckCircle className="icon check" />
              <div className="progress-bar"><div className="fill" style={{ width: '75%' }}></div></div>
            </div>
            <div className="metric-body">
              <span className="label">DAILY TASKS</span>
              <h2 className="value">12<span>/16</span></h2>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <FiUsers className="icon attendance" />
              <span className="status-tag">Perfect streak</span>
            </div>
            <div className="metric-body">
              <span className="label">WEEKLY ATTENDANCE</span>
              <h2 className="value">100%</h2>
            </div>
          </div>
        </div>

        <div className="employee-main-grid">
          {/* Assignment Section */}
          <div className="assignment-section">
            <div className="assignment-card">
              <div className="card-header">
                <FaQrcode size={24} />
                <h3>Live Customer Assignment</h3>
              </div>
              <div className="card-body">
                <div className="qr-container">
                  <div className="qr-placeholder">
                    <div className="qr-box"></div>
                  </div>
                </div>
                <div className="assignment-info">
                  <p>Scan the customer's loyalty pass or app QR code to initiate a premium shopping experience.</p>
                  <ul className="assignment-features">
                    <li><FiCheckCircle size={16} /> Instant Profile Access</li>
                    <li><FiCheckCircle size={16} /> Past Purchase Insights</li>
                  </ul>
                  <button className="manual-entry-btn">MANUAL ENTRY</button>
                </div>
              </div>
            </div>

            <div className="tasks-section">
              <div className="section-header">
                <h3>Pending Tasks</h3>
                <button className="view-all">View All</button>
              </div>
              <div className="tasks-list">
                <div className="task-item high">
                  <div className="task-indicator"></div>
                  <div className="task-info">
                    <h4>Restock Silk Collection</h4>
                    <p>Aisle 4 • High Priority</p>
                  </div>
                  <FiChevronRight />
                </div>
                <div className="task-item normal">
                  <div className="task-indicator"></div>
                  <div className="task-info">
                    <h4>Finalize Mrs. Kapoor's Tailoring</h4>
                    <p>Fitting Room 2 • Due by 4 PM</p>
                  </div>
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Actions */}
          <aside className="employee-actions">
            <div className="action-grid">
              <button className="action-btn">
                <FiLogIn /> <span>Check In</span>
              </button>
              <button className="action-btn">
                <FiLogOut /> <span>Check Out</span>
              </button>
              <button className="action-btn">
                <FiFileText /> <span>Leave Request</span>
              </button>
              <button className="action-btn">
                <FaWallet /> <span>Payslips</span>
              </button>
            </div>

            <div className="salary-card">
              <h3>Salary Overview</h3>
              <p>EST. PAYOUT (OCT)</p>
              <h2 className="salary-value">₹84,500</h2>
              <div className="salary-details">
                <div className="detail">
                  <span>INCENTIVES</span>
                  <p>₹12,400</p>
                </div>
              </div>
              <button className="breakdown-btn">Detailed Breakdown <FiChevronRight /></button>
            </div>

            <div className="boutique-update">
              <div className="update-header">
                <FiVolume2 />
                <h4>Boutique Update</h4>
              </div>
              <p>Winter collection showcase starts this Saturday. Attendance is mandatory for the morning briefing at 8:00 AM.</p>
            </div>
          </aside>
        </div>
      </div>
    </AdminLayout>
  );
};

export default EmployeeDashboard;

import React, { useState } from 'react'
import Content from './content'
import './sidebar.css'
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState (true)
    return (
        <div className="sidebar" style={{
            maxWidth: collapsed ? 0 : 'var(--sidebar-width)'
          }}>
            <div className="sidebar-content-wrapper" >
              <Content />
            </div>
            <button className="sidebar-btn" onClick={() => { setCollapsed(prev => !prev) }}>{ collapsed ? '>' : '<'}</button>
        </div>
    );
};

export default Sidebar;

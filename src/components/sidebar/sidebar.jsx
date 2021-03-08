// import React, { useState } from 'react'
import Content from './content'
import './sidebar.css'
const Sidebar =  (props) => {

    return (
        <div className="sidebar" style={{
            maxWidth: props.collapsed ? 0 : 'var(--sidebar-width)'
          }}>
            <div className="sidebar-content-wrapper" >
              <Content />
            </div>
            <button className="sidebar-btn" onClick={() => { props.setCollapsed(prev => !prev) }}>{props.collapsed ? '>' : '<'}</button>
        </div>
    );
};

export default Sidebar;

import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminSideBarData } from './AdminSideBarData';

function AdminSideBar() {
    return (
        <div className='sidebar'>
            <ul className='sidebarList'>

                {
                    AdminSideBarData.map((val, key) => {
                        return (
                            <li className='row' key={key}>
                                <Link to={val.Link}>
                                    <i>
                                        {val.icon}
                                    </i>
                                    <span>{val.title}</span>
                                </Link>

                            </li>

                        );
                    })
                }



            </ul>

        </div>
    )
}

export default AdminSideBar;
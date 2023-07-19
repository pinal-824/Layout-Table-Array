import React from "react";
import { Siderrouter } from "./sider";
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';
import { Badge } from 'antd';

export function Upgradetopro() {
    return (
        <>
            <Siderrouter />
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Upgrade To Pro</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div style={{ backgroundColor: "#eee", padding: "3%", borderRadius: "15px", marginTop: "5%" }}>
                    <div style={{ backgroundColor: "#42dff1", marginTop: "-90px", borderRadius: "10px", color: "white", padding: "2%" }}>
                        <h3>Material Dashboard PRO React</h3>
                        <p>Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>
                    </div>
                    <table className="table table-hover" style={{marginTop:"25px"}}>
                        <thead>
                            <th>Name</th>
                            <th>Free</th>
                            <th>Pro</th>
                        </thead>
                        <tbody>
                            <td>Components</td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />
                        <tbody>
                            <td>Plugins</td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />
                        <tbody>
                            <td>Example Pages</td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />
                        <tbody>
                            <td>Login, Register, Pricing, Lock Pages	</td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />
                        <tbody>
                            <td>ReactTables, ReactVectorMap, ReactSweetAlert, Wizard, Validation, ReactBigCalendar etc...
                            </td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />
                        <tbody>
                            <td>Mini Sidebar</td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />
                        <tbody>
                            <td>Premium Support	</td>
                            <td>20</td>
                            <td>200</td>
                        </tbody><br />

                    </table>
                </div>
            </div>
        </>
    )
}
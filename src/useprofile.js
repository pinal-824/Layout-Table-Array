import React from "react";
import { Badge } from 'antd';
import { Siderrouter } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';
export const Useprofile = () => {
    return (
        <>
            <Siderrouter />
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>User Profile</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-9" style={{ backgroundColor: "#eee", padding: "2%", border: "2px solid #eee", width: "950px", borderRadius: "10px", marginTop: "5%" }}>
                        <div style={{ backgroundColor: "#ab47bc", padding: "3px", marginTop: "-50px", borderRadius: "10px", color: "white" }}>
                            <h3>Edit Profile</h3>
                            <p>Complete your profile</p>
                        </div>
                        <input type="text" placeholder="Company (disabled)" name="company" style={{ borderWidth: "0 0 1px 0", marginTop: "10%", background: " transparent", width: "35%" }} />
                        <input type="text" placeholder="Username" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", marginLeft: "3%" }} />
                        <input type="text" placeholder="Email address" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", marginLeft: "3%", width: "35%" }} /><br /><br />
                        <input type="text" placeholder="First Name" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", width: "45%", marginTop: "5%" }} />
                        <input type="text" placeholder="Last Name" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", marginLeft: "3%", width: "45%" }} /><br /><br />
                        <input type="text" placeholder="City" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", marginTop: "5%", width: "30%" }} />
                        <input type="text" placeholder="Country" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", marginLeft: "3%", width: "30%" }} />
                        <input type="text" placeholder="Postal Code" name="company" style={{ borderWidth: "0 0 1px 0", background: " transparent", marginLeft: "3%", width: "30%" }} />
                        <p style={{ marginTop: "5%" }}>About Me</p>
                        <input type="text" placeholder="Lamborghini mercy,yourchick she so thirstty,i'm in that two seat Lambo." style={{ borderWidth: "0 0 1px 0", background: " transparent", width: "100%" }} />
                        <button type="button" class="btn" style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white" }}>UPADATE PROFILE</button>
                    </div>
                    <div className="col-3">
                        <div style={{ backgroundColor: "#eee", width: "600px", borderRadius: "10px", marginLeft: "5%", marginTop: "20%" }}>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmGmrJ--Hqs-O42T0qhIce5JQDiEMaDoBbQ&usqp=CAU" height="150px" width="150px" style={{ borderRadius: "50%", marginTop: "-50px", marginLeft: "230px" }} />
                            </div>
                            <div style={{ textAlign: "center", marginTop: "25px", padding: "5%" }}>
                                <h6 style={{marginTop:"20px"}}>CEO / CO-FOUNDER</h6>
                                <h6 style={{marginTop:"30px"}}>Alec Thompson</h6>
                                <p>Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
                                <button type="button" class="btn" style={{ marginTop: "20px", backgroundColor: "#ab47bc", color: "white" ,borderRadius:"100px"}}>FOLLOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from "react";
import logo from './logo.svg';
import { BiClipboard } from "react-icons/bi";
import { SiGoogleassistant } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdNotifications, } from "react-icons/io";
import {
    AppstoreOutlined,
    FileOutlined,
    GlobalOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const Listitem = [{ icons: <AppstoreOutlined />, label: "Dashboard" }, { icons: <UserOutlined />, label: "UserProfile" },
{ icons: <BiClipboard />, label: "TableList" }, { icons: <FileOutlined />, label: "Typography" },
{ icons: <SiGoogleassistant />, label: "Icn" },
{ icons: <IoMdNotifications />, label: "Notifications" }, { icons: <GlobalOutlined />, label: "arraytable" }, { icons: <GlobalOutlined />, label: "Upgradetopro" }]
export function Siderrouter() {
    const navigate = useNavigate()
    return (
        <>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEhIQDw8PDw8PEBAPDw0NDw8NDQ8PFRIWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFw8PFS0ZFR0rKy0tLS0tLTc3LS0tKystLS03LS0tLS0tNy0tKystNzctLSsrLSs3Ky0rKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIHA//EACQQAQEBAQABBAEEAwAAAAAAAAABEQLRMUFRwfCRobHhIXGB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECBP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A430rEXW5xQjUBVSVBIYZFn+TE0HFSDMWHFgMY1hOBoZrcZoBcmqCimqmiMprmCiiIyHBBPApkWAFTD/YM2KFYKKopEAQSKiEBaBVAaKREaqelFEob6iDFhQISNURUHRGFFUVKVGbFDREVYqVQHEFb4ACRNAGcNisQA4oQZsROAzYI1WUWMkGorKNQpNZaqoUlFQpERRe6hxUQjQEVENAqUSA1YkApSAQ9CGguVFF8AgaANUipk9QZiIAFQgyGmUVlVKo0CCCkaxcoRYYJWsVAVqVFCDQaoIVFRDREEOYUKqUhBhgMBk1KiqIQgqCAOte3+6OVVQKqKoKBqAVYzWqyUjCqirLaQsSDUarMaaZo5IjQUUxGRYlBEIGAwKhoVVA4DBUERilFRgxQQU1GgIp6qRT1FQIAwqBUNGGoAjIzUFQqKjUZVSqNCFRIaeWoxG2olRZnq0IqYDFQRpmNQKeRVEqC+ypqqCFOoBEoqKlCAVOioRaefLMankVMxrWQM8JRCJJAoKWaKayaKis1U0I0NLJRcTbD0vosZorTMKoqYCqKNRmHSFaZMColT8f8FRUEYCBoAgigelQaCi/P2MHj6BUGiAeVVyaIFQrRVBSKgKqaBoCkVFCWJAtezNaqxEWWliUpKKg1qstAeRKpECqtV+gCSQLTBFAIPyoCSiBQ+B8KAvYIwFEogQLIGCmJFAIoCikVGkgUE2w0qUUxVKNKJRWUYKgaEQgEEAaEAJCAoKAYqeWaBigMAGAgovCioKBQCmKqIGaKegyqBoootKSCrU+maYoYqOVRGjGSqJJAZQooB9wRQLNIBoJaCplZMBqAQqghgSKUL+fqqDUF/kKqh5C5VRTAgCtCqRQqtAqpVSYJQaoB5oqq6AtWsmqiIVBqIcjVGtFXwL6oNQKBRoIUCpQog1AtChUBQVv0lRQaFoUAxVnTaB1MymAEkKEGogqmSCWlAytKRVDUlRJIDzQkoRUgOhIDEkIKokimKBKGBICqEIbREkUGpAIYkCBQCqFCgpKj//Z')",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <img src={logo} className="App-logo" alt="logo" height="40px" width="40px" />
                    <p style={{ fontSize: "20px", color: "white" }}>CREATIVE TIM</p>
                </div><hr />
                <div className="demo-logo-vertical" style={{ display: "flex", flexDirection: "column", gap: "25px" }} >
                    {Listitem?.map((item) => { return (<Button style={{ background: 'transparent', color: "white", border: "none" }} title={item?.label} onClick={() => navigate(`/${item.label.toLocaleLowerCase()}`)} >{item.label}</Button>) })}
                </div>
                <button class="btn" style={{ backgroundColor: "white", marginTop: "215%", marginLeft: "15px" }} onClick={() => navigate('/upgradetopro')}>Upgradetopro</button>
            </Sider>
        </>
    )

}
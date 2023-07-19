import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Useprofile } from './useprofile'
import { Tablelist } from "./tablelist";
import { Typography } from './typography'
import { Icn } from './icn'
import { Notifications } from './notifications'
import { Upgradetopro } from "./upgradetopro";
import { Arraytable } from "./arraytable";

export const RouterReact = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/useprofile" element={<Useprofile />} />
                    <Route path="/tablelist" element={<Tablelist />} />
                    <Route path="/typography" element={<Typography />} />
                    <Route path="/icn" element={<Icn />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/arraytable" element={<Arraytable />} />
                    <Route path="/upgradetopro" element={<Upgradetopro />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
import React from "react";
import Sidebar from "./Sidebar";
import TitlePage from "./../TitlePage";

export default ({ children, title }) => (
    <div className="container-fluid">
    <div className="row">
        <Sidebar />

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <TitlePage title={title} />
            { children }
        </main>
    </div>
</div>
)
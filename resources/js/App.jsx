
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate, useParams } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import { Layout } from "./Layout";
import { ToastContainer, toast } from "react-toastify";


// pages
import { AffiliateListPage } from "./components/Pages/AffiliateListPage";


export class App extends React.Component {
    static defaultProps = {
        isNavBarOpen: false
    };

    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount(){

    }


    render() {

        return (
            
            <Layout>
                <Routes>
                    <Route path="/" element={
                        <AffiliateListPage {...this.props}  /> 
                    }/>
                </Routes>
                <ToastContainer />
            </Layout>
        );
    }
}


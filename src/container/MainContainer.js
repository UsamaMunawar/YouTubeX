import React, { Component } from 'react'
import { Layout } from 'antd';
import TopHeader from '../components/TopHeader/TopHeader';
import SideBar from '../components/SideBar/SideBar';
import InnerContainer from '../components/InnerContainer/InnerContainer';


class MainContainer extends Component {
    render() {
        return (
            <Layout>
                <TopHeader></TopHeader>
                <Layout>
                    <SideBar></SideBar>
                    <Layout style={{ padding: '0' }}>
                        <InnerContainer></InnerContainer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default MainContainer;

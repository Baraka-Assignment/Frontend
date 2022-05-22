import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb, Input, Collapse, Col, Row, Button  } from "antd";
import axios from 'axios';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Panel } = Collapse;


function callback(key) {
  console.log(key);
}

// Function to essentially store navigation items
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const navbarItems = [
]

const sidebarItems = [
]

const mainMenuItems = [
]

const subMenuItems = [
]

const text = ''


export default () => (
  
  <Layout>
    <Header style={{"background":"white"}} className="header">
      <div className="logo"></div>
      <Menu mode="horizontal" defaultSelectedKeys={["2"]} items={navbarItems} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={sidebarItems}
        />
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            marginTop: 20,
            minHeight: 870,
            borderTopStyle: "solid",
            borderColor: "#0087ff",
          }}
        >
          <div style={{}}>
            <h1>NAME NAME</h1>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={["7"]} items={mainMenuItems} />
          <Content
            style={{
              margin: 20,
              borderStyle: "solid",
              borderColor: "#e1d3d3",
              borderWidth: "1px",
            }}
          >
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["3"]}
              items={subMenuItems}
            />
            <Content
              style={{
                margin: 20,
              }}
            >
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="Basic Info" key="1" style={{backgroundColor:"#a5a5a5"}}>
                  <h1>First - Last Name</h1>
                  <Row>
                    <Col span={12}>
                      <Input placeholder="First Name" />
                    </Col>
                    <Col span={12}>
                      <Input placeholder="Last Name" />
                    </Col>
                  </Row>
                </Panel>
                <Panel header="Personal Circumstance" key="2" style={{backgroundColor:"#a5a5a5"}}>
                  <p>{text}</p>
                </Panel>
                <Panel header="PEP Statement" key="3"style={{backgroundColor:"#a5a5a5"}}>
                  <p>{text}</p>
                </Panel>
                <Panel header="Employment Info" key="4"style={{backgroundColor:"#a5a5a5"}}>
                  <p>{text}</p>
                </Panel>
                <Panel header="Investment Objectives" key="5"style={{backgroundColor:"#a5a5a5"}}>
                  <p>{text}</p>
                </Panel>
              </Collapse>
              <Button type="primary">Save</Button>
            </Content>
          </Content>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

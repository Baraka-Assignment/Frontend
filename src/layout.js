import { React, useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Input, Collapse, Col, Row, Button } from "antd";
import {
  UserOutlined,
  NotificationOutlined,
  HomeOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,
  IdcardOutlined,
  IssuesCloseOutlined,
  StockOutlined,
  UserSwitchOutlined,
  CalendarOutlined,
  DollarOutlined,

} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

// Function to essentially store navigation items
function getItem(label, key, icon, children, type) {
  return {
    key,
    children,
    icon,
    label,
    type,
  };
}
// set yp states for SideBar's drawer

const navbarItems = [];

const sidebarItems = [
  getItem("Dashboard", "dashboard", <HomeOutlined />),
  getItem("Stories", "stories", <BookOutlined />),
  getItem("Users", "users", <UsergroupAddOutlined />),
  getItem("Test Users", "testusers", <UserOutlined />),
  getItem("Document Verification", "docverification", <FileTextOutlined />, [
    getItem("Address Verification", "adresssverification", <IdcardOutlined />),
  ]),
  getItem("Push Notifications", "pushnotifications", <NotificationOutlined />),
  getItem("Issues", "issues", <IssuesCloseOutlined />),
  getItem("Stock", "stock", <StockOutlined />),
  getItem("Academy", "academy", <HomeOutlined />),
  getItem("Admin Permessions", "adminpermessions", <UserSwitchOutlined />),
  getItem("Checkout Events", "checkoutevents", <CalendarOutlined />),
  getItem("Influencers", "influencers", <UserOutlined />),
  getItem("Learn Payments", "learnpayments", <DollarOutlined />),
  getItem("Meta Infromation", "metainformation", "", []),
];

const mainMenuItems = [
  getItem("USER INFORMATION", "1"),
  getItem("DRIVEWEALTH", "2"),
  getItem("IDENTITY DOCUMENTS(OWN)", "3"),
  getItem("ADDRESS DOCUMENTS(OWN)", "4"),
  getItem("3RD PARTY DOCUMENTS", "5"),
  getItem("ACADEMY", "6"),
  getItem("OTHER/SETTINGS", "7"),
];

const subMenuItems = [
  getItem("OTHER/SETTINGS", "1"),
  getItem("WITHDRAW", "2"),
  getItem("USER INFO", "3"),
];

const text = "";

// inline css is constantly use to override Ant Design's default styles

function Layoutt() {
  return (
    <Layout>
      <Header className="navbar">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navbarItems}
        >
        </Menu>
        <Button
        className="navbar-button"
        >-</Button>
        <div className="logo">
          <img src = "https://www.getbaraka.com/wp-content/uploads/2020/10/barak-logo.svg" alt="barak-logo" />
        </div>
        <div className="admin">
          Osama
        </div>
      </Header>
      <Layout>
        <Sider width={200} height={800}>
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
            minHeight: "910px",
          }}
          className="content"
        >
          <Content
            className="site-layout-background"
            style={{
              backgroundColor: "#fff",
              padding: 24,
              marginTop: 20,
              minHeight: 770,
              borderTopStyle: "solid",
              borderColor: "#0087ff",
            }}
          >
            <div style={{}}>
              <h1>NAME NAME</h1>
            </div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["7"]}
              items={mainMenuItems}
            />
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
                  <Panel
                    header="Basic Info"
                    key="1"
                    style={{ backgroundColor: "#a5a5a5" }}
                  >
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
                  <Panel
                    header="Personal Circumstance"
                    key="2"
                    style={{ backgroundColor: "#a5a5a5" }}
                  >
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="PEP Statement"
                    key="3"
                    style={{ backgroundColor: "#a5a5a5" }}
                  >
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="Employment Info"
                    key="4"
                    style={{ backgroundColor: "#a5a5a5" }}
                  >
                    <p>{text}</p>
                  </Panel>
                  <Panel
                    header="Investment Objectives"
                    key="5"
                    style={{ backgroundColor: "#a5a5a5" }}
                  >
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
}

export default Layoutt;
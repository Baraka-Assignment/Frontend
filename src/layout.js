import { React, useState, useEffect } from "react";
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

// Function to store navigation items
function getItem(label, key, icon, children, type) {
  return {
    key,
    children,
    icon,
    label,
    type,
  };
}

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

// NOTE: inline css is constantly use to override Ant Design's default styles

function Layoutt() {
  // states for the variables we retrieve from the backend
  const [userFirstName, setUserFN] = useState([]);
  const [userLastName, setUserLN] = useState([]);
  // states for undo feature
  const [oldUFN, setOldUFN] = useState([]);
  const [oldULN, setOldULN] = useState([]);
  const [undoVisibility, setUndoVisibility] = useState(false);


  // on load, get user data from localhost:8080/users and set it to the respective states
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        setUserFN(data[0].firstname);
        setUserLN(data[0].lastname);
        setOldULN(data[0].lastname);
        setOldUFN(data[0].firstname);
      });
  }, []);

  // on change of the input, set the value to the respective states
  const onChangeFS = (e) => {
    setOldUFN(userFirstName);
    setUserFN(e.target.value);
  };
  const onChangeLS = (e) => {
    setOldULN(userLastName);
    setUserLN(e.target.value);
  };

  // on submit, update the user's first and last name in the backend
  const onSubmit = (e) => {
    const url = "http://localhost:8080/users" + "/1/" + userFirstName + "/" + userLastName + "/";
    e.preventDefault();
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: userFirstName,
        lastname: userLastName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
      });
      // set the visibility of the undo button to true
      setUndoVisibility(true);
      // set it to false after 10 seconds
      setTimeout(() => {
        setUndoVisibility(false);
      }
      , 10000);
  };




  return (
    <Layout>
      <Header className="navbar">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navbarItems}
        ></Menu>
        <Button className="navbar-button">-</Button>
        <div className="logo">
          <img
            src="https://www.getbaraka.com/wp-content/uploads/2020/10/barak-logo.svg"
            alt="barak-logo"
          />
        </div>
        <div className="admin">Osama</div>
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
              <h1>{userFirstName} {userLastName}</h1>
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
                        <Input onChange={onChangeFS} value={userFirstName} />
                      </Col>
                      <Col span={12}>
                        <Input onChange={onChangeLS} value={userLastName} />
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
                    <p></p>
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
              </Content>
                <Button onClick={onSubmit} type="primary" style={{marginLeft:20, marginBottom:20}}>Save</Button>
                {undoVisibility ? (
                  <Button onClick={() => {
                    setUserLN(oldULN);
                    setUserFN(oldUFN);
                    setUndoVisibility(false);
                  }} type="primary" style={{marginLeft:20, marginBottom:20}}>Undo</Button>
                ) : (
                  <div></div>
                )}

            </Content>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Layoutt;

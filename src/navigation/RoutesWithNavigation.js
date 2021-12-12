import React, { Component } from "react";
import "../../App.css";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import Copyrights from "./Footer";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      windowWidth: 0,
      currentPage: "",
      sideNavToggled: false,
      breakWidth: 1400,
    };
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.assessLocation(this.props.location.pathname);
    }
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.assessLocation(this.props.location.pathname);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  toggleSideNav = () => {
    if (this.state.windowWidth < this.state.breakWidth) {
      this.setState({
        sideNavToggled: !this.state.sideNavToggled,
      });
    }
  };

  assessLocation = (location) => {
    let locationString;
    switch (location) {
      // Dashboards:
      case "/dashboards/v1":
        locationString = "Dashboard v.1";
        break;
      // Pages
      case "/withdrawals/index":
        locationString = "All withdrawals";
        break;
      case "/withdrawals/pending":
        locationString = "Pending withdrawals";
        break;
      case "/withdrawals/history":
        locationString = "Withdraws History";
        break;
      case "/mm/config":
        locationString = "Match Making Configurations";
        break;
      case "/mm/patterns":
        locationString = "Match Making Patterns";
        break;
      case "/mm/discovery":
        locationString = "Match Making Discovery";
        break;
      case "/mm/bots/cash":
        locationString = "Cash Bots";
        break;
      case "/mm/bots/token":
        locationString = "Token Bots";
        break;
      case "/pm/player/list":
        locationString = "All Players";
        break;
      case "/pm/player/patterns":
        locationString = "Player Patterns";
        break;
      case "/pm/player/discovery":
        locationString = "Player Discovery";
        break;
      case "/pm/player/support":
        locationString = "Player Support";
        break;
      case "/prize/index":
        locationString = "Prize Redeem Home";
        break;
      case "/prize/pending":
        locationString = "Pending Prize Requests";
        break;
      case "/prize/discovery":
        locationString = "Prize Discovery";
        break;
      case "/prize/history":
        locationString = "Prize Redeem History";
        break;
      case "/tournaments":
        locationString = "Tournament Home";
        break;
      case "/tournaments/config":
        locationString = "Tournament Configurables";
        break;
      case "/tournaments/create":
        locationString = "Create Tournament";
        break;
      case "/tournaments/active":
        locationString = "Active Tournaments";
        break;
      case "/tournaments/patterns":
        locationString = "Tournament Patterns";
        break;
      case "/tournaments/cancelled":
        locationString = "Cancelled Tournaments";
        break;
      case "/tournaments/completed":
        locationString = "Compeleted Tournaments";
        break;
      case "/tournaments/events":
        locationString = "Special Tournaments";
        break;
      default:
    }
    this.setState({
      currentPage: locationString,
    });
  };

  render() {
    const dynamicLeftPadding = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0",
    };

    return (
      <div className="app">
        <div className="white-skin">
          <SideNavigation
            breakWidth={this.state.breakWidth}
            style={{ transition: "all .3s" }}
            triggerOpening={this.state.sideNavToggled}
            onLinkClick={() => this.toggleSideNav()}
          />
        </div>
        <div className="flexible-content white-skin">
          <TopNavigation
            toggle={this.state.windowWidth < this.state.breakWidth}
            onSideNavToggleClick={this.toggleSideNav}
            routeName={this.state.currentPage}
            className="white-skin"
          />
          <main style={{ ...dynamicLeftPadding, margin: "8rem 6% 6rem" }}>
            <Routes onChange={() => this.assessLocation()} />
          </main>
          <Copyrights
            style={{ ...dynamicLeftPadding, position: "fixed", width: "100%" }}
            className="d-none d-lg-block"
          />
        </div>
      </div>
    );
  }
}

export default App;

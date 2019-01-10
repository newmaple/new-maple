import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import segment from "segment";

import Landing from "src/components/Landing";
import Team from "src/components/Team";
import ContactUs from "src/components/ContactUs";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubscribeSection from "./components/SubscribeSection";

@withRouter
class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  componentDidMount() {
    const { location } = this.props;
    segment.page(location.pathname, location.search);
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.location.pathname !== nextProps.location.pathname ||
      this.props.location.search !== nextProps.location.search
    ) {
      segment.page(nextProps.location.pathname, nextProps.location.search);
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div style={{ height: "115px" }} />
        <Switch>
          <Route component={ContactUs} />
          {/* <Route path="/team" component={Team}/>
            <Route exact path="/" component={Landing}/> */}
        </Switch>
        <SubscribeSection />
        <Footer />
      </div>
    );
  }
}

export default App;

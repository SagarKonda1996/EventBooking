import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import EventList from "./EventsList";
import { fetchEvents } from "../Redux/ActionCreators";

//Functions

const mapStateToProps = state => {
  return {
    events: state.events
  };
};
const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

const AppLayout = ({ events, fetchEvents }) => {
  const BookEvent = ({ match }) => {
    return <BookEvent />;
  };
  const Home = () => (
    <EventList
      events={events.events}
      isLoading={events.isLoading}
      err={events.errMess}
    />
  );

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={3000}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/event/:eventId" component={BookEvent} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppLayout)
);

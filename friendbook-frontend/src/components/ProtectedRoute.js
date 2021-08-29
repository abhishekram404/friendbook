import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { isUserLoggedIn } = useSelector((state) => state.user.data);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isUserLoggedIn) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  prevLocation: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

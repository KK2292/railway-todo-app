import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import { EditList } from "../pages/EditList";
import { EditTask } from "../pages/EditTask";
import { Home } from "../pages/Home";
import { NewList } from "../pages/NewList";
import { NewTask } from "../pages/NewTask";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const Router = () => {
  const auth = useSelector((state) => state.auth.isSignIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {auth ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/task/new" component={NewTask} />
            <Route exact path="/list/new" component={NewList} />
            <Route
              exact
              path="/lists/:listId/tasks/:taskId"
              component={EditTask}
            />
            <Route exact path="/lists/:listId/edit" component={EditList} />
          </>
        ) : (
          <Redirect to="/signin" />
        )}
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MessageHeading from "./components/MessageHeading";
import MessageInputBox from "./components/MessageInputBox";
import Message from "./components/Message";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen h-screen bg-white">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <PrivateRoute path="/room/:roomId?">
            <React.Fragment>
              {/* Main Header */}
              <Header />
              <div className="flex-1 flex flex-row overflow-hidden">
                <aside className="bg-slack-light-900 w-260 flex-none  flex flex-col">
                  <SideBar />
                </aside>
                <main className="flex-1 flex flex-col">
                  <MessageHeading />
                  {/* Messages */}
                  <div className="overflow-y-auto flex-1 py-4">
                    <Message />
                    <Message />
                  </div>
                  {/* Input box for input the message */}
                  <MessageInputBox />
                </main>
              </div>
            </React.Fragment>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

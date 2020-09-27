import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MessageHeading from "./components/MessageHeading";
import MessageInputBox from "./components/MessageInputBox";
import Message from "./components/Message";
function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen bg-white">
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
            {/* <AboutChannel /> */}
            <Message />
            <Message />
          </div>
          {/* Input box for input the message */}
          <MessageInputBox />
        </main>
      </div>
    </div>
  );
}

export default App;

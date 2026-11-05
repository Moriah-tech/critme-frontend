
import { useState } from "react";
import Profile from "./pages/Profile";
import Notification from "./pages/notification";
import Inbox from "./pages/inbox";

function App() {
  const [currentPage, setCurrentPage] = useState("profile");

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          padding: "15px",
        }}
      >
        <button onClick={() => setCurrentPage("profile")}>
          Profile
        </button>

        <button onClick={() => setCurrentPage("notification")}>
          Notifications
        </button>

        <button onClick={() => setCurrentPage("inbox")}>
          Inbox
        </button>
      </div>

      {currentPage === "profile" && <Profile />}
      {currentPage === "notification" && <Notification />}
      {currentPage === "inbox" && <Inbox />}
    </div>
  );
}

export default App;

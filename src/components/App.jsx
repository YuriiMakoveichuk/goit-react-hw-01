import { useState } from "react";

import Profile from "./Profile/Profile";
import FriendList from "./Friend/FriendList";
import TransactionHistory from "./TramsactionHistory/TransactionHistory";

import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

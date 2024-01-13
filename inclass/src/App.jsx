import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/Clock";
import ClockDisplay from "./components/ClockDisplay";
import ActivityFinder from "./components/ActivityFinder";
import RefCounter from "./components/RefCounter";
import VideoPlayer from "./components/VideoPlayer";
import ReducerCounter from "./components/ReducerCounter";
import PostListReducer from "./components/PostListReducer";
import SubscribeForm from "./components/SubcribeForm";
import LoginForm from "./components/LoginForm";
import MyThemeProvider from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
          <MyThemeProvider>
            <NavBar />
            <AppRoutes />
            {/* <LoginForm /> */}
            {/* <ClockDisplay /> */}
            {/* <ActivityFinder /> */}
            {/* <RefCounter /> */}
            {/* <VideoPlayer /> */}
            {/* <ReducerCounter /> */}
            {/* <PostListReducer /> */}
            {/* <SubscribeForm /> */}
          </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;

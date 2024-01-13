import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DashboardPage from "../pages/Dashboardpage";
import { DashboardMessages, DashboardTasks } from "../pages/Dashboardpage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from "../components/LoginForm";
import PostsPage, { PostList, Post } from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="login" element={<LoginForm {...props} />} />
      {/* nested routes, will match on /dash/tasks */}
      {/* /dash */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        {/* /dash/messages */}
        <Route path="messages" element={<DashboardMessages {...props} />} />
        {/* /dash/tasks */}
        <Route path="tasks" element={<DashboardTasks {...props} />} />
      </Route>

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <AboutPage {...props} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<PageNotFound />} />
      <Route
        path="posts"
        element={
          <ProtectedRoute>
            <PostsPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route index element={<PostList />} />

        {/*  dynamic ID variable */}
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

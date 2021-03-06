import { BrowserRouter as Router, Route } from "react-router-dom";

// Header and Footer Components
import Header from "./app/Header";
import Footer from "./app/Footer";

// import screens
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BugDetailsScreen from "./screens/BugDetailsScreen";
import BugEditScreen from "./screens/BugEditScreen";
import ProfileSettingsScreen from "./screens/ProfileSettingsScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-dark">
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route exact path="/bug/:id" component={BugDetailsScreen} />
        <Route path="/bug/:id/edit" component={BugEditScreen} />
        <Route exact path="/search/:keyword" component={ProfileScreen} />
        <Route
          exact
          path="/search/:keyword/page/:pageNumber"
          component={ProfileScreen}
        />
        <Route exact path="/page/:pageNumber" component={ProfileScreen} />
        <Route
          exact
          path="/profile/settings"
          component={ProfileSettingsScreen}
        />
        <Route exact path="/profile" component={ProfileScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import SignUpPage from "./pages/SignUpPage"
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/favorites">
            <FavouritesPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

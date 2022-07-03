import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import "./index.scss";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";

const App = () => {
  console.log(process.env);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
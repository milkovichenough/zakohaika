import {HashRouter as Router, Route, Routes} from "react-router-dom";
import App from "./App";
import {MainPage} from "./components/MainPage/MainPage";
import {PlacesPage} from "./components/PlacesPage/PlacesPage";
import {AboutUsPage} from "./components/AboutUsPage/AboutUsPage";
import {ContactsPage} from "./components/ContactsPage/ContactsPage";

export const Root = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<MainPage />} />
                <Route path="places" element={<PlacesPage />} />
                <Route path="about-us" element={<AboutUsPage />} />
                <Route path="contacts" element={<ContactsPage />} />
            </Route>
        </Routes>
    </Router>
);

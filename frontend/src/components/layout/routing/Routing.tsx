import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../meetings/list/List";
import Add from "../../meetings/add/Add";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/meetings/list"/>} />
            <Route path="/meetings/list" element={<List />} />
            <Route path="/meetings/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}

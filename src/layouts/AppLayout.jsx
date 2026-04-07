import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export default function AppLayout() {
    return (
        <>
            <Header />

            <main className="py-5">
                <Outlet />
            </main>
        </>
    )
}
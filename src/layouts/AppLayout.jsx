import { Outlet } from "react-router-dom";


export default function AppLayout() {
    return (
        <>
            <header>Header</header>
            <hr />
            <Outlet />
        </>
    )
}
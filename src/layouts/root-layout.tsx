import Header from "@/components/custom/header";
import { Outlet } from "react-router";

export default function RootLayout(){
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
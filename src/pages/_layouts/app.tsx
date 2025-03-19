import { Header } from "@/components/ui/header"
import { Outlet } from "react-router-dom"

export function AppLayout(){
    return(
        <div>
            <Header />
            <div>
                <Outlet />
                
            </div>
        </div>
    )
}
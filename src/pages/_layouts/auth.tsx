import { Outlet } from "react-router-dom"
import {Ribbon } from 'lucide-react'

export function AuthLayout(){
    return(
        <div className="grid min-h-screen grid-cols-2">
            <div className="flex h-full flex-col justify-between bg-muted border-r border-foreground/5  p-10 text-muted-foreground  ">
            
                <div className="flex items-center gap-3 text-lg text-foreground ">
                    <Ribbon className="h-5 w-5" />
                    <span className="font-semibold ">agenda.psi</span>
                </div>
                        <footer className="text-sm" >
                            Painel do parceiro &copy; agenda.psi - {new Date().getFullYear()}
                        </footer>
            </div>
            
            <div className="relative flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
}
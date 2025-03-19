import { createBrowserRouter } from "react-router-dom";
import { Calendario } from "./pages/app/Calendar/Calendar";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import { Patients } from "./pages/app/patients/patients";
import MyCalendar from "./pages/app/RegisterPatient/RegisterPatient";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {path:'/', element: <Calendario />},
            {path:'/patients', element: <Patients />},
            {path:'/cadastro', element: <MyCalendar />},
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {path:'/sign-in', element: <SignIn />},
            {path:'/sign-up', element: <SignUp />}
        ]
    }

])
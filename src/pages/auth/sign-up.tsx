import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Helmet } from "react-helmet-async"
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { toast } from "sonner"
import { Link } from "react-router-dom"

const signUpForm = z.object({
    email: z.string().email(),
    managerName: z.string(),
    phone: z.string()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp(){
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>()
    
    async function handleSignUp(data: SignUpForm){
        try{
            console.log(data);

            
            await new Promise(resolve => setTimeout(resolve, 2000))
            

        } catch {
            toast.error("Credenciais inválidas.")
        }
    }
    return (
    <div>
        <Helmet title="Cadastro" />
        <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-4 top-8">
            <Link to="/sign-in" >
            Fazer login
            </Link>
            </Button>
            <div className="w-[350px] flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
                    <p className="text-sm text-muted-foreground">Seja um parceiro e comece seus atendimentos</p>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                    
                    <div className="space-y-2">
                    <Label htmlFor="managerName">Seu nome</Label>
                    <Input id="managerName" type="email" {...register("managerName")}/>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="email">Seu email</Label>
                    <Input id="email" type="email" {...register("email")}/>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="phone">Seu celular</Label>
                    <Input id="phone" type="tel" {...register("phone")}/>
                    </div>
                    <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button> 
                </form>
            </div>
          </div>
        </div>
        )
}
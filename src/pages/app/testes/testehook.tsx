import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import * as z from 'zod'

const registerSessionFormSchema = z.object({
    pacientName: z.string(),
    modalidade: z.boolean(),
    valor: z.number(),
    id: z.number(),
    tipo: z.boolean(),
    idade: z.number(),
})

type RegisterFormInput = z.infer<typeof registerSessionFormSchema>;

export function Testeformulario(){
    const {
        register, 
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<RegisterFormInput>({
        resolver: zodResolver(registerSessionFormSchema),
    })


    
    function cadastrarPaciente(data:RegisterFormInput){
        console.log(data)
    }


    return(
        <div>
            <form onSubmit={handleSubmit(cadastrarPaciente)}>
            
            <Input 
            type="text"
            placeholder="nome do paciente"
            {...register('pacientName')}/>
            
            <Input 
            type="text"
            placeholder="modalidade atendimento"
            {...register('modalidade')}/>
            
            <Input 
            type="text"
            placeholder="idade do paciente"
            {...register('idade')}/>
            
            <Input 
            type="text"
            placeholder="valor da consulta"
            {...register('valor')}/>
            
            

            <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>
            </form>
            
        </div>
    )
}
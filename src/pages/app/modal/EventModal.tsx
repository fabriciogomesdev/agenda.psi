
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


export function EventModal({events, onClose}: any){
  
    return(
        <div className='fixed inset-0 w-full h-full bg-red flex justify-center items-center z-[9999]'>
            
            <div className='bg-white p-5 rounded-lg shadow-lg z-[10000]'>
            
                <h2>{events.title}</h2>
                <p>{events.desc}</p>
                <p>Início: {events.start}</p>
                <p>Fim: {events.end}</p>
                <Button onClick={onClose}>Fechar</Button>

            </div>
            
        </div>
    )
}


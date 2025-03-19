import { Helmet } from "react-helmet-async";
import moment, { Moment } from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import './CalendarStyles.css'
import { useState } from "react";
import { EventModal } from "../modal/EventModal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";



moment.locale("pt-br");



const newAppointmentFormSchema = z.object({
    name: z.string(),
    price: z.number(),
    age: z.number(),
    contact: z.string(),
    modalty: z.enum(['presencial', 'online']),

})

type NewAppointmentFormInputs = z.infer<typeof newAppointmentFormSchema>;

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export function Calendario() {

    const {
        register,
        handleSubmit,
        control,
    } = useForm<NewAppointmentFormInputs>({
        resolver: zodResolver(newAppointmentFormSchema)
    })

    const [events, setEvents] = useState([{
        id: 1,
        title: 'Atividade 1',
        start: new Date(2025, 1, 19, 10, 0),
        end: new Date(2025, 1, 20, 15, 0),
        desc: 'Nossa primeira atividade',
        color: 'rgb(94, 164, 221)',
        tipo: 'atividade',
    },
    {
        id: 2,
        title: 'Atividade 2',
        start: new Date(2025, 1, 21, 10, 0),
        end: new Date(2025, 1, 22, 15, 0),
        desc: 'Nossa segunda atividade',
        color: 'green',
        tipo: 'atividade',
    }
    ])


    interface State {

        start: Date | null;
        end: Date | null;

    }

    const [selectedEvent, SetselectedEvent] = useState(null);
    const [isSlotSelected, SetSlotSelected] = useState(false);
    const [selectedSlotContent, SetselectedSlotContent] = useState<State>();
    const [selectedDateMiniCalendar, setSelectedDateMiniCalendar] = useState<Moment | null>(moment());
    const [botaoAtivo, setBotaoAtivo] = useState<boolean | null>(null);

    const [currentDate, setCurrentDate] = useState<Date>(new Date());


    // Função para lidar com o clique no botão
    const handleClique = (botao: boolean) => {
        setBotaoAtivo(botao === botaoAtivo ? null : botao); // Alterna o estado do botão clicado
        console.log(botaoAtivo)
    };

    const eventStyle = (event: any) => ({
        style: {
            backgroundColor: event.color,
        },
    })

    const moveEvent = (data: any) => {
        const { start, end } = data;
        const updatedEvents = events.map((event) => {
            if (event.id === data.event.id) {
                return {
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                };
            }
            return event;
        });
        setEvents(updatedEvents)
    }

    interface SlotInfo {
        start: Date;
        end: Date;
    }

    const handleSlotSelected = (slotInfo: SlotInfo): void => {

        SetselectedSlotContent(slotInfo);

        SetSlotSelected(true)

    };




    const handleEventClick = (events: any) => {
        SetselectedEvent(events);
    }

    const handleEventClose = () => {
        SetselectedEvent(null);
    }

    const startTime = new Date();
    startTime.setHours(5, 0, 0, 0);

    const handleMiniCalendarSelectedDay = (date: Moment | null) => {

        if (date) {
            setSelectedDateMiniCalendar(date);
            setCurrentDate(date.toDate());
        }

    };

    const handleNavigate = (newDate: Date) => {
        setCurrentDate(newDate);
    }

    function handleCreateNewAppointment(data: NewAppointmentFormInputs) {
        console.log(data)
    }

    const [selectedValue, setSelectedValue] = useState("online");

    const handleSelectModalty = (isOnline: any) => {
        setSelectedValue(isOnline ? "online" : "presencial");
        console.log();
    
        // Outra lógica aqui
    };

    return (
        <div className={cn('flex bg-calendar ')}>
            <Helmet title="Dashboard" />

            <div className={cn('flex bg-primary-foreground ')}>

                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateCalendar
                        value={selectedDateMiniCalendar}
                        onChange={handleMiniCalendarSelectedDay}

                        sx={{
                            width: 200, // Define a largura desejada
                            maxWidth: '100%', // Garante que não ultrapasse o contêiner

                        }}
                    >

                    </DateCalendar>

                </LocalizationProvider>


            </div>
            <div className={cn('flex-1 ')}>

                <DragAndDropCalendar
                    onNavigate={handleNavigate}
                    defaultView="week"
                    events={events}
                    localizer={localizer}
                    resizable
                    onEventDrop={moveEvent}
                    onEventResize={moveEvent}
                    eventPropGetter={eventStyle}
                    className="calendar "
                    selectable={true}
                    onSelectEvent={handleEventClick}
                    onSelectSlot={handleSlotSelected}
                    min={startTime}
                    culture="pt-BR"
                    date={currentDate}
                    messages={{
                        today: "Hoje",
                        previous: "Anterior",
                        next: "Próximo",
                        month: "Mês",
                        week: "Semana",
                        day: "Dia",
                        agenda: "Agenda",
                        date: "Data",
                        time: "Hora",
                        event: "Evento",
                        noEventsInRange: "Nenhum evento no período.",
                        showMore: (total) => `+${total} mais`,
                    }}

                />
                {selectedEvent && (
                    <EventModal
                        events={events}
                        onClose={selectedEvent}
                    />
                )}
                <Dialog open={isSlotSelected} onOpenChange={SetSlotSelected}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="items-center">
                            <DialogTitle>Cadastro de Consulta</DialogTitle>
                            <DialogDescription>
                                Insira os dados da consulta
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit(handleCreateNewAppointment)} className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Paciente
                                </Label>
                                <Input
                                    id="name"
                                    className="col-span-3"
                                    {...register('name')}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="contact" className="text-right">
                                    Contato
                                </Label>
                                <Input
                                    id="contact"
                                    className="col-span-3"
                                    {...register('contact')}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="age" className="text-right">
                                    Idade
                                </Label>
                                <Input
                                    id="age"
                                    className="col-span-3"
                                    {...register('age', { valueAsNumber: true })}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="price" className="text-right">
                                    Valor
                                </Label>
                                <Input
                                    type="number"
                                    id="price"
                                    className="col-span-3"
                                    {...register('price', { valueAsNumber: true })}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="modalty" className="text-right">
                                    Modalidade
                                </Label>


                                <Controller
                                    control={control}
                                    name="modalty"
                                    render={({ field }) => {
                                        console.log(field)
                                        return (
                                            <div className="flex gap-2.5 justify-between">
                                                <RadioGroup onValueChange={field.onChange} className="flex gap-2.5" value={field.value}>
                                                    {/* Botão Online */}
                                                    <label
                                                        htmlFor="online"
                                                        className={`px-5 py-2.5 ${
                                                            botaoAtivo === true ? "bg-blue-500" : "bg-gray-500"
                                                          } text-white border-none rounded-md cursor-pointer`}
                                                        
                                                    >
                                                        <RadioGroupItem value="online" id="online" className="hidden" onClick={() => handleClique(true)}/>
                                                        Online
                                                    </label>

                                                    {/* Botão Presencial */}
                                                    <label
                                                        htmlFor="presencial"
                                                        className={`px-5 py-2.5 ${
                                                            botaoAtivo === false ? "bg-blue-500" : "bg-gray-500"
                                                          } text-white border-none rounded-md cursor-pointer`}
                                                    >
                                                        <RadioGroupItem value="presencial" id="presencial" className="hidden"  onClick={() => handleClique(false)}/>
                                                        Presencial
                                                    </label>
                                                </RadioGroup>
                                            </div>
                                        )
                                    }}
                                />


                            </div>


                            <DialogFooter>
                                <Button type="submit">Cadastrar consulta</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>


            </div>
        </div>
    )
}
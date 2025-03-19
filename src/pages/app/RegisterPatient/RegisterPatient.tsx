import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '@/App.css'

// Define o tipo para os eventos
interface Event {
    title: string;
    start: Date;
    end: Date;
}

// Configura o localizador para usar o moment
const localizer = momentLocalizer(moment);

// Função para verificar se uma data é o dia escolhido
const isSelectedDay = (date: Date, selectedDate: Date): boolean => {
    return (
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear()
    );
};

// Data que você quer destacar (exemplo: 25 de outubro de 2023)
const selectedDate = new Date(2023, 9, 25); // Mês é 0-based (9 = outubro)

// Função para aplicar estilos ao dia escolhido
const dayPropGetter = (date: Date) => {
    if (isSelectedDay(date, selectedDate)) {
        return {
            className: "rbc-selected-day", // Classe personalizada
        };
    }
    return {};
};

// Componente principal do calendário
const MyCalendar: React.FC = () => {
    // Exemplo de eventos
    const dataString = "Wed Mar 26 2025 07:00:00 GMT-0300 (Horário Padrão de Brasília)";
const dataObj = new Date(dataString); // Converte a string para um objeto Date
console.log(dataObj); // Saída: Wed Mar 05 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)
    const dataStringd = "Wed Mar 26 2025 12:30:00 GMT-0300 (Horário Padrão de Brasília)";
    const dataObjd = new Date(dataStringd)
//Wed Mar 26 2025 12:30:00 GMT-0300 (Horário Padrão de Brasília)
    const events: Event[] = [
        {
            title: "Evento no Dia Escolhido",
            start: dataObj, // 25 de outubro de 2023
            end: dataObjd,
        },
        {
            title: "Outro Evento",
            start: new Date(2023, 9, 30), // 30 de outubro de 2023
            end: new Date(2023, 9, 30),
        },
    ];

    // Encontra a data do primeiro evento
    const defaultDate = events.length > 0 ? events[0].start : new Date();

    return (
        <div style={{ height: "500px" }}>
            {/* Componente do calendário */}
            <Calendar
                localizer={localizer}
                events={events} // Eventos no calendário
                defaultView="week" // Abre na visualização de semana
                defaultDate={defaultDate} // Define a data inicial como a do primeiro evento
                dayPropGetter={dayPropGetter} // Aplica a lógica personalizada
            />
        </div>
    );
};

export default MyCalendar;


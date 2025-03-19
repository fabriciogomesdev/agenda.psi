import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import moment, {Moment} from 'moment';
import { useState } from 'react';



export function MiniCalendar() {
  
  const [selectedDate, setSelectedDate] = useState<Moment | null>(moment());
  
  const handleminiCalendarSelectedDay = (date: Moment | null) => {
    setSelectedDate(date);
    console.log(date?.format("DD/MM/YYYY"))

  }
  handleminiCalendarSelectedDay
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateCalendar 
      value={selectedDate}
      onChange={handleminiCalendarSelectedDay}
      
      sx={{
        width: 200, // Define a largura desejada
        maxWidth: '100%', // Garante que não ultrapasse o contêiner
        
      }}
      >
        
      </DateCalendar>
      
    </LocalizationProvider>
  );
}
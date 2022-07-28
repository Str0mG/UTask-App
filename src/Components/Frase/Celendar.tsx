import React from "react";
import {Calendar} from 'react-native-calendars';


const Calendario = () => {
    
    return (
        <Calendar
            style={{
                
                padding: 10,
                borderRadius: 20,
            }}
            theme={{

                calendarBackground: 'none',
                textSectionTitleColor: '#FFAFAF',
                selectedDayBackgroundColor: '#3867D6',
                textDisabledColor: '#d9e1e8',
                selectedDayTextColor: '#FFAFAF',
                todayTextColor: '#226ED8',
                dayTextColor: '#7d7c7c',
                
                monthTextColor: '#7d7c7c',
                arrowColor: '#226ED8',
                disabledArrowColor: '#FFAFAF',
              }}
              calendarWidth={400}
        />
    );
}

export default Calendario;
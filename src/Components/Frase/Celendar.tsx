import React from "react";
import {Calendar} from 'react-native-calendars';


const Calendario = () => {
    
    return (
        <Calendar
            style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
            }}
            theme={{
                calendarBackground: '#3D3D3D',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#3867D6',
                selectedDayTextColor: '#226ED8',
                todayTextColor: '#226ED8',
                dayTextColor: '#ffffff',
                textSectionTitleDisabledColor: '#bbc3c9',
                monthTextColor: '#ffffff',
                arrowColor: '#226ED8',
              }}
        />
    );
}

export default Calendario;
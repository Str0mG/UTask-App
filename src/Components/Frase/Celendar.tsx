import React from "react";
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

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
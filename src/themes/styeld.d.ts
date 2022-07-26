// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        headerTitle: string;
        headerContainer: string;
        backgroundScreen: string;
        backgroundRaia:string;
        backgroundTask:string;
        text:string;
        trash:string;
        hideDesc:string;
        input:string,
        borderModal: string,
        headerKanban:string,
        indicatorTab:string,
        backgroudBottomTab:string,
        backgroundApi:string,
        insight:string,
        


    },
    images:{
        logoUnect:any;
        
    }
  }
}
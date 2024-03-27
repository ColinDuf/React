const tintColorLight = '#2f98dc';
const tintColorDark = '#fff';
const tintColorBlue = '#6677dc';

export default {
    light: {
        dark: false,
        colors :{
            primary: 'rgb(0,122,255)',
            card: 'rgb(255,255,255)',
            border: 'rgb(216,216,216)',
            notification: 'rgb(255,59,48)',
            text: '#000',
            backround: '#fff',
            tint: tintColorLight,
            tabIconDefault: "#ccc",
            tabIconSelected: tintColorLight, 
        }
    },
    dark: {
        dark: true,
        colors :{
            primary: 'rgb(0,122,255)',
            card: 'rgb(0,0,0)',
            border: 'rgb(216,216,216)',
            notification: 'rgb(255,59,48)',
            text: '#fff',
            backround: '#333',
            tint: tintColorDark,
            tabIconDefault: "#333",
            tabIconSelected: tintColorDark, 
        }
    },
    blue: {
        dark: true,
        colors :{
            primary: 'rgb(0,10,100)',
            card: 'rgb(50,150,190)',
            border: 'rgb(216,216,216)',
            notification: 'rgb(255,59,48)',
            text: '#338',
            backround: '#c8ccf7',
            tint: tintColorBlue,
            tabIconDefault: "#ccc",
            tabIconSelected: tintColorBlue, 
        }
    },
}
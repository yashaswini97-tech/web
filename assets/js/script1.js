const options = {
  //  bottom: '170px', // default: '32px'
    right: '20px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#000',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓 ', // default: ''
    autoMatchOsTheme: true, // default: true
  
   
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  
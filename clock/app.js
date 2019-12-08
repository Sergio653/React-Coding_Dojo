
var myTime = setInterval(myDate,1000)
function myDate(){
    var date = new Date();
    const timer = React.createElement('p',null,` The date is ${date}`)
    ReactDOM.render(timer,document.getElementById('app'))
}


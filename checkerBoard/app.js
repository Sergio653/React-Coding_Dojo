function CheckerBoard (props) {
    return /*Some UI... perhaps a list of rows?*/
  }
  function Row (props) {
    return /*Some UI... perhaps a list of cells?*/
  }
  function Cell (props) {
    return React.createElement('div',{            style: styles.cell,
        style: styles.colorA})
  }
  // And feel free to use the following object:
  var styles = {
    row: {height: '20px'},
    cell: {height: '20px', width: '20px', display:'inline-block'},
    colorA: {backgroundColor: 'black'},
    colorB: {backgroundColor: 'red'}
  }

const black = (props) =>{
    return React.createElement(
        "div",
        {
            style: styles.cell,
            style: styles.colorA
        }
    )
}

ReactDOM.render(
    Cell(),
    document.getElementById('app')
)
import {useState} from 'react'
import {Badge, Button} from 'react-bootstrap'
function ButtonIncrement(props) {
    console.log(props)
    return (
        // <Button style={{height:"15px",width:"15px"}} onClick={props.onClickFunc}>
        //     +
        // </Button>
        <Badge className="bg-success" pill  onClick={() => {props.onClickFunc();props.c()}}>+</Badge>

    )
}

function ButtonDecrement(props) {
    return (
        // <Button style={{height:"15px",width:"15px"}} onClick={props.onClickFunc}>
        //   <div>
        //     -
        //   </div>
        // </Button>
            <Badge pill  className="bg-success" onClick={props.onClickFunc}>-</Badge>
    )
}

function Display(props) {
    return (
        <label style={{marginLeft:'.5rem'}}>{props.message}</label>
    )
}

export function IncrementDecrement(prop) {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter +1);
    let decrementCounter   = () => setCounter(counter - 1);

    if (counter<=1){
      decrementCounter = ()=>setCounter(1);
    }
  return (
    <div>
        <ButtonIncrement onClickFunc= {incrementCounter} c = {prop.a}/>
        <label style={{marginLeft:'.5rem'}}>{counter}</label>
        <Display message={counter}/>
        <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  )
}


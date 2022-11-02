import React from 'react';
import {connect} from 'react-redux';
 function Counter(props) {
    console.log(props);
    const { 
        countProp: { count },
        increase,
        decrease,
    } = props;
  return(
    <div className="bg-dark p-5 text-center text-light">
        <h1>Hello Counter Component</h1>
        <span className="fw-bold fs-3">Count : {count} </span>
        <button className= " btn btn-primary mx-3" onClick={increase}> + </button>
        <button className= " btn btn-warning mx-3" onClick={decrease}> - </button>
    </div>
  );
}

let mapStateToProps = (state) =>{
    return {
        countProp: state.counter, 
        };
};
let mapDispatchToProps = (distach)=>{
    return{
        increase:() => distach({type:"INCREASE"}),
        decrease:() =>  distach({type:"DECREASE"}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

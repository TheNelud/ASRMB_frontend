import React from 'react';
import Plot from 'react-plotly.js';
import './style.css'

const Plotly = ({values}) => {
    console.log(values)
    let [state, setState] = React.useState()
    // React.useEffect(()=>{
    //     setState(values.map((value, key) => {
    //         return Number(value.calculated_mass)}))
    // })
    // setState(values.map((value, key) => {return Number(value.calculated_mass)}))
    // let array_name = values.map((value, key) => {return value.name})
    // state = values.map((value, key) => {return Number(value.calculated_mass)})
    let values_cm = values.map((value, key) => {return Number(value.calculated_mass)})
    values_cm.pop()
    let labels_name = values.map((value, key) => {return value.name})
    labels_name.pop()

    const data = [
        {
            values: values_cm,
            labels: labels_name,
            type: 'pie'
        }
    ];

    return(
      <div className='div-pie'>
          <Plot data ={data}/>
      </div>



  )
}



export default Plotly
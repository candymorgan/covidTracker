import logo from "./logo.svg";
import React, {useReducer, useEffect, useState} from "react";
import Axios from 'axios';
import "./App.css";
import Covid19 from "./Components/Covid19";
import Navbar from "./Components/Navbar";
import GlobalStats from "./Components/GlobalStats";
import TopAfectedCountries from "./Components/TopAfectedCountries";
import Symptoms from "./Components/Symptoms";
import Protection from "./Components/Protection";
import Footer from "./Components/Footer";



const initialState = {
  loading: true,
  cases: {},
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCESS':
      return{
        loading: false,
        cases: action.payload
      }
  }

  }
 

function App() {

  const [cases, setCases] = useState({})
  const [loading, setloading] = useState(true)

  // useEffect(() =>{
  //   fetch('https://api.covid19api.com/summary')
  //   .then(res => {
  //     console.log(res);
  //     setloading(false)
  //   })  
  // }, [])
  
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    Axios.get('https://api.covid19api.com/summary')
    .then(res => {
      dispatch({type:'FETCH_SUCESS', payload: res.data})
    })

  }, [])
  return (
    <div className="App">
      <Navbar />
      <div className="littleCircle"></div>

      <div className="parentContainer">
        <div className="covidTracker">
          <h2>COVID-19 Tracker</h2>
        </div>

        <div className="container2">
          <div className="childContainer1">
            <GlobalStats
              color="total"
              title="Total Cases"
              caseCount={state.loading ?  "Loading....." : state.cases.Global.TotalConfirmed}
              caseDifference={"+" + 23344}
            />
            <GlobalStats
              color="active"
              title="Active Cases"
              caseCount={state.loading ?  "Loading....." : state.cases.Global.NewConfirmed}
              caseDifference={"+" + 23344}
            />
            <GlobalStats
              color="recovered"
              title="Recovered"
              caseCount={state.loading ?  "Loading....." : state.cases.Global.TotalRecovered}
              caseDifference={"+" + 23344}
            />
            <GlobalStats
              color="deaths"
              title="Deaths"
              caseCount={state.loading ?  "Loading....." : state.cases.Global.TotalDeaths}
              caseDifference={"+" + 23344}
            />

            {/* <div className="square1"><div className="circle1"></div></div>
          <div className="square2"><div className="circle2"></div></div>
          <div className="square3"><div className="circle3"></div></div>
          <div className="square4"><div className="circle4"></div></div> */}
          </div>

          <TopAfectedCountries />

          <Symptoms />

          <Protection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

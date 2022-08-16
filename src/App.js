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
  const [dataObj, setDataObj] = useState({})
  const [countries, setCountries] = useState([])
  
  const fetchData = async () => {
    const apiResponse = await fetch('https://disease.sh/v3/covid-19/all')
    const jsonResponse = await apiResponse.json()
    
    setDataObj(jsonResponse)
   
    
  }

  const fetchCountries = async() => {
    const apiCountries = await fetch('https://disease.sh/v3/covid-19/countries')
    const jsonCountries = await apiCountries.json()

    setCountries(jsonCountries)

  }
  console.log(countries, "this is the countries data")

  useEffect(() =>{
    fetchData()
    fetchCountries()
    // fetch('https://api.covid19api.com/summary')
    // .then(res => {
    // if(res.ok) {
    //   return res.json()
    // }
    //   throw res
    // }).then(data => console.log(data, 'data is data') )  
  }, [])
  console.log(dataObj, 'async await')
  
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
              caseCount={dataObj?.cases?.toLocaleString() || "Loading...."}
              caseDifference={"+" + 23344}
            />
            <GlobalStats
              color="active"
              title="Active Cases"
              caseCount={dataObj?.active?.toLocaleString() || "Loading...."}
              // caseCount={state.loading ?  "Loading....." : state.cases.Global.NewConfirmed.toLocaleString()}
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
              caseCount={state.loading ?  "Loading....." : state.cases.Global.TotalDeaths.toLocaleString()}
              caseDifference={"+" + 23344}
            />

            {/* <div className="square1"><div className="circle1"></div></div>
          <div className="square2"><div className="circle2"></div></div>
          <div className="square3"><div className="circle3"></div></div>
          <div className="square4"><div className="circle4"></div></div> */}
          </div>

          <TopAfectedCountries countries={countries} />

          <Symptoms />

          <Protection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

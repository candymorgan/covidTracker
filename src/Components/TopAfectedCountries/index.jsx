import React, { useState, useEffect } from 'react'
import './TopAfectedCountries.css'
import Rectangle34 from '../../Rectangle34.svg'




const TopAfectedCountries = () => {
  const [countryName, setCountryName] = useState("ITALY")
  const [countryObj, setCountryObj] = useState([])
  const [countryCases, setcountryCases] = useState(0)


 useEffect(() => {
  try {
    const fetchCountryData = async () => {
      const countryData = await fetch(`https://disease.sh/v3/covid-19/countries/`)
      const jsonResponse = await countryData.json()
      setCountryObj(jsonResponse)
      console.log(jsonResponse, "this is top affected Api");
      
    }
    fetchCountryData()
    
  } catch (error) {
    console.log("here's an error", error);
  }

 }, [])
 
   
 
 const handleClick = () => {
  setCountryName(countryObj.country)
  setcountryCases(countryObj.cases)
 }
    
  
  return (

    <>
     <div className="childContainer2">
          <div className="childContainer2_Circle">
            <div className="writeUp"><h2>Top Affected Countries</h2></div>
            <div className="childContainer2_Ptag"><p>Last Updated: {new Date().toDateString()} </p></div>
      
            <h3 className="affected">{countryName}</h3>
          </div>


          <div className="generalCaseContainer">
            <div className="countriesContainer">
            <div><h3>Countries</h3></div>
              <div className="cases-grid">
                <div className="countries">
                
                  

                  {
                    
                    countryObj?.map(country => (
                    <div className="country" key={country.country}>
                   <button onClick={handleClick}> 
                     <div className="nameLogo_div2">
                      <div className="countryLogo2">
                      <img src={country?.countryInfo?.flag} alt={country?.country} />
                      </div>
                      <div className="countryName2">{country.country}</div>
                    </div>
                    </button>
                    <div className="figures2">{country.cases}</div>
                  </div>
                  ))

                  
                  
                  }

                  </div>

                  <div className="caseData">

                    
                    <div className='boxes'>Total Cases
                      <h4>{countryCases}</h4>
                    </div>
                    <div className='boxes'>Active Cases
                    <h4>{countryCases}</h4>
                    </div>
                    <div className='boxes'>Recovered
                    <h4>{countryCases}</h4>
                    </div>
                    <div className='boxes'>Total Deaths
                    <h4>{countryCases}</h4>
                    </div>
                    <div className='boxes'>New Cases
                    <h4>{countryCases}</h4>
                    </div>
                    <div className='boxes'>New Deaths
                    <h4>{countryCases}</h4>
                    </div>
                  </div>

                
                <div className="worldmap">
                  <img src={Rectangle34} alt="" />
                </div>
              



            </div>
          </div>



        </div>
        </div>
    </>
  )
}

export default TopAfectedCountries;


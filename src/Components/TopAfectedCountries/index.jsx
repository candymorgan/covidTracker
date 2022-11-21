import React, { useState } from 'react'
import './TopAfectedCountries.css'
import Rectangle34 from '../../Rectangle34.svg'




const TopAfectedCountries = ({countries}) => {
  const [countryName, setCountryName] = useState("ITALY")
  const [countryObj, setCountryObj] = useState({})


 
  const fetchCountryData = async () => {
    const countryData = await fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`)
    const jsonResponse = await countryData.json()
    setCountryObj(jsonResponse)
  }
  // const handleClick = (countryname) => {
  //   setCountryName(countryName)
  //   fetchCountryData()
  // }
    
  
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
                    
                    countries?.map(country => (
                    <div className="country" key={country.country}>
                   <button> 
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
                      <h5>67642687</h5>
                    </div>
                    <div className='boxes'>Active Cases
                    <h5>67642687</h5>
                    </div>
                    <div className='boxes'>Recovered</div>
                    <div className='boxes'>Total Deaths</div>
                    <div className='boxes'>New Cases</div>
                    <div className='boxes'>New Deaths</div>
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


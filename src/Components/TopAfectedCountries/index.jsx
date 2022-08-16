import React from 'react'
import './TopAfectedCountries.css'
import us from '../../🇺🇸.svg'
import it from '../../it.svg'
import ca from '../../ca.svg'
import es from '../../es.svg'
import Rectangle34 from '../../Rectangle34.svg'




const TopAfectedCountries = ({countries}) => {
  return (

    <>
     <div className="childContainer2">
          <div className="childContainer2_Circle">
            <div className="writeUp"><h3>Top Affected Countries</h3></div>
            <div className="childContainer2_Ptag"><p>Last Updated: {new Date().toDateString()} </p></div>
      
            <h3 className="affected">Italy</h3>
          </div>


          <div className="generalCaseContainer">
            <div className="countriesContainer">
              <div className="cases-grid">
                <div className="countries">
                <h3>Countries</h3>
                  

                  {
                    countries?.map(country => (
                    <div className="country" key={country.country}>
                    <div className="nameLogo_div2">
                      <div className="countryLogo2">
                      <img src={country?.countryInfo?.flag} alt={country?.country} />
                      </div>
                      <div className="countryName2">{country.country}</div>
                    </div>
                    <div className="figures2">{country.cases}</div>
                  </div>))
                  }

                  

                
                <div className="worldmap">
                  <img src={Rectangle34} alt="" />
                </div>
              </div>



            </div>
          </div>



        </div>
        </div>
    </>
  )
}

export default TopAfectedCountries ;


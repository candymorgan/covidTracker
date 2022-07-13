import React from 'react'
import './TopAfectedCountries.css'
const TopAfectedCountries = () => {
  return (
    <>
     <div className="childContainer2">
          <div className="childContainer2_Circle">
            <div className="writeUp"><h3>Top Affected Countries</h3></div>
            <div className="childContainer2_Ptag"><p>Last Updated: May 22, 2020</p></div>
          </div>


          <div className="generalCaseContainer">
            <div className="countriesContainer">
              <h3>Countries</h3>
              <div className="cases-grid">
                <div className="countries">
                  <div className="country">
                    <div className="nameLogo_div">
                      <div className="countryLogo1"></div>
                      <div className="countryName1">USA</div>
                    </div>
                    <div className="figures1">1244355637</div>
                  </div>

                  <div className="country">
                    <div className="nameLogo_div2">
                      <div className="countryLogo2"></div>
                      <div className="countryName2">Italy</div>
                    </div>
                    <div className="figures2"></div>
                  </div>

                  <div className="country">
                    <div className="nameLogo_div3">
                      <div className="countryLogo3"></div>
                      <div className="countryName3">Canada</div>
                    </div>
                    <div className="figures3"></div>
                  </div>

                  <div className="country">
                    <div className="nameLogo_div4">
                      <div className="countryLogo4"></div>
                      <div className="countryName4">USA</div>
                    </div>
                    <div className="figures4"></div>
                  </div>
                </div>

                <div className="caseData">yyyyy</div>
                <div className="worldmap">jjjjj</div>
              </div>



            </div>
          </div>



        </div>
    </>
  )
}

export default TopAfectedCountries ;


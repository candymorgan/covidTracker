import React from 'react'
import './TopAfectedCountries.css'
import us from '../../🇺🇸.svg'
import it from '../../it.svg'
import ca from '../../ca.svg'
import es from '../../es.svg'
import Rectangle34 from '../../Rectangle34.svg'




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
                      <div className="countryLogo1">
                        <img src={us} alt="" />
                      </div>
                      <div className="countryName1">USA</div>
                    </div>
                    <div className="figures1">1244355637</div>
                  </div>

                  <div className="country">
                    <div className="nameLogo_div2">
                      <div className="countryLogo2">
                      <img src={it} alt="" />
                      </div>
                      <div className="countryName2">Italy</div>
                    </div>
                    <div className="figures2">65637816273</div>
                  </div>

                  <div className="country">
                    <div className="nameLogo_div3">
                      <div className="countryLogo3">
                      <img src={ca} alt="" />
                      </div>
                      <div className="countryName3">Canada</div>
                    </div>
                    <div className="figures3">65258485217</div>
                  </div>

                  <div className="country">
                    <div className="nameLogo_div4">
                      <div className="countryLogo4">
                      <img src={es} alt="" />
                      </div>
                      <div className="countryName4">USA</div>
                    </div>
                    <div className="figures4">65258415278</div>
                  </div>
                </div>

                <div className="caseData">yyyyy</div>
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

export default TopAfectedCountries ;


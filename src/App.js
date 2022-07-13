import logo from './logo.svg';
import './App.css';
import Covid19 from './Components/Covid19';
import Navbar from './Components/Navbar';
import GlobalStats from './Components/GlobalStats';
import TopAfectedCountries from './Components/TopAfectedCountries';
import Symptoms from './Components/Symptoms';
import Protection from './Components/Protection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="littleCircle"></div>

      <div className="covidTracker">
        <h2>COVID-19 Tracker</h2>
      </div>

      <div className="container2">
        <div className="childContainer1">
          <GlobalStats color="total" title="Total Cases" caseCount={29620000} caseDifference={"+" + 23344} />
          <GlobalStats  color="active" title="Active Cases" caseCount={9620000} caseDifference={"+"+ 23344}/>
          <GlobalStats  color="recovered" title="Recovered" caseCount={5620000} caseDifference={"+" + 23344}/>
          <GlobalStats  color="deaths" title="Deaths" caseCount={8620000} caseDifference={"+" + 23344}/>

        {/* <div className="square1"><div className="circle1"></div></div>
          <div className="square2"><div className="circle2"></div></div>
          <div className="square3"><div className="circle3"></div></div>
          <div className="square4"><div className="circle4"></div></div> */}
        </div>

        <TopAfectedCountries />

        <Symptoms />

        <Protection />

       
        

        




      </div>

      <Footer />  

      

    </div>


  );
}

export default App;


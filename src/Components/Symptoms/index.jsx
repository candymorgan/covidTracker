import React from 'react';
import './Symptoms.css';
import doctor from '../../doctor.svg';

const Symptoms = () => {
  return (
    <div className="childContainer3">
          <div className="leftInfo">
            <button>Corona Virus Symptoms</button>
            <h1>What are the symptoms?</h1>
            <p>People may be sick with the virus for 1 to 14 days
              before developing symptoms. The most common
              symptoms of coronavirus disease (COVID-19) are fever,
              tiredness, and dry cough. Less common symptoms
              are aches and pains, sore throat, diarrhoea, conjuctivitis, headache, loss of taste or smell, a rash on skin or discolouration of fingers or toes. Serious symptoms are difficulty in brething or shortness of breath, ches pain or pressure, loss of speech movement. Most people (about 80%) recover from the disease without needing special treatment. More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.</p>
          </div>
          <div className="rightImage">
              <img src={doctor} alt="Doctor" />
          </div>
        </div>
  )
}
export default Symptoms;

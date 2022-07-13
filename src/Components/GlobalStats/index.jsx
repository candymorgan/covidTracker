import React from 'react'
import './GlobalStats.css'

const GlobalStats = ({color, title, caseCount, caseDifference}) => {
    return (
        <div className={`globalstats ${color}`}>
            <div className={`circle ${color}`}>
                <div className="circle-child">
                    <h1>{title}</h1>
                    <span className={`case-count ${color}`}>{caseCount}</span>
                    <span className="case-difference">{caseDifference}</span>
                </div>
            </div>
        </div>

    )
}
export default GlobalStats;

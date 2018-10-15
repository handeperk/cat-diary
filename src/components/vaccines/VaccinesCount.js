import React from 'react';


const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

const getProgressBarWidth = (width) => {
    return {width};
}

export const VaccinesCount = ({total, fungus, calicivirus, rabies, goal=10}) => (
    <div className="vaccines-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>vaccines</div>
            <div className="fungus"><h3>{fungus}</h3>fungus</div>
            <div className="calicivirus"><h3>{calicivirus}</h3>calicivirus</div>
            <div className="rabies"><h3>{rabies}</h3>rabies</div>

            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
        </div>
    </div>
)


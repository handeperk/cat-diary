import React from 'react';
import { Link } from 'react-router-dom';
import { Vaccine } from './Vaccine';

export const VaccinesList = ({match, days}) => { 
    const filter = match.params.filter;
    const vaccines = filter ? days.filter( vaccine => vaccine.type === filter) : days;
    return (
        <div className="vaccines-list">
            <h3>{filter ? filter : 'All'} Vaccines</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vaccines.map((vaccine, i) => 
                            <Vaccine
                                key={i}
                                {...vaccine}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Calicivirus">
                    Calicivirus
				</Link>
                &#9679;
                <Link to="/list/Rabies">
                    Rabies
				</Link>
                &#9679;
                <Link to="/list/Fungus">
                    Fungus
				</Link>
            </div>            
        </div>
    )
}
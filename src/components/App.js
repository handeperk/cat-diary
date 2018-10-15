import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { VaccinesCount } from './vaccines/VaccinesCount';
import { AddVaccine } from './vaccines/AddVaccine';
import { VaccinesList } from './vaccines/VaccinesList';
import { Error404 } from './Error404';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allVaccines: [
                {
                    name: "Vaccine1",
                    date: "2017-01-01",
                    type: "Calicivirus"
                },
                {
                    name: "Vaccine2",
                    date: "2017-04-05",
                    type: "Rabies"
                },
                {
                    name: "Vaccine3",
                    date: "2017-02-09",
                    type: "Fungus"
                }
            ]
        }
        this.addVaccine = this.addVaccine.bind(this);
    }

    addVaccine(newVaccine) {
        this.setState((prevState) => {
            return {
                allVaccines: [
                ...prevState.allVaccines,
                newVaccine
                ]
            }
        });
    }

    countDays(filter) {
        const { allVaccines } = this.state;
        return allVaccines.filter(vaccine => filter ? vaccine.type === filter : vaccine).length;
    }

    // Switch goes to first matching route
    render () {
        return (
            <div className="app">                
                <Router>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <VaccinesCount
                                    {...props}
                                    total={this.countDays()}
                                    calicivirus={this.countDays('Calicivirus')}
                                    fungus={this.countDays('Fungus')}
                                    rabies={this.countDays('Rabies')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <VaccinesList 
                                    {...props} 
                                    days={this.state.allVaccines}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <VaccinesList
                                    {...props}
                                    days={this.state.allVaccines}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddVaccine
                                    {...props}
                                    newVaccine={this.addVaccine}
                                />
                            )} />
                            <Route component={Error404} />
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
}
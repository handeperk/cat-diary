import React from 'react';

export const AddVaccine = ({newVaccine}) => {
    let date, name, type;
    const submit = (e) => {
        e.preventDefault();
        newVaccine({
            date : date.value,
            name : name.value,
            type : type.value,
        });
        date.value = name.value = type.value = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={submit} className="form black-container">
                <label>
                    <h3>Add a vaccine to your diary</h3>
                    <br />
                    <br />
                    <br />
                </label>
                <label>
                    Date: <br/>
                    <input 
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                <label>
                    Name of the vaccine: <br />
                    <input
                        id="date"
                        type="text"
                        required
                        ref={(input) => name = input} 
                    />
                </label>
                <label>
                    Type: <br />
                    <select ref={(input) => type = input} >
                        <option value="Fungus">Fungus Vaccine</option>
                        <option value="Rabies">Rabies Vaccine</option>
                        <option value="Calicivirus">Feline Calici</option>                   
                    </select>
                </label>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}
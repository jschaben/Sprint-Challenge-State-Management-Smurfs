import React, {useState} from "react";
import {connect} from "react-redux";
import {addSmurf} from "../actions/smurfActions";

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({name: "", age: "", height: ""});

    const handleAddSmurf = e => {
        e.preventDefault();
        props.addSmurf(smurf);
        setSmurf({name: "", age: "", height: ""});
    }

    const handleInputChange = e => {
        e.preventDefault();
        console.log(smurf)
        const {name, value} = e.target;
        setSmurf({...smurf, [name]: value});
    }

    return (
        <div className="smurf-form">
            <form>
                <h2>Add a smurf to your village!</h2>
                <input type="text" name="name" value={smurf.name} onChange={handleInputChange} placeholder ="Name" required />
                <input type='number' name="age" value={smurf.age} onChange={handleInputChange} placeholder = "Age" required />
                <input type="number" name="height" value={smurf.height} onChange={handleInputChange} placeholder = "Height in cm" required />
                <button onClick={handleAddSmurf}>Add a Smurf!</button>
            </form>
        </div>
    );
}

export default connect(() => {}, {addSmurf})(SmurfForm);
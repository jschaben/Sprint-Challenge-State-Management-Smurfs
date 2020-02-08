import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSmurfs} from "../actions/smurfActions";

import Smurf from "./Smurf";

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);
    return (
        <div className="smurfs-wrapper">
            {props.smurfs === 0 ? <h2>Loading Smurfs</h2> : props.smurfs.map(smurf => (<Smurf smurf={smurf} key={smurf.name} />))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(Smurfs);
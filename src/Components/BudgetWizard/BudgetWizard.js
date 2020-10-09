import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

const BudgetWizard = props => {
    let [income, setIncome] = useState(''),
        [bills, setBills] = useState(''),
        [shopping, setShopping] = useState(''),
        [gasTravel, setGasTravel] = useState(''),
        [goingOut, setGoingOut] = useState(''),
        [savings, setSavings] = useState(''),
        [other, setOther] = useState('');

    const createBudget = (e) => {
        const {user_id} = props.user;
        e.preventDefault();
        axios.post('/api/budget', {user_id, income, bills, shopping, gasTravel, goingOut, savings, other})
            .then(() => {
                props.history.push('/dashboard')
            })
            .catch(err => console.log(err));
    }

    console.log(props.user)
    
    return (
        <main>
            <form>
                <input value={income} onChange={e => setIncome(e.target.value)}/>
                <input value={bills} onChange={e => setBills(e.target.value)}/>
                <input value={shopping} onChange={e => setShopping(e.target.value)}/>
                <input value={gasTravel} onChange={e => setGasTravel(e.target.value)}/>
                <input value={goingOut} onChange={e => setGoingOut(e.target.value)}/>
                <input value={savings} onChange={e => setSavings(e.target.value)}/>
                <input value={other} onChange={e => setOther(e.target.value)}/>
                <button onClick={e => createBudget(e)}>Create</button>
            </form>
        </main>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(BudgetWizard);
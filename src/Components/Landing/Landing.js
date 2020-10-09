import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

const Landing = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [verPassword, setVerPassword] = useState(''),
        [registerView, setRegisterView] = useState(false);

    const register = () => {
        if(password && password === verPassword){
            axios.post('/api/register', {firstName, lastName, email, password})
                .then(res => {
                    props.getUser(res.data);
                    props.history.push('/dashboard');
                })
                .catch(err => console.log(err));
        }
    }

    const login = () => {
        axios.post('/api/login', {email, password})
            .then(res => {
                props.getUser(res.data);
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    }

    return (
        <main>
            {registerView ? <h3>Sign up</h3> : <h3>Sign in</h3>}
            <form>
                {registerView
                ? (
                    <>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </>
                )
                : null}
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                {registerView
                ? (
                    <>
                        <input type='password' value={verPassword} onChange={e => setVerPassword(e.target.value)}/>
                        <button onClick={register}>Register</button>
                        <p>Have an account? <span onClick={() => setRegisterView(false)}>Sign in here</span></p>
                    </>
                )
                : (
                    <>
                        <button onClick={login}>Log in</button>
                        <p>Don't have an account? <span onClick={() => setRegisterView(true)}>Sign up here</span></p>
                    </>
                )}
            </form>
        </main>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Landing);
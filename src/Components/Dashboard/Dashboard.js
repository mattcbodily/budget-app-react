import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

const Dashboard = props => {
    let [budget, setBudget] = useState({});

    useEffect(() => {
        axios.get(`/api/budget/${props.user.user_id}`)
            .then(res => {
                setBudget(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <main>
            <Doughnut 
                height={100}
                width={100}
                data={{
                datasets: [{
                    label: 'Budget',
                    backgroundColor: ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B'],
                    borderColor: '#F2F2F2',
                    data: [budget.bills, budget.shopping, budget.gas_travel, budget.going_out, budget.savings, budget.other]
                }]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 60
                }}/>
        </main>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
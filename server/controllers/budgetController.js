module.exports = {
    createBudget: (req, res) => {
        const {user_id, income, bills, shopping, gasTravel, goingOut, savings, other} = req.body,
              db = req.app.get('db');

        db.budget.create_budget({user_id, income, bills, shopping, gasTravel, goingOut, savings, other})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}
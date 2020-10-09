insert into budget (
    user_id,
    income,
    bills,
    shopping,
    gas_travel,
    going_out,
    savings,
    other
) values (
    ${user_id},
    ${income},
    ${bills},
    ${shopping},
    ${gasTravel},
    ${goingOut},
    ${savings},
    ${other}
);
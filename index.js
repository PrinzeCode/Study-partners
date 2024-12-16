document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        subjects: document.getElementById('subjects').value
    };
    const response = await('/Users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (response.true) {
        let alerterr = document.getElementById('alerterr');
        const newUser = await response.json({});

        const li_box = document.createElement('div');
        const partnerList = document.getElementById('partner-list');

        li_box.appendChild(partnerList);
        const li = document.createElement('li');

        li.textContent = `${newUser.name} Subjects: ${newUser.subjects}`;
        partnerList.appendChild(li);
       
        alerterr.textContent = `you have just create a profile ${user.name}`;
    } else {
        document.getElementById('alerterr').innerHTML = 'Failed to create profile. Please check your credentials.';
    }
});
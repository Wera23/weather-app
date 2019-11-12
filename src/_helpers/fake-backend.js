export function configureFakeBackend() {
    let users = [
        { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', city: 'Katowice', country: 'Poland', isAdmin: false },
        { id: 2, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Adminiski', city: 'Tychy', country: 'Poland', isAdmin: true },
        { id: 3, username: 'wera', password: 'wera', firstName: 'Weronika', lastName: 'Chodanionek', city: 'Tychy', country: 'Poland', isAdmin: false },
        { id: 4, username: 'kuba', password: 'kuba', firstName: 'Kuba', lastName: 'Bergel', city: 'Czechowice-Dziedzice', country: 'Poland', isAdmin: false }
    ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);

                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            city: user.city,
                            country: user.country,
                            isAdmin: user.isAdmin
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                if (url.endsWith('/users') && opts.method === 'GET') {
                    let user = JSON.parse(localStorage.getItem('user'));
                    if (opts.headers && opts.headers.Authorization === `Basic ${user.authdata}`) {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        resolve({ status: 401, text: () => Promise.resolve() });
                    }

                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
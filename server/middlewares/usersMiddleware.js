module.exports = (() => {
    const datosCompletos = (req, res, next) => {
        const { name, lastName, age, nationality, passport } = req.body;

        if (!name) res.send('Name is missing.');
        if (!lastName) res.send('Last Name is missing.');
        if (!age) res.send('Age is missing.');
        if (!passport) res.send('Passport is missing');
        if (!nationality) res.send('Nationality is missing');

        next();
    };

    const datosPrimitivos = (req, res, next) => {
        const { name, lastName, age, nationality } = req.body;

        if (typeof(name) != 'string') res.send('The name should be only text.');
        if (typeof(lastName) !='string') res.send('The lastName should be only text.');
        if (typeof(age) !='number') res.send('The age should be numeric.');
        if (typeof(nationality) !='string') res.send('The nationality should be only text.');

        next();
    };

    const datosValidos = (req, res, next) => {
        const { name, lastName, age  } = req.body;

        if (name.trim().length > 30) res.send('30 chars length max.');
        if (lastName.trim().length > 30) res.send('30 chars length max.');
        if (age < 0 || age > 30) res.send('Age between 1 and 30.');

        next();
    };

    return {
        datosCompletos,
        datosPrimitivos,
        datosValidos
    }
})();
module.exports = (() => {

    const completeData = (req, res, next) => {
        const { name, category, address, phone, rfc} = req.body;

        if (!name) res.send('Name is missing.');
        if (!category) res.send('Category value is missing.');
        if (!phone) res.send('Phone number is missing.');
        if (!address) res.send('Address is missing');
        if (!rfc) res.send('RFC is missing');

        next();
    };

    const validateProducts = (req, res, next) => {
        const { _id, brand, price, stock, guarantee } = req.body;

        if (!_id) res.send('Name is missing.');
        if (!brand) res.send('Brand is missing.');
        if (!price) res.send('Price number is missing.');
        if (!stock) res.send('Stock is missing');
        if (!guarantee) res.send('RFC is missing');

        next();
    };

    const primitiveData = (req, res, next) => {
        const { name, category, address, phone, rfc } = req.body;

        if (typeof(name) != 'string') res.send('The name should be only text.');
        if (typeof(category) !='string') res.send('The category should be only text.');
        if (typeof(phone) !='number') res.send('The phone should be only text.');
        if (typeof(rfc) !='string') res.send('The rfc should be only text.');
        if (typeof(address) !='string') res.send('The address should be only text.');

        next();
    };

    const validData = (req, res, next) => {
        const { name, category, phone, address } = req.body;

        if (name.trim().length > 30) res.send('30 chars length max.');
        if (category.trim().length > 30) res.send('30 chars length max.');
        if (address.trim().length > 50) res.send('50 chars length max.');
        if (phone < 0 || phone > 30) res.send('Age between 1 and 30.');

        next();
    };

    return {
        completeData,
        primitiveData,
        validData,
        validateProducts
    }
})();
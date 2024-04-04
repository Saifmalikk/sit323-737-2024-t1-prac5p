const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint for addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

// Endpoint for subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

// Endpoint for multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

// Endpoint for division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers.' });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

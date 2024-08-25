const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? 
                                      [lowercaseAlphabets.sort().pop()] : [];

    const response = {
        "is_success": true,
        "user_id": "bhavesh_saluru_09082003",
        "email": "bhavesh.21bce9264@vitapstudent.ac.in",
        "roll_number": "21BCE9264",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercaseAlphabet
    };

    res.status(200).json(response);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
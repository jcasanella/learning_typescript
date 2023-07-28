import axios from 'axios';

axios.post('http://localhost:3000/users', { 
    name: 'jordi', 
    age: 40 
});

axios.get('http://localhost:3000/1');
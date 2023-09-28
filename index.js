const express= require('express')
const app= express();
const horrorMovies=require('./Routers/HorrorMovies');
const actionMovies=require('./Routers/ActionMovies');

app.use('/movies/horror', horrorMovies);
app.use('/movies/action', actionMovies);

app.get('/', (req, res) => {
    res.send('hello world from node tutorials')
});

app.listen(3000,()=>{
    console.log("running on port 3000")
})
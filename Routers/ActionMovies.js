const express= require('express');
const Joi = require('joi');
const router= express.Router();
router.use(express.json());

function validateMovie(actionMovie){
    const schema = {
        name: Joi.string().min(2).required(),
        year: Joi.number().min(4).required()
    }
    return Joi.validate(actionMovie, schema);
}

const actionMovies=[
    {id:1,MName:'Indiana Jones and the Dial of Destiny',Year:2023},
    {id:2,MName:'The Flash',Year:2023},
    {id:3,MName:'The Equalizer ',Year:2014},
    {id:4,MName:'The Batman',Year:2022},
    {id:5,MName:'Rebel Moon',Year:2021},
    {id:6,MName:' Avatar: The Way of Water',Year:2022},
    {id:7,MName:'Dune ',Year:2021},
    {id:8,MName:'To Catch a Killer ',Year:2023},
    {id:9,MName:' Inception',Year:2010},
    {id:10,MName:'Tenet ',Year:2020}
]
//rendering all (get)
router.get('/',(req,res)=>{
    res.send(actionMovies).status(200);
    })
// rendering by id
router.get('/:id',(req,res)=>{
const result=actionMovies.find(e=>e.id===parseInt(req.params.id));
if(!result) res.status(404).write('not found');
res.send(result);
    })

//post
router.post('/', (req, res) => {
    const result = validateMovie(res.body);
    // const schema = {
    //     name: Joi.string().min(2).required(),
    //     year: Joi.number().min(4).required()
    // }
    // const result = Joi.validate(req.body, schema);
    // console.log('result', result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return
    }
    const actionMovie = {
        id: actionMovies.length + 1,
        name: req.body.name,
        year: req.body.year
    }
    actionMovies.push(actionMovie);
    res.send(actionMovies);
})

//PUT or update
router.put("/:id", (req, res) => {
    const result= validateMovie(req.body);
    // const schema = {
    //     name: Joi.string().min(2).required(),
    //     year: Joi.number().min(4).required()
    // }
    // const actionMovie = Joi.validate(req.body, schema);
    if (result.error) res.status(400).send(actionMovie.error.details[0].error)

    const actionMovie = actionMovies.find(e => e.id === parseInt(req.params.id))
    if (!result) res.status(404).send('the data on this id do not exist')

    actionMovie.MNamename == req.body.name;
    actionMovie.Year == req.body.year;
    res.send(actionMovie);
})


//delete the entry

router.delete("/:id",(req,res)=>{
    const result= actionMovies.find(e=>e.id===parseInt(req.params.id));
    if(!result) res.status(404).send("this data not found :((")

    const index= actionMovies.indexOf(result);
     actionMovies.splice(index,1);
     res.send(result);
})



    module.exports= router;
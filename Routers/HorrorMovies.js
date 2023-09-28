const express=require('express');
const router = express.Router();
router.use(express.json());
const horrorMovies=[
    {id:1,MName:'The Nun II',Year:2023},
    {id:2,MName:'The Last Voyage of the Demeter',Year:2023},
    {id:3,MName:' Talk to Me (I)',Year:2022},
    {id:4,MName:'The Ruins ',Year:2008},
    {id:5,MName:'The Last Night in Soho',Year:2021},
    {id:6,MName:'The Menu',Year:2022},
    {id:7,MName:'Saw X',Year:2023},
    {id:8,MName:'Meg',Year:2023},
    {id:9,MName:'Evil dead rise',Year:2023},
    {id:10,MName:'The Nun II',Year:2023}
]



router.get('/',(req,res)=>{
res.send(horrorMovies);
})





module.exports= router;
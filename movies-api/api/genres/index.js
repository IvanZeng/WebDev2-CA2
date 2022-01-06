import express from 'express';
import Genre from './genresModel';
import {getMovieGenres} from "../tmdb-api";


const router = express.Router(); 

router.get("/", async(req, res) => {
    const genres = await getMovieGenres();
    res.status(200).json(genres);
});


export default router;
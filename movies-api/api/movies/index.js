import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import uniqid from 'uniqid'
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import {getUpcomingMovies, 
        getNowPlayingMovies, 
        getTopRatedMovies, 
        getPopularMovies, 
        getSimilarMovies, 
        getMovies, 
        getMovie, 
        getMovieImages,
        getMovieReviews} from '../tmdb-api';


const router = express.Router(); 

// Get movie details
router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = movieModel.estimatedDocumentCount(); //Kick off async calls
    const moviesPromise = movieModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const movies = await moviesPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: movies };//construct return Object and insert into response object

    res.status(200).json(returnObject);
}));

router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/tmdb/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getMovieImages(id);
    if (images) {
        res.status(200).json(images);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get movie reviews
router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movieReviews = await getMovieReviews(id);
    // find reviews in list
    if (movieReviews) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

router.post('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const reviews = await getMovieReviews(id);
    if (reviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        reviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

router.get('/upcoming', asyncHandler(async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  }));


router.get('/nowplaying', asyncHandler(async(req, res) => {
    const nowplayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowplayingMovies);
  }));

router.get('/toprated', asyncHandler(async(req, res) => {
    const topratedMovies = await getTopRatedMovies();
    res.status(200).json(topratedMovies);
  }));  

router.get('/popular', asyncHandler(async(req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
  })); 
  
router.get('/similar', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id); 
    const similarMovies = await getSimilarMovies(id);
    res.status(200).json(similarMovies);
}));

export default router;
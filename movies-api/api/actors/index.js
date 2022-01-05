import express from 'express';
import asyncHandler from 'express-async-handler';
import {
    getPeopleImages, 
    getPopularPeople, 
    getPeople } from "../tmdb-api";

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const people = await getPopularPeople();
    res.status(200).json(people);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const people = await getPeople(id);
    if (people) {
        res.status(200).json(people);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getPeopleImages(id);
    if (images) {
        res.status(200).json(images);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));






export default router;
import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import genresModel from '../api/genres/genresModel';
import genres from './genres';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import actorModel from '../api/actors/actorModel';
import actors from './actors';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
    console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

async function loadGenres() {
    console.log('load genre Data');
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  async function loadActors() {
    console.log('load actors Data');
    console.log(actors.length);
    try {
      await actorModel.deleteMany();
      await actorModel.collection.insertMany(actors);
      console.info(`${actors.length} actors were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load actors Data: ${err}`);
    }
  }

if (process.env.SEED_DB == 'True') {
  loadUsers();
  loadGenres();
  loadMovies();//ADD THIS LINE
  loadActors();

}
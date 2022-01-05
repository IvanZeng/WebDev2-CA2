import {React,lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
// import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
// import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
// import AddMovieReviewPage from './pages/addMovieReviewPage'
// import MustwatchMoviesPage from "./pages/mustWatchMoviesPage"; 
// import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
// import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
// import SimilarMoviesPage from "./pages/similarMoviesPage";
// import PopularPeoplePage from './pages/popularPeoplePage';
// import PeopleDetailsPage from './pages/peopleDetailsPage'
// import PopularMoviesPage from './pages/popularMoviesPage';
import SignUpPage from "./pages/signUpPage";
import LogInPage from "./pages/logInPage";
import "bootstrap/dist/css/bootstrap.min.css"
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute";


const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const MustwatchMoviesPage = lazy(() => import("./pages/mustWatchMoviesPage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const NowPlayingMoviesPage = lazy(() => import("./pages/nowPlayingMoviesPage"));
const SimilarMoviesPage = lazy(() => import("./pages/similarMoviesPage"));
const PopularPeoplePage = lazy(() => import("./pages/popularPeoplePage")); 
const PeopleDetailsPage = lazy(() => import("./pages/peopleDetailsPage"));  
const PopularMoviesPage = lazy(() => import("./pages/popularMoviesPage")); 




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 36000,
      refetchInterval: 36000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
      <Suspense fallback={<h1>Loading page</h1>}>
        <SiteHeader />
        </Suspense>
        <MoviesContextProvider>
            {" "}
            <Suspense fallback={<h2>Loading page</h2>}>
          <Switch>
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/logIn" component={LogInPage} />
        <PrivateRoute path="/people/:id" component={PeopleDetailsPage} />
        <PrivateRoute path="/similar/:id" component={SimilarMoviesPage} />
        <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
        <PrivateRoute exact path="/popular/people" component={PopularPeoplePage} />
        <PrivateRoute exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
        <PrivateRoute exact path="/movies/toprated" component={TopRatedMoviesPage} />
        <PrivateRoute exact path="/movies/mustwatch" component={MustwatchMoviesPage} />
        <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
        <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <PrivateRoute path="/movies/:id" component={MoviePage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </Suspense>
      </MoviesContextProvider>
      </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
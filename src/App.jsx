import {Routes, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from './App.module.css';
import NotFoundPage from './pages/NotFoundPage';
import {Navigation} from './components/Navigation/Navigation';


const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
            <Route path='cast' element={<MovieCast/>}/>
            <Route path='reviews' element={<MovieReviews/>}/>
          </Route>          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

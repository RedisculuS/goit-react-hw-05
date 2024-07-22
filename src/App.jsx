import {Routes, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from './App.module.css';
import NotFoundPage from './pages/NotFoundPage';
import {Navigation} from './components/Navigation';

// const buildlinksClass = ({isActive}) => {
//   return clsx(css.link, isActive && css.active);
// }

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews'));

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

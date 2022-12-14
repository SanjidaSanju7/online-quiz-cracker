import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,

      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>,
        },
        {
          path: 'topics',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Topics></Topics>
        },
        {
          path: 'statistics', element: <Statistics></Statistics>
        },
        {
          path: 'blog', element: <Blog></Blog>
        },
        {
          path: '/topics:id',
          element: <QuizDetails></QuizDetails>,
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

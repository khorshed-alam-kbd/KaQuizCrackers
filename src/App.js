

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Statistics from "./Components/Statistics/Statistics";
import TopicDetails from "./Components/TopicDetails/TopicDetails";
import Topics from "./Components/Topics/Topics";
import Main from "./layout/Main";
import swal from 'sweetalert';

function App() {

  const routeNotFound = () => {
    swal({
      title: "404",
      text: "Route Not Found",
      icon: "error",
      button: "Close",
    });
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>,
        },
        {
          path: 'statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:topicId',
          loader: async ({ params }) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetails></TopicDetails>
        }
      ]
    },
    {
      path: '*',
      element: <div className="text-dark p-5 text-center m-5">
        <button onClick={() => routeNotFound()} className="btn btn-info fw-bold text-white m-5"> Route Not Found</button> <br />
        <button onClick={() => routeNotFound()} className="btn btn-info fw-bold text-white m-5"> 404 click Me</button> <br />
        <button onClick={() => routeNotFound()} className="btn btn-info fw-bold text-white m-5"> Route Not Found</button> <br />
      </div>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;

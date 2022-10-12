

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Statistics from "./Components/Statistics/Statistics";
import TopicDetails from "./Components/TopicDetails/TopicDetails";
import Topics from "./Components/Topics/Topics";
import Main from "./layout/Main";
function App() {

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
      element: <div> Route not found </div>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;

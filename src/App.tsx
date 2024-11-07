import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import emailjs from "@emailjs/browser";

function App() {
  emailjs.init({
    publicKey: 'KvbqBSrZOtG6_PCYA',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  return <RouterProvider router={router} />
}

export default App;

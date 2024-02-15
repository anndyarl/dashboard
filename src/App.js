

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from "./store";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux';
import AnimatedRoutes from "hocs/routes/Routes";

function App() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Younalup | Dashboard</title>
      <meta name="description" content="Diario de trading" />
      <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
      <meta name="robots" content='all' />
      <link rel="canonical" href="https://www.Younalup.com/" />
      <meta name="author" content='Younalup' />
      <meta name="publisher" content='Younalup' />

      {/* Social Media Tags */}
      <meta property="og:title" content='Younalup | Dashboard' />
      <meta property="og:description" content='Diario de trading' />
      <meta property="og:url" content="https://www.Younalup.com/" />
      <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

      <meta name="twitter:title" content='Younalup | Dashboard' />
      <meta
          name="twitter:description"
          content='Diario de trading'
      />
      <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
      <Provider store={store}>
        <Router>   
          <AnimatedRoutes/>        
        </Router>
      </Provider>
  </HelmetProvider>
  );
}

export default App;

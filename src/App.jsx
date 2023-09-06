import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import { pages } from './variables';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1_500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              {pages.map((name, index) => {
                const Component = lazy(() =>
                  import(`./${name.charAt(0).toUpperCase() + name.slice(1)}.jsx`)
                );
                return (
                  <Route
                    key={index}
                    path={`/${name === 'home' ? '' : name}`}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </Router>
      )}
    </>
  );
}

export default App;

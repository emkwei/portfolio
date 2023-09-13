import { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import { pages } from './helpers/variables';
import { FadeContext } from './hooks/Context';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setFade } = useContext(FadeContext);

  useEffect(() => {
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, 1_500);

    const fadeOut = setTimeout(() => {
      setFade(false);
    }, 2_800);

    return () => {
      clearTimeout(loading);
      clearTimeout(fadeOut);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Suspense>
            <Routes>
              {pages.map((name, index) => {
                const Component = lazy(() =>
                  import(
                    `./pages/${
                      name.charAt(0).toUpperCase() + name.slice(1)
                    }.jsx`
                  )
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

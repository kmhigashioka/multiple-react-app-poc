import React from 'react';
import './App.css';

function App() {
  useScript('http://localhost:3001/static/js/bundle.js');
  useScript('http://localhost:3001/static/js/0.chunk.js');
  useScript('http://localhost:3001/static/js/main.chunk.js');
  useScript('http://localhost:3002/static/js/bundle.js');
  useScript('http://localhost:3002/static/js/0.chunk.js');
  useScript('http://localhost:3002/static/js/main.chunk.js');

  return (
    <>
      <div className="App">
        <nav className="Nav">
          <div id="root-app1"></div>
          <div id="root-app2"></div>
        </nav>
      </div>
    </>
  );
}

export default App;

let cachedScripts = [];
function useScript(src) {
  const [state, setState] = React.useState({
    loaded: false,
    error: false
  });

  React.useEffect(
    () => {
      if (cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false
        });
      } else {
        cachedScripts.push(src);
        let script = document.createElement('script');
        script.src = src;
        script.async = true;

        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: false
          });
        };

        const onScriptError = () => {
          const index = cachedScripts.indexOf(src);
          if (index >= 0) cachedScripts.splice(index, 1);
          script.remove();
          setState({
            loaded: true,
            error: true
          });
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        document.body.appendChild(script);

        return () => {
          script.removeEventListener('load', onScriptLoad);
          script.removeEventListener('error', onScriptError);
        };
      }
    },
    [src],
  );

  return [state.loaded, state.error];
}

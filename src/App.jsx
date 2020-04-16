import React, { Suspense } from "react";
import { Route, Switch} from "react-router-dom";
import Layot from './Layot'
import appRoutes from './routes/routes'

const App = () => {
  
  let routes = (
    <Switch>
      {appRoutes.map((route, i) => (
        <Route 
        key={route.path}
        path={route.path} 
        component={route.component} />
      ))}
    </Switch>
  );

  return (
    <Layot>
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense>
    </Layot>
  );
};

export default App;

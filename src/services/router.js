import { Switch, Route, Redirect } from 'react-router-dom';
import {
  HOME_ROUTE,
  TRACKER_ROUTE,
  LIBRARY_ROUTE,
  DETAILS_ROUTE,
} from '../utils/boilerplates/routes';
import { TrackerComponent } from '../modules/tracker/TrackerComponent';
import { LibraryComponent } from '../modules/library/LibraryComponent';
import { DetailsComponent } from '../modules/details/DetailsComponent';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE}>
        <Redirect
          to={{
            pathname: TRACKER_ROUTE,
          }}
        />
      </Route>
      <Route path={TRACKER_ROUTE}>
        <TrackerComponent />
      </Route>
      <Route path={LIBRARY_ROUTE}>
        <LibraryComponent />
      </Route>
      <Route exact path={`${DETAILS_ROUTE}/:id`}>
        <DetailsComponent />
      </Route>
    </Switch>
  );
};

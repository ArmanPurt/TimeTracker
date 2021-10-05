import React, { useEffect, useState } from 'react';
import {
  PROJECT_DATA_MARKER,
  PORJECT_DATA_COMMENT_MARKER,
} from '../utils/boilerplates/dataSets';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { USER_LIST_COLLECTION_LINK } from '../utils/boilerplates/externalDataLinks';

const AppContext = React.createContext({});

const initialState = () => ({ byId: {}, allIds: [] });

const AppContextProvider = (props) => {
  const [usersList, setUsersList] = useState([]);
  const [usersProjectData, setUsersProjectData] = useState(initialState);
  const [projectDataComments, setProjectDataComments] = useState(initialState);

  useEffect(() => {
    axios.get(USER_LIST_COLLECTION_LINK).then(({ data }) => {
      // Adapting data set in order to use in Dropdown base component. Normally should be handled at API
      const updatedDataSet = data.map((item) => {
        item.text = item.name;
        return item;
      });
      setUsersList(updatedDataSet);
    });
  }, []);

  const addNewEntriesToState = (data, marker) => {
    const { dataSet, handler } = defineHandler(marker);
    const newEntityId = uuidv4();
    const newDataPortion = {
      [newEntityId]: {
        id: newEntityId,
        ...data,
      },
    };
    const updatedData = Object.assign(dataSet.byId, newDataPortion);

    dataSet.allIds.push(newEntityId);
    handler({ byId: updatedData, allIds: dataSet.allIds });
  };

  const defineHandler = (marker) => {
    switch (marker) {
      case PROJECT_DATA_MARKER:
        return { dataSet: usersProjectData, handler: setUsersProjectData };
      case PORJECT_DATA_COMMENT_MARKER:
        return {
          dataSet: projectDataComments,
          handler: setProjectDataComments,
        };
      default:
        new Error('Unknown entity update');
    }
  };

  return (
    <AppContext.Provider
      value={{
        usersList,
        usersProjectData,
        projectDataComments,
        addNewEntriesToState,
      }}
      {...props}
    />
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('AppContext must be used within a AppContextProvider');
  }
  return context;
};

export default { AppContextProvider, useAppContext };

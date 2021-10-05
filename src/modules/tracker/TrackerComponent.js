import React, { memo, useState } from 'react';
import { TrackerWrapper } from '../../components/styledComponents/TimeTracker/TrackerWrapper';
import { ContentHeader } from '../../components/styledComponents/AppLayout/Content';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { TimeAssigner } from './TimeAssigner/TimeAssigner';
import AppContextSet from '../../services/AppContext';
import { PROJECT_DATA_MARKER } from '../../utils/boilerplates/dataSets';

export const TrackerComponent = memo(() => {
  const [selectedUser, setSelectedUser] = useState();
  const { usersList, addNewEntriesToState } = AppContextSet.useAppContext();

  const updateProjectDataCallback = (data) => {
    addNewEntriesToState(data, PROJECT_DATA_MARKER);
  };

  return (
    <TrackerWrapper>
      <ContentHeader>Working time tracker</ContentHeader>
      <Dropdown items={usersList} callback={setSelectedUser}></Dropdown>
      {selectedUser && (
        <TimeAssigner
          user={selectedUser}
          callback={updateProjectDataCallback}
        />
      )}
    </TrackerWrapper>
  );
});

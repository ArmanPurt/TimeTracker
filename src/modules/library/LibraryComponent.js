import React, { useEffect, useState } from 'react';
import { H1 } from '../../components/styledComponents/common/headers/H1';
import { LibraryItem } from './LibraryItem/LibraryItem';
import { LibraryItemsWrapper } from '../../components/styledComponents/Library/LibraryItemsWrapper';
import { LibraryWrapper } from '../../components/styledComponents/Library/LibraryWrapper';
import AppContextSet from '../../services/AppContext';
import { DETAILS_ROUTE } from '../../utils/boilerplates/routes';
import { LibraryLink } from '../../components/styledComponents/Library/LibraryLink';
import { PORJECT_DATA_COMMENT_MARKER } from '../../utils/boilerplates/dataSets';
import { flattenObjectDataset } from '../../services/functions';

export const LibraryComponent = () => {
  const { usersProjectData, projectDataComments, addNewEntriesToState } =
    AppContextSet.useAppContext();
  const [preparedProjectData, setPreparedProjectData] = useState([]);
  const [preparedCommentsData, setPreparedCommentsData] = useState([]);

  useEffect(() => {
    const preparedProjects = flattenObjectDataset(usersProjectData);
    const preparedComments = flattenObjectDataset(projectDataComments);
    setPreparedProjectData(preparedProjects);
    setPreparedCommentsData(preparedComments);
  }, [usersProjectData, projectDataComments]);

  const postComment = (data) => {
    addNewEntriesToState(data, PORJECT_DATA_COMMENT_MARKER);
  };

  return (
    <LibraryWrapper>
      <H1>Favourites Library</H1>
      <LibraryItemsWrapper>
        {preparedProjectData.map((item) => (
          <LibraryLink to={`${DETAILS_ROUTE}/${item.id}`} key={item.id}>
            <LibraryItem
              item={item}
              callback={postComment}
              comments={preparedCommentsData}
            />
          </LibraryLink>
        ))}
      </LibraryItemsWrapper>
    </LibraryWrapper>
  );
};

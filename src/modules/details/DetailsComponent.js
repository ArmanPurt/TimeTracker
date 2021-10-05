import React from 'react';
import { useParams } from 'react-router';
import { H1 } from '../../components/styledComponents/common/headers/H1';
import { H3 } from '../../components/styledComponents/common/headers/H3';
import { DetailsItem } from '../../components/styledComponents/Details/DetailsItem';
import {
  DetailsSection,
  DetailsSubSection,
} from '../../components/styledComponents/Details/DetailsSection';
import { DetailsWrapper } from '../../components/styledComponents/Details/DetailsWrapper';
import { CommentItem } from '../../components/styledComponents/Library/LibraryItemComment/CommentItem';
import AppContextSet from '../../services/AppContext';
import { flattenObjectDataset } from '../../services/functions';

export const DetailsComponent = () => {
  const { id } = useParams();
  const { projectDataComments, usersList, usersProjectData } =
    AppContextSet.useAppContext();
  const comments = flattenObjectDataset(projectDataComments).filter(
    (comment) => comment.projectId === id
  );
  const project = flattenObjectDataset(usersProjectData).filter(
    (project) => project.id === id
  )[0];
  const user = usersList
    ? usersList.filter((user) => user.id === project?.userId)[0]
    : [{}];
    
  return (
    <DetailsWrapper>
      <H1>Details</H1>
      {user && (
        <>
          <DetailsSection>
            <DetailsSubSection>
              <H3>User Info: </H3>
              {Object.keys(user)?.map((key) => {
                if (typeof user[key] === 'string') {
                  return (
                    <DetailsItem key={user[key].id}>
                      {key}: {user[key]}
                    </DetailsItem>
                  );
                }
              })}
            </DetailsSubSection>
            <DetailsSubSection>
              <H3>Project info Info: </H3>
              <DetailsItem>Project: {project.project}</DetailsItem>
              <DetailsItem>Time spent: {project.time}</DetailsItem>
            </DetailsSubSection>
          </DetailsSection>
          <DetailsSection>
            <DetailsSubSection>
              <H3>Comments: </H3>
              {comments.map((comment) => (
                <CommentItem key={comment.id}>
                  <div>Admin wrote:</div>
                  {comment.comment}
                </CommentItem>
              ))}
            </DetailsSubSection>
          </DetailsSection>
        </>
      )}
    </DetailsWrapper>
  );
};

import React, { memo, useState, useEffect } from 'react';
import { LibraryItem as Wrapper } from '../../../components/styledComponents/Library/LibraryItem';
import { LibraryItemEntry } from '../../../components/styledComponents/Library/LibraryItemEntry';
import { LibraryItemSection } from '../../../components/styledComponents/Library/LibraryItemSection';
import { LibraryItemButton } from '../../../components/styledComponents/Library/LibraryItemButton';
import AppContextSet from '../../../services/AppContext';
import { TextArea } from '../../../components/styledComponents/common/TextArea/TextArea';
import { CommentsWrapper } from '../../../components/styledComponents/Library/LibraryItemComment/CommentsWrapper';
import { CommentItem } from '../../../components/styledComponents/Library/LibraryItemComment/CommentItem';
import { H3 } from '../../../components/styledComponents/common/headers/H3';

export const LibraryItem = memo(({ item, callback, comments }) => {
  const [comment, setComment] = useState();
  const [preparedComments, setPreparedComments] = useState([]);
  const { usersList } = AppContextSet.useAppContext();

  useEffect(() => {
    const prepared = comments?.filter(
      (filtered) => filtered.projectId === item.id
    );
    setPreparedComments(
      prepared.length < 3 ? prepared : prepared.slice(prepared.length - 3)
    );
  }, [comments]);

  const postComment = (e) => {
    e.preventDefault();
    const preparedData = {
      comment: comment,
      projectId: item.id,
    };
    callback(preparedData);
    setComment(' ');
  };

  return (
    <Wrapper>
      <LibraryItemSection>
        <LibraryItemEntry>
          Assignee:{' '}
          {usersList.filter((user) => user.id === item.userId)[0]?.name}
        </LibraryItemEntry>
        <LibraryItemEntry>Project: {item.project}</LibraryItemEntry>
        <LibraryItemEntry>Time spent: {item.time}</LibraryItemEntry>
      </LibraryItemSection>
      <LibraryItemSection>
        <TextArea
          onChange={(e) => setComment(e.target.value)}
          onClick={(e) => e.preventDefault()}
        >
          {comment}
        </TextArea>
        <LibraryItemButton onClick={(e) => postComment(e)}>
          Write a comment
        </LibraryItemButton>
      </LibraryItemSection>
      <LibraryItemSection>
        <CommentsWrapper>
          <H3>Comments</H3>
          {preparedComments.reverse().map((comm) => (
            <CommentItem key={comm.id}>
              <div>Admin wrote:</div>
              {comm.comment}
            </CommentItem>
          ))}
        </CommentsWrapper>
      </LibraryItemSection>
    </Wrapper>
  );
});

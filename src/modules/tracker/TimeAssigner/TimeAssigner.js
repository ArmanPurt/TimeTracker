import React, { useCallback, useState, memo } from 'react';
import { H2 } from '../../../components/styledComponents/common/headers/H2';
import { TimeAssignerWrapper } from '../../../components/styledComponents/TimeAssigner/TimeAssignerWrapper';
import { TimeAssignerContentWrapper } from '../../../components/styledComponents/TimeAssigner/TimeAssignerContentWrapper';
import { TimeAssignerInput } from '../../../components/styledComponents/TimeAssigner/TimeAssignerInput';
import { Button } from '../../../components/styledComponents/common/Buttons/Button';

import PropTypes from 'prop-types';

export const TimeAssigner = memo(({ user, callback }) => {
  const [time, setTime] = useState('');
  const [project, setProject] = useState('');

  const updateData = useCallback(() => {
    const preparedData = {
      time: time,
      project: project,
      userId: user.id,
    };
    callback(preparedData);
    setTime('');
    setProject('');
  });

  return (
    <TimeAssignerWrapper>
      <H2>Set the project and time that was spent</H2>
      <TimeAssignerContentWrapper>
        <label htmlFor="time">Time</label>
        <TimeAssignerInput
          placeholder="Set spent time..."
          value={time}
          name={'time'}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="project">Project</label>
        <TimeAssignerInput
          placeholder="Set project"
          value={project}
          name={'project'}
          onChange={(e) => setProject(e.target.value)}
        />
      </TimeAssignerContentWrapper>
      <Button onClick={updateData} disabled={!time || !project}>
        Approve
      </Button>
    </TimeAssignerWrapper>
  );
});

TimeAssigner.propTypes = {
  user: PropTypes.object,
  callback: PropTypes.func,
};

import { NextPage } from 'next/types';
import React from 'react';
import MeetupItem, { IMeetup } from './MeetupItem';
import classes from './MeetupList.module.css';
type Props = {
  meetups: IMeetup[]
};
const MeetupList: React.FC<Props> = ({meetups}) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: IMeetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;

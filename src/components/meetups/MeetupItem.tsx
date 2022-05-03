import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import internal from 'stream';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

export interface IMeetup {
  id: string,
  image: string,
  title: string,
  address: string,
  description: string
}
interface Props {
  meetup: IMeetup
}
const MeetupItem: React.FC<Props> = ({meetup}) => {
  const router = useRouter();
  const showDetailPageHandler = () => {
    router.push('/' + meetup.id)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img id={meetup.id} src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailPageHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

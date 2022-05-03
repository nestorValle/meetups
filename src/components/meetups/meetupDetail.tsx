import { NextPage } from "next";
import { Fragment } from "react";
import { IMeetup } from "./MeetupItem";
import classes from './meetupDetail.module.css';
interface Props {
    meetup: IMeetup
}
const MeetUpDetail: NextPage<Props> = ({meetup}) => {
    return (
        <section className={classes.detail}>
            <img src={meetup.image} 
            alt={meetup.title} />
            <h1>{meetup.title}</h1>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
        </section>
    );
}
export default MeetUpDetail
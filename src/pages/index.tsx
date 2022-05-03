import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { IMeetup } from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: '564d65d56d4s65',
        title: 'A firts Image',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dritan_Abazovi%C4%87_2016.jpg/238px-Dritan_Abazovi%C4%87_2016.jpg',
        address: 'some city',
        description: 'this is the firts Image'
    } as IMeetup,
    {
        id: 'ddd654654d5d465d4',
        title: 'A Secound Image',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/LA_Riots_aftermath_-_1991_%28149046646%29.jpg/332px-LA_Riots_aftermath_-_1991_%28149046646%29.jpg',
        address: 'some city',
        description: 'this is the Secound Image'
    } as IMeetup
];

interface Props {
    meetups: IMeetup[]
}

const Home: React.FC<Props> = ({meetups}) => {
    return <MeetupList meetups={meetups} />
}
export const getStaticProps: GetStaticProps<Props> = async () => {
    //fetch data from API
    return {
        props: {
             meetups : DUMMY_MEETUPS
        }
    }
}

export default Home;
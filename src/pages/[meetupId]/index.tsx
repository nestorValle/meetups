import { GetStaticPaths, GetStaticPathsContext, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/meetupDetail";
import { IMeetup } from "../../components/meetups/MeetupItem";

interface Props {
    meetupData: IMeetup
}
const MeetUpDetailPage: NextPage<Props> = ({meetupData}) => {
  return (
    <MeetUpDetail meetup={meetupData} />
    );
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { meetupId: '1' } }, // See the "paths" section below
        { params: { meetupId: '2' } } // See the "paths" section below
      ],
      fallback: false // See the "fallback" section below
    };
}
export const getStaticProps: GetStaticProps<Props> = async () => {
    
    return {
        props: {
            meetupData:{
                id: 1,
                title:'The firts Image',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dritan_Abazovi%C4%87_2016.jpg/238px-Dritan_Abazovi%C4%87_2016.jpg',
                address: 'Some City, Some number',
                description: 'this is the firts Image'
            } as IMeetup
        }
    }
}
export default MeetUpDetailPage
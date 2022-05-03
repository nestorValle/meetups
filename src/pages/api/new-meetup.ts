// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IMeetup } from '../../components/meetups/MeetupItem';

interface Data {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const data = req.body as IMeetup;

    const client = await MongoClient.connect('mongodb+srv://DBMeetUpDev:XVg5ruG4pLQhV1ld@clusterca.xgsun.mongodb.net/ClusterCA?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const result = await meetupCollection.insertOne(data); 
    
    console.log(result);
    
    client.close();

    res.status(201).json({message: 'Meetup Inserted'});
  }
}

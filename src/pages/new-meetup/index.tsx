import { IMeetup } from "../../components/meetups/MeetupItem"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetUp: React.FC = () => {
    const addMeetupHandler = async (meetUp: IMeetup) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetUp),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const dadta = await response.json();
        
        console.log(dadta);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
};

export default NewMeetUp
import { NextPage } from 'next';
import React from 'react';
import { useRef } from 'react';

import Card from '../ui/Card';
import { IMeetup } from './MeetupItem';
import classes from './NewMeetupForm.module.css';
type Props ={
  onAddMeetup: (meetup: IMeetup) => void 
}
const NewMeetupForm: React.FC<Props> = ({onAddMeetup}) => {
  const titleInputRef = React.useRef<HTMLInputElement>(null);
  const imageInputRef =  React.useRef<HTMLInputElement>(null);
  const addressInputRef =  React.useRef<HTMLInputElement>(null);
  const descriptionInputRef =  React.useRef<HTMLTextAreaElement>(null);
  
  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    } as IMeetup;

    onAddMeetup(meetupData);
  }
  

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
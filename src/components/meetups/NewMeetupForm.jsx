import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // We need to use the firebase url to send the data to specified URL
    props.onAddMeetup(meetupData);
  }
  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" id="title" ref={titleInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" id="image" ref={imageInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Address</label>
            <input type="text" id="address" ref={addressInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="5"
              ref={descriptionInputRef}
              required
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button type="submit">Add Meetup</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default NewMeetupForm;

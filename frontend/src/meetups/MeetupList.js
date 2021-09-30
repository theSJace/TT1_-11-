import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import React from "react";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id = {meetup.id}
          image={meetup.image}
          title={meetup.title}
          addresss={meetup.addresss}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;

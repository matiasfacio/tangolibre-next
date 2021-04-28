import React from "react";
import { SubscriptionContainer } from "../../styles/globalstyles";

function Subscription() {
  const subscriptions = {
    type: "card",
    dates: ["23/08/2020/", "30/08/2020","6/09/2020"],
    state: true,
    amount_payed: 65,
    amount_owed: 0,
    valid_until: "9th of September 2021",
  };


  return (
    <SubscriptionContainer>
      <h2>Subscriptions</h2>
      {Object.entries(subscriptions).map(([key, value]) => {
        if (Array.isArray(key)) {
          key.map((t,index) => {
            return <p key={index}> - {t} - </p>;
          });
        } else if (typeof value === "boolean") {
          return <p>{key}: <span style={{color: value ? 'green' : 'red'}}>{value ? 'true':'false'}</span></p>
        } else {
          return (
            <p>
              {key}: {value}
            </p>
          );
        }
      })}
    </SubscriptionContainer>
  );
}

export default Subscription;

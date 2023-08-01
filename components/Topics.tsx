import React from "react";
import Card from "@/components/Card";
import { Icons } from "@/components/icons";

const topics = [
  {
    iconName: "globe2",
    title: "SaaS",
    description:
      "Get sassy with your SaaS optimisation game, and discover how a Trillion-Dollar value creation by 2030 is possible for India SaaS.",
  },
  {
    iconName: "globe2",
    title: "EVs",
    description:
      "Tick, tick, vroom! It’s all engines ablaze as we switch gears to accelerate the innovation in the Indian EV space,",
  },
  {
    iconName: "globe2",
    title: "Sustainability",
    description:
      "Give your eco-cred the green signal and join us to drive sustainability and accelerate the world toward a renewable energy transition.",
  },
  {
    iconName: "globe2",
    title: "EVs",
    description:
      "Join us as we play Spiderman and navigate this fascinating multiverse of Web3 and uncover its secrets and future potential.",
  },
  {
    iconName: "globe2",
    title: "AI & ML",
    description:
      "Deep dive with us into the fascinating depths of the deep tech world to understand the economic potential of generative AI - the next productivity frontier.",
  },
];

const Topics: React.FC = () => {
  return (
    <div className="p-10 flex flex-wrap justify-center">
      {topics.map((topic) => (
        <Card
          className="p-4"
          key={topic.title}
          href="hottub"
          iconName={topic.iconName}
          title={topic.title}
          description={topic.description}
        />
      ))}
      {/*<Card*/}
      {/*  className="p-4"*/}
      {/*  href="hottub"*/}
      {/*  iconName="hot_tub"*/}
      {/*  title="Hot Tub Time Machine"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum."*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  className="p-4"*/}
      {/*  href="worldweb"*/}
      {/*  iconName="public"*/}
      {/*  title="World Wide Web"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum."*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  className="p-4"*/}
      {/*  href="trainthings"*/}
      {/*  iconName="train"*/}
      {/*  title="Why I Hate Trains"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum."*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  className="card--dark"*/}
      {/*  href="androidupdate"*/}
      {/*  iconName="android"*/}
      {/*  title="Another Android Update"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum."*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  className="card--dark"*/}
      {/*  href="phonesoff"*/}
      {/*  iconName="ring_volume"*/}
      {/*  title="Why Phones Are So Loud?"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum."*/}
      {/*/>*/}
    </div>
  );
};

export default Topics;

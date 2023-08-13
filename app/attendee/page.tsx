import React, { FunctionComponent } from "react";
import Script from "next/Script";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <div className={"text-center"}>
      <div className={"p-10 pt-5 flex justify-center items-center"}>
        <iframe
          src="https://insider.in/digital-startup-summit-iit-bhu-oct28-2023/event"
          height={700}
          width={1000}
          className={"mt-40"}
        ></iframe>
      </div>
    </div>
  );
};

export default page;

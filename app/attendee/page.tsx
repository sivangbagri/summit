
import React from 'react';
import {EventEmbed} from '@/components/payment'
const Page = () => {

    return (

        <div className={"pt-32  overflow-hidden  flex justify-center items-center"} >
            <EventEmbed/>
        </div>

    );
};

export default Page;


// import React, { FunctionComponent } from "react";
// import Script from "next/Script";
//
// interface OwnProps {}
//
// type Props = OwnProps;
//
// const page: FunctionComponent<Props> = (props) => {
//     return (
//         <div className={"text-center"}>
//             <div className={"p-10 pt-5 flex justify-center items-center"}>
//                 {/*<iframe*/}
//                 {/*    src="https://insider.in/digital-startup-summit-iit-bhu-oct28-2023/event"*/}
//                 {/*    height={700}*/}
//                 {/*    width={1000}*/}
//                 {/*    className={"mt-40"}*/}
//                 {/*></iframe>*/}
//
//                 <div id="insider-embed"></div>
//                 <script src="https://insider.in/scripts/insider-embed/dist/scripts/insider_embed.min.js"></script>
//
//                 <script> insiderEmbed.init({
//                 "mountId" : "insider-embed",
//                 "eventSlug": "digital-startup-summit-iit-bhu-oct28-2023",
//                 "frameHeight": 900,
//                 "merchantId": "64d74d70466b3c00080b3e1c"
//             }); </script>
//            </div>
//          </div>
//     );
// };
//
// export default page;
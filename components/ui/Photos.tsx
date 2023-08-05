import photo1 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Amitva Saha- Xpressbees and FirstCry.png"
import photo2 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/ElasticRun- Shitiz Bansal.png"
import photo3 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Jay-Chaudhry-ZScaler.jpeg"
import photo4 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Kailash Kailash - Zscaler.png"
import photo5 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/OneCard- Anurag Sinha.png"
import photo6 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Prateek-Maheshwari-PW.png"
import photo7 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Sanjay Sethi- Shopclues.png"
import photo8 from "../../public/Trailblazzers/IIT_BHU_Uniforn_Founders/Sarvajna Dwivedi- Pearl Therapeutics.jpeg"
import { StaticImageData } from "next/image"
interface PersonProps{
  name:string,
  company:string,
  imageUrl:StaticImageData
}
export const images:PersonProps[]=[
  {

    name:"Amitva Saha",
    company:"Xpressbees and FirstCry",
    imageUrl:photo1},
  
  {

    name:"Shitiz Bansal",
    company:"ElasticRun",
    imageUrl:photo2},
  {
    name:"Jay Chaudhry",
    company:"Zscaler",
    imageUrl:photo3},
  {
  name:"Kailash kailash",
  company:"Zscaler",
  imageUrl:photo4
},
  {
    name:"Anurag Sinha",
  company:"OneCard",
  imageUrl:photo5
},
  {
    name:"Prateek Maheshwari",
  company:"PW",
  imageUrl:photo6
},
  {
    name:"Sanjay Sethi",
  company:"Shopclues",
  imageUrl:photo7
},
 
  {
    name:"Sarvajna Dwivedi",
  company:"Pearl Therapeutics",
  imageUrl:photo8
},
  
]
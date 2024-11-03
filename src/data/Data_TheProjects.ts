import { Portfolio } from "../types/projects/Portfolio";

export default [
  {
    id: "p1",
    imgPath: "../../assets/projects/apple.png",
    imgMode: "full",
    title: "Full stack Apple Website Clone",
    liveHref: "https://fullstack-airpods-clone.vercel.app/",
    codeHref: "https://github.com/MrJimmy97/Fullstack-Airpods-Clone/tree/main",
    description:
      "This project was constructed by Next.js, Typescript and MongoDB. It was cloned from Apple Airpods website (Airpods Pro 2). ",
  },
  {
    id: "p2",
    imgPath: "../../assets/projects/portfolio.png",
    imgMode: "center",
    title: "Jimmy Porfolio",
    liveHref: "",
    codeHref: "",
    description:
      "This project was constructed by Vuejs and Firebase.  It was cloned from Figma design",
  },
  //   {
  //     id: "p3",
  //     imgPath: "",
  //     title: "Jimmy Porfolio",
  //     href: "",
  //     description: "",
  //   },
] as Portfolio[];

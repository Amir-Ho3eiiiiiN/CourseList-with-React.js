import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "/images/img1.jpg",
    rate: "4.5",
    tags: ["langauges", "React"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "/images/img2.jpg",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your buisness safely without fare of new projects",
    imageUrl: "/images/img3.jpg",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("All");
  const handlerActiveTab = (e)=>{
    setActiveTab(e.target.dataset.key);
  }
  return (
    <>
      <Header
        activeTab={activeTab}
        onchangeActiveTab={handlerActiveTab}
        courses={courses}
      />
      <CourseList activeTab={activeTab} courses={courses} />
      <Footer />
    </>
  );
}

export default App;

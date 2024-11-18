import CourseCard from "./CourseCard";

function CourseList({ activeTab, courses }) {
  if (activeTab !== "All")
    courses = courses.filter((item) => item.status === activeTab);
  if (courses.length <= 0) return;
  return (
    <div className="flex flex-col gap-4 mb-4">
      {courses.map((item) => (
        <CourseCard key={item.id} course={item} />
      ))}
    </div>
  );
}

export default CourseList;

export default function CourseCard({ course }) {
  return (
    <div className="bg-zinc-50 shadow-md rounded-lg flex flex-row p-4">
      <img
        className="w-60 h-auto rounded-lg"
        src={course.imageUrl}
        alt={course.title}
      />
      <div className="flex-1 flex flex-row justify-between items-center px-4">
        <CourseCardDetails course={course} />
        <CourseCardRate rate={course.rate} status={course.status} />
      </div>
    </div>
  );
}

function CourseCardDetails({ course }) {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-left">{course.title}</h2>
          <p className="text-left">{course.description}</p>
        </div>
        <div className="text-left ">{course.tags}</div>
        <div className="text-left text-sm text-gray-400 mt-2">
          <span>
            {new Date(course.start).toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </>
  );
}

function CourseCardRate({ rate, status }) {
  return (
    <>
      <div className="h-3/4  flex flex-col justify-around">
        <span className="text-lg">⭐{rate}</span>
        <span
          className={`py-1 px-3 ${
            status === "Completed"
              ? "bg-slate-300"
              : status === "Active"
              ? "bg-green-300"
              : "bg-yellow-300"
          } rounded-full text-sm font-bold`}
        >
          {status}
        </span>
      </div>
    </>
  );
}

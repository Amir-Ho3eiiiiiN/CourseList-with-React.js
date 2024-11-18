const courseStatus = ["All", "Active", "Completed", "Upcoming"];
function Header({ activeTab, onchangeActiveTab, courses }) {
  return (
    <header className="mb-8">
      <div className="py-4 text-2xl font-bold bg-violet-400 text-white text-center rounded-md mb-4">
        <h1>my Courses ({courses.length})</h1>
      </div>
      <div className="flex justify-around items-center">
        {courseStatus.map((item) => (
          <span
            onClick={onchangeActiveTab}
            key={item}
            data-key={item}
            className={`${
              item === activeTab
                ? "bg-violet-500  hover:bg-violet-300"
                : "bg-violet-300  hover:bg-violet-500"
            }  text-slate-100 rounded-md py-2 px-4 cursor-pointer`}
          >
            {item}
          </span>
        ))}
      </div>
    </header>
  );
}

export default Header;

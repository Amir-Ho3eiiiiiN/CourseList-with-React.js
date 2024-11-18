function Footer() {
  const isPassed = true;
  return (
    <div className="text-left font-semibold">
      <p>Course Result:</p>
      {isPassed ? (
        <p>
          You have successfully passed <strong>33%</strong> of your courses.
        </p>
      ) : (
        <p>You have not passed any course</p>
      )}
    </div>
  );
}

export default Footer;

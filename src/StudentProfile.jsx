import { useEffect } from "react";

function StudentProfile(props) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${props.practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [props.practiceCount]);

  return (
    <div className="student-profile">
      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Department:</strong> {props.department}
      </p>

      <p>
        <strong>Year:</strong> {props.year}
      </p>

      <p>
        <strong>Practice Sessions Completed:</strong>{" "}
        {props.practiceCount}
      </p>
    </div>
  );
}

export default StudentProfile;
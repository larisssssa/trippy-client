import { useRouter } from "next/router";
import { useState } from "react";
import { createNewTripUser } from "../../data/trips";

export function NewAttendeeForm() {
  const router = useRouter();
  const [attendee, setAttendee] = useState({
    username: "",
  });
  const [error, setError] = useState("");
  const { id } = router.query;

  const updateAttendee = (e) => {
    const copy = { ...attendee };
    copy[e.target.id] = e.target.value;
    setAttendee(copy);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTripUser(id, attendee).then((res) => {
      if (res) {
        setError("User does not exist");
      } else {
        router.push(`/trips/${id}`);
      }
    });
  };

  return (
    <>
      <div className="section">
        <form className="box">
          <p className="title">Invite</p>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                id="username"
                type="text"
                onChange={updateAttendee}
                required
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Invite
              </button>
            </div>
            <p className="help is-danger">{error}</p>
          </div>
        </form>
      </div>
    </>
  );
}

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
      <div class="section">
        <form class="box">
          <p class="title">Invite</p>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                id="username"
                type="text"
                onChange={updateAttendee}
                required
              />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" onClick={handleSubmit}>
                Invite
              </button>
            </div>
            <p class="help is-danger">{error}</p>
          </div>
        </form>
      </div>
    </>
  );
}

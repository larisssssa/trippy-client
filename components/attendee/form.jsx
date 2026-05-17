export function NewAttendeeForm() {
  return (
    <>
      <div class="section">
        <form class="box">
          <p class="title">Invite</p>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" id="username" type="text" required />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Invite</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

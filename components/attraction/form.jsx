export function NewAttractionForm() {
  return (
    <>
      <div class="section">
        <form class="box">
          <div class="field">
            <label class="label">Location Name</label>
            <div class="control">
              <input id="name" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <input id="description" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input id="city" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input id="country" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Image link</label>
            <div class="control">
              <input id="imageurl" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="control">
              <input id="category" type="text" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

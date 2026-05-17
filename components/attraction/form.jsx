import { useEffect, useState } from "react";
import { getCategories } from "../../data/attractions";

export function NewAttractionForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <>
      <div class="section">
        <form class="box">
          <div class="field">
            <label class="label">Location Name</label>
            <div class="control">
              <input id="name" type="text" class="input" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <input id="description" type="text" class="input" required />
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input id="city" type="text" class="input" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input id="country" type="text" class="input" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Image link</label>
            <div class="control">
              <input id="imageurl" type="text" class="input" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="select">
              <select>
                <option key="0" value="0">
                  - Select Category -
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

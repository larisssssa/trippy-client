import { useEffect, useState } from "react";
import { createNewAttraction, getCategories } from "../../data/attractions";
import { useRouter } from "next/router";
import { addAttraction } from "../../data/trips";

export function NewAttractionForm() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [attraction, setAttraction] = useState({
    name: "",
    description: "",
    city: "",
    country: "",
    imageurl: "",
    category_id: 0,
  });
  const [error, setError] = useState("");
  const { id } = router.query;

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  const updateAttraction = (e) => {
    const copy = { ...attraction };
    if (e.target.id == "category_id") {
      copy.category_id = parseInt(e.target.value);
    } else {
      copy[e.target.id] = e.target.value;
    }
    setAttraction(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewAttraction(attraction).then((res) => {
      if (!res || !res.id) {
        setError("Please try again");
        return;
      } else {
        const attr = { id: res.id };
        addAttraction(id, attr);
      }
      router.push(`/trips/${id}`);
    });
  };

  return (
    <>
      <div class="section">
        <form class="box">
          <p class="title has-text-centered is-4">Create a new attraction!</p>
          <div class="field">
            <label class="label">Location Name</label>
            <div class="control">
              <input
                id="name"
                type="text"
                class="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <input
                id="description"
                type="text"
                class="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input
                id="city"
                type="text"
                class="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input
                id="country"
                type="text"
                class="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Image link</label>
            <div class="control">
              <input
                id="imageurl"
                type="text"
                class="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <div class="select">
              <select id="category_id" onChange={updateAttraction}>
                <option key="0" value="0">
                  - Select Category -
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div class="control">
              <a href="/home" class="button is-link">
                Cancel
              </a>
            </div>
            <p class="help is-danger">{error}</p>
          </div>
        </form>
      </div>
    </>
  );
}

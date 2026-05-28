import { useEffect, useState } from "react";
import { createNewAttraction, getCategories } from "../../data/attractions";
import { useRouter } from "next/router";
import { addAttraction } from "../../data/trips";
import Link from "next/link";

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
      <div className="section">
        <form className="box">
          <p className="title has-text-centered is-4">
            Create a new attraction!
          </p>
          <div className="field">
            <label className="label">Location Name</label>
            <div className="control">
              <input
                id="name"
                type="text"
                className="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                id="description"
                type="text"
                className="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input
                id="city"
                type="text"
                className="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Country</label>
            <div className="control">
              <input
                id="country"
                type="text"
                className="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image link</label>
            <div className="control">
              <input
                id="imageurl"
                type="text"
                className="input"
                onChange={updateAttraction}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="select">
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
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div className="control">
              <Link href="/home" className="button is-link">
                Cancel
              </Link>
            </div>
            <p className="help is-danger">{error}</p>
          </div>
        </form>
      </div>
    </>
  );
}

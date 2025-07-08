import { useState } from "react";
import styles from "./ItemForm.module.css";

function ItemForm({ onSubmit }) {
  const INITIAL_DATA = {
    name: "",
    quantity: "",
    purpose: "",
    agreeToTerms: false,
  };
  const [form, setForm] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validateForm() {
    let newFormErrors = {};

    if (!form.name) {
      newFormErrors.name = true;
    }
    if (!form.quantity) {
      newFormErrors.quantity = true;
    }
    if (!form.purpose) {
      newFormErrors.purpose = true;
    }
    if (!form.agreeToTerms) {
      newFormErrors.agreeToTerms = true;
    }

    setErrors(newFormErrors);

    return Object.keys(newFormErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      const newItem = {
        ...form,
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      };
      onSubmit(newItem);
      setForm(INITIAL_DATA);
      setErrors({});
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add an Item to the Inventory</h2>
      <div
        className={`${styles.element} ${errors["name"] ? styles.error : ""}`}
      >
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div
        className={`${styles.element} ${
          errors["quantity"] ? styles.error : ""
        }`}
      >
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`${styles.element} ${errors["purpose"] ? styles.error : ""}`}
      >
        <textarea
          name="purpose"
          placeholder="Purpose"
          value={form.purpose}
          onChange={handleInputChange}
        />
      </div>

      <div
        className={`${styles.agreeToTerms} ${
          errors["agreeToTerms"] ? styles.error : ""
        }`}
      >
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          checked={form.agreeToTerms}
          onChange={handleInputChange}
        />
        <label htmlFor="agreeToTerms">Agree to Terms</label>
      </div>

      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
}

export default ItemForm;

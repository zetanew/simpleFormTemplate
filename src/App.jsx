import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    age: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, age } = e.target.elements;
    setForm({
      name: name.value,
      surname: surname.value,
      age: age.value,
    });
    console.log(form);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" name="surname" />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      // if form data exist then show it else say no data
      {form.name ? (
        <div>
          <p>Name: {form.name}</p>
          <p>Surname: {form.surname}</p>
          <p>Age: {form.age}</p>
        </div>
      ) : (
        <p>No data</p>
      )}
      
    </div>
  );
}

export default App;
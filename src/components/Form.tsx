import React, { HtmlHTMLAttributes, useRef, useState } from "react";
import { Field, FieldValue, FieldValues, useForm } from "react-hook-form";
const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  // event.preventDefault();
  // if (nameRef.current && ageRef.current) {
  //   person.name = nameRef.current.value;
  //   person.age = ageRef.current.valueAsNumber;
  //   console.log(person);
  // }
  // console.log(person);
  // };
  const onSubmit = (data: FieldValues) => console.log(data);
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: event.target.value })
          // }
          // value={person.age}
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

import ShibaContactCanvas from "./canvas/ShibaContact";

import { useState, useRef } from "react";
import { SectionWrapper } from "../hoc";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col mb-10">
      <h2 className="text-primary text-gradient text-[115px] mb-10 text-center">
        Contact us!
      </h2>
      <div className="flex lg:flex-row flex-col-reverse">
      <form ref={formRef} className="flex flex-col w-[100%] items-center">
        <label className="text-[36px] flex flex-col my-4">
          Your name:
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={form.name}
            className="w-[500px] h-12 p-4 text-[22px] rounded-xl mx-8"
          />
        </label>
        <label className="text-[36px] flex flex-col my-4">
          Your email:
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={form.email}
            className="w-[500px] h-12 p-4 text-[22px] rounded-xl mx-8"
          />
        </label>
        <label className="text-[36px] flex flex-col my-4">
          Your message:
          <textarea onChange={handleChange} name="body" value={form.body}
          className="w-[500px] h-[12rem] p-4 text-[22px] rounded-xl mx-8" />
        </label>
        <button className="bg-primary rounded-[35px] w-[200px] text-[32px] py-2 shadow-lg">Submit</button>
      </form>
      <div className="w-[60%]">
        <ShibaContactCanvas />
      </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");

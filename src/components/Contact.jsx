import ShibaContactCanvas from "./canvas/ShibaContact"

import { useState, useRef } from "react"
import { SectionWrapper } from "../hoc"

function Contact() {

  return (
    <div className="flex flex-col">
      <h2 className="text-primary text-gradient text-[115px] mb-10 text-center">
        Contact us!
      </h2>
      <form>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="text" />
        </label>
        <label>
          <textarea />
        </label>
      </form>
    </div>
  )
}

export default Contact
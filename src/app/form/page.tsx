"use client";
// import React, { useActionState } from "react";
import { createFeedback } from "@/app/lib/actions";

const Form = () => {

  return (
    <div className="blockContent">
      <h1>Form</h1>

      <form action={createFeedback}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={""}
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  defaultValue={""}
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <td>Message</td>
              <td>
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                  required
                ></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
               
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import ContactForm from "./contact/ContactForm";
import ContactFormText from "./contact/ContactFormText";
function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Write Message");
  const showMessageBox = () => {
    console.log(buttonText);
    setShowMessage((prevState) => !prevState);
    setButtonText((prevText) =>
      prevText === "Write Message" ? "Send Message" : "Write Message"
    );
  };
  return (
    <div>
        <h1 className="text-center text-3xl p-5">Contact</h1>
        <div  className="flex flex-col justify-center items-center">
          {showMessage?<ContactForm/>:<ContactFormText/>}
          <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded"
            onClick={showMessageBox}
          >
            {buttonText}
          </button>
        </div>
    </div>
  );
}

export default Contact;
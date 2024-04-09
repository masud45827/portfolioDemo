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
      <div className="flex flex-col items-center justify-center">
      <h1 className="pt-10 w-3/4 pb-5 text-3xl text-center">Contact</h1>
      <hr className="h-[3px] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] bg-black text-center"/>
      </div>
        <div  className="flex flex-col justify-center items-center pt-4">
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
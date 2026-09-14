const Contacts = () => {
  return (
    <div className="d-inline-flex p-2">
      <div>
        <a href="tel:+447481910645" target="_blank" rel="noopener noreferrer">
          +44 7481 910645
        </a>
        {/* <span>|</span> */}
        <br></br>
        <a
          href="mailto:andreasmaita@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          andreasmaita@protonmail.com
        </a>
        {/* <span>|</span> */}
        <br></br>
        <a
          href="https://andreasmaita.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          andreasmaita.com
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/andreas-maita/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/andreas-maita
        </a>
        {/* <span>|</span> */}
        <br></br>
        <a
          href="https://github.com/a-p-maita"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/a-p-maita
        </a>
      </div>
    </div>
  );
};

export default Contacts;

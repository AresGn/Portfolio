import React, { useState, useRef, useEffect } from "react";
import { useLanguage, languages } from "../translations/LanguageContext";
import Button from "react-bootstrap/Button";
import { IoLanguage } from "react-icons/io5";
import "../style.css";

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="language-btn"
        aria-expanded={isOpen}
      >
        <IoLanguage style={{ fontSize: "1.2em", marginRight: "5px" }} />
        {languages[language].flag}
      </Button>

      {isOpen && (
        <div className="language-dropdown">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              className={`language-option ${lang === language ? "active" : ""}`}
              onClick={() => {
                changeLanguage(lang);
                setIsOpen(false);
              }}
            >
              {languages[lang].flag} {languages[lang].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector; 
import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../translations/LanguageContext";

function Type() {
  const { translations } = useLanguage();
  
  return (
    <Typewriter
      options={{
        strings: translations.home.roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

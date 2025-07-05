import Language from "@/Components/Language";
import SoftSkill from "@/Components/SoftSkill";
import { languages, softSkills } from "@/app/consts";
import React from "react";

function page() {
  return (
    <div className="lg:w-full ">
      <div className="flex flex-wrap lg:justify-start gap-8 justify-center my-4">
        {softSkills.map((softSkill, index) => (
          <SoftSkill key={index} name={softSkill.name} />
        ))}
      </div>
      <div className="flex flex-col my-8 w-full">
        <div className="text-xl inika-bold text-center md:text-start">Languages</div>
        <div className="my-8 lg:my-2 w-full flex flex-wrap gap-8 justify-center md:justify-start">
          {languages.map((language, index) => (
            <Language key={index} name={language.name} level={language.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;

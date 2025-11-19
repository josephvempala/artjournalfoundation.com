"use client";

import React, { useEffect, useRef } from "react";

declare const $: any;

const Accordion = ({ children }: { children: React.ReactNode }) => {
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const accrodionGrp = $(accordionRef.current);
    if (accrodionGrp.length) {
      const accrodionName = accrodionGrp.data("grp-name");
      const Self = accrodionGrp;
      const accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function (this: HTMLElement) {
        $(this)
          .find(".accrodion-title")
          .on("click", function (this: HTMLElement) {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    }
  }, []);

  return (
    <div
      ref={accordionRef}
      className="accrodion-grp"
      data-grp-name="faq-one-accrodion"
    >
      {children}
    </div>
  );
};

export default Accordion;

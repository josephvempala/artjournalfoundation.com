"use client";

import { Turnstile } from "@marsidev/react-turnstile";

const TurnstileWidget = () => {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      options={{
        theme: "auto",
      }}
    />
  );
};

export default TurnstileWidget;
"use client";

import { Turnstile } from "@marsidev/react-turnstile";

const TurnstileWidget = ({onSuccess}: {onSuccess?: (token: string) => void}) => {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      options={{
        theme: "auto",
      }}
      onSuccess={onSuccess}
    />
  );
};

export default TurnstileWidget;
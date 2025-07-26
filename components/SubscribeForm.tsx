"use client";

import { useEffect } from "react";

export default function SubscribeForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full py-10 px-4 text-center bg-gray-100 rounded-xl shadow-md">
    
      <div className="flex justify-center">
        <iframe
          src="https://subscribe-forms.beehiiv.com/72483029-3eeb-4330-afef-86887268e443"
          className="beehiiv-embed"
          data-test-id="beehiiv-embed"
          frameBorder="0"
          scrolling="no"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "439px",
            borderRadius: "0px",
            backgroundColor: "transparent",
            boxShadow: "none",
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
}

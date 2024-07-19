import { getQuotation } from "@/lib/actions/quote.action";
import React from "react";
import Divider from "./shared/Divider";

const Quote = async () => {
  const quote = await getQuotation();

  return (
    <>
      <p className="text-xl sm:text-2xl font-light max-w-2xl mx-auto text-center mb-5 max-md:px-10 max-xs:px-20">
        &ldquo; {quote.quote} &rdquo; -{" "}
        <i className="text-xl sm:text-2xl font-extralight">{quote.author}</i>
      </p>

      <div className="w-[20%] h-[1px] border border-gray-400 mx-auto mb-10"></div>

      <Divider />
    </>
  );
};

export default Quote;

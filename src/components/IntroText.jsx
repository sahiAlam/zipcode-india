import React from "react";

const IntroText = () => {
  return (
    <div className="my-6">
      <p className="py-4">
        The Nigerian Postal Service (NIPOST), divides the country into 9
        regions, which are the first digits of the code. The 2nd and 3rd digits,
        combined with the first, are the shipping districts for outbound
        sorting. And the delivery location is represented by the last three
        digits.
      </p>
      <p className="py-4">
        All main post offices in 36 States plus the Federal Capital Territory
        have the suffix number or code 001. For example Garki HO in Abuja has
        the postal code 900001. The lowest Postal code for Nigeria is 100001,
        Ikeja, Lagos Metropolitan in Lagos State and the highest is 982112,
        Mbara, Vandeikya in Benue State.
      </p>
    </div>
  );
};

export default IntroText;

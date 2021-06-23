import React from "react";

import SignupLayout from "../components/SignupLayout";
import SignupPage from "../components/SignupPage/SignupPage";
const signup = () => {
  return (
    <div className="bg-[#e5e5e5]">
      <SignupLayout
        title="Sign up"
        description="Sign up to come together, create shared experiences, and explore the limits of our imaginations."
        card="summary_large_image"
        title="I just saved my spot on the Ave"
        image="https://res.cloudinary.com/dh0pbh1ah/image/upload/v1619536905/Screen_Shot_2021-04-22_at_11.35_k3ikqy.png"
        type="website"
      >
        <SignupPage />
      </SignupLayout>
    </div>
  );
};

export default signup;

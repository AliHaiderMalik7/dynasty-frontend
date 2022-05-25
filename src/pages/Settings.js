import React from "react";
import NationalityFilter from "../components/settings/nationalityfilter/NationalityFilter";
import Layout from "../components/common/layout/Layoutwrap";

const nationalities = ["CH", "ES", "FR", "GB"];

const Settings = () => {
  return (
    <Layout>
      <NationalityFilter data={nationalities} />
    </Layout>
  );
};

export default Settings;

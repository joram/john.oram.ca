import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {intlabs_dev} from "./allRoles";


function IntLabs() {
  return <BaseCompanyPage
      companyName="IntLabs"
      description=""
      roles={[intlabs_dev]}
  />
}

export default IntLabs

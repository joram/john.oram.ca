import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {intlabs_dev} from "./allRoles";


function Intlabs() {
  return <BaseCompanyPage
      companyName="Intlabs"
      description="A platform engineering team building internal developer tooling on top of Azure Kubernetes Service."
      roles={[intlabs_dev]}
  />
}

export default Intlabs

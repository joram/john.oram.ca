import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {certn_dev, certn_staff} from "./allRoles";


function Certn() {
  return <BaseCompanyPage
      companyName="Certn"
      description="The company runs many types of background checks, direct to consumer, or on behalf of a company looking to have some trust before interact with the person."
      roles={[certn_dev, certn_staff]}
  />
}

export default Certn

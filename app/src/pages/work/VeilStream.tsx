import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {veilstream_founder} from "./allRoles";


function VeilStream() {
  return <BaseCompanyPage
      companyName="VeilStream"
      description=""
      roles={[veilstream_founder]}
  />
}

export default VeilStream

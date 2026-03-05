import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {veilstream_cto} from "./allRoles";


function VeilStream() {
  return <BaseCompanyPage
      companyName="VeilStream"
      description="Developer tooling that provides data sanitization for dynamic per-branch preview environments, giving each environment realistic prod-like data without exposing sensitive information."
      roles={[veilstream_cto]}
  />
}

export default VeilStream

import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {tutela_devops, tutela_lead} from "./allRoles";


function Tutela() {
  return <BaseCompanyPage
      companyName="Tutela"
      description="The company uses an SDK with app partners to record telemetry, anonymized as much as possible,
          to come up with analytics used by the telco industry."
      roles={[tutela_devops, tutela_lead]}
  />
}

export default Tutela

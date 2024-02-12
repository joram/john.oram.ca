import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {swu_dev, swu_lead} from "./allRoles";


function Sendwithus() {
  return <BaseCompanyPage
      companyName="Sendwithus/Dyspatch"
      description="The company has two products: Sendwithus and Dispatch. The former is an email template management,
          rendering and delivery SaaS product, Dispatch is an enterprise email template management and workflow SaaS
          product. Sendwithus, was the only product the company had for my first two years. After that, the company
          dedicated most development effort to build out Dyspatch."
      roles={[swu_dev, swu_lead]}
  />
}

export default Sendwithus
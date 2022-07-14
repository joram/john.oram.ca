import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
import {socoloco_dev, socoloco_lead} from "./allRoles";




function Socoloco() {
  return <BaseCompanyPage
      companyName="Socoloco"
      description="The company had many products: diggit, begiving, gobid, and guildtrip. They were all ecommerce products white labeled off a single codebase."
      roles={[socoloco_dev, socoloco_lead]}
  />
}

export default Socoloco
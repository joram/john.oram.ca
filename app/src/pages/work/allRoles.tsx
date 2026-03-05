import React from "react";
import BaseCompanyPage from "./BaseCompanyPage";
let soc_lead_description = <>
    Promoted to lead developer in charge of a team of 4 developers.
    <br/>
    Functional Responsibilities:
    <ul>
        <li>Develop the 4 product lines</li>
        <li>Sprint and backlog coordination</li>
        <li>Requirements gathering from non-technical stakeholders</li>
        <li>Human resources for hiring and onboarding</li>
    </ul>
</>

let soc_dev_description = <>
    Initially hired as a QA, the role soon expanded to include full stack development across several product lines.
    <br/>
    <ul>
        <li>Implemented the payment system</li>
        <li>Contributed to building the marketplace platform</li>
        <li>Release deployment with minimal interruption</li>
        <li>Coordinated co-op students: onboarding, pair coding, code reviews, and check-ins</li>
    </ul>
</>

export let minionworks_dev = {
    company: "Minionworks Games",
    jobTitle:'Game Developer',
    description:"Straight out of university, co-founded a small indie studio with two friends to build Karst — " +
        "a first person physics puzzle game set in a cave system. Players move glowing crystals that each affect " +
        "the physics of the world differently, using them to navigate through procedurally generated karst caves. " +
        "As the primary developer, built the gameplay systems, engine tooling, and a voxel-to-cave generation " +
        "algorithm. The game reached a demoable state but did not ship.",
    startDate:"January 2010",
    endDate:"November 2012",
    technologies:["C#", "C++", "Unity"],
}

export let socoloco_dev = {
    company: "Socoloco",
    jobTitle:'Full Stack Web Developer',
    description:soc_dev_description,
    startDate:"November 2012",
    endDate:"July 2015",
    technologies:["Python", "RDS", "EC2", "Redis", "RabbitMQ", "celery"],
}
export let socoloco_lead = {
    company: "Socoloco",
    jobTitle:'Lead Web Developer',
    description:soc_lead_description,
    startDate:"July 2015",
    endDate:"January 2016",
    technologies:["Python", "RDS", "EC2", "Redis", "RabbitMQ", "celery"],
}

export let swu_dev = {
    company: "Sendwithus/Dyspatch",
    jobTitle:'Backend Developer',
    description:"Developed the Sendwithus email delivery product, maintaining a resilient pipeline that integrated " +
    "with unreliable downstream sending services. Set up the incident response program and on-call rotation, " +
    "including procedures and supporting infrastructure. Taught junior developers how to safely execute " +
    "infrastructure, data, and schema migrations.",
    startDate:"January 2016",
    endDate:"July 2017",
    technologies:["Golang", "Python", "Docker", "Redshift", "Cassandra", "RDS", "Kubernetes", "Terraform", "GRPC", "Protobuf", "OpenTracing", "SQS", "Kinesis"],
}

export let swu_lead = {
    company: "Sendwithus/Dyspatch",
    jobTitle:'Backend Team Lead',
    description:"Led a team of 3–6 developers across two products: Sendwithus and Dyspatch. Supported an API " +
    "handling ~500 million calls/month. Built and coordinated a Cassandra cluster writing 2–3 billion records " +
    "with a <30ms p95 response time. Established devops procedures, documentation, and on-call rotation. " +
    "Responsible for hiring, performance reviews, and participating in company direction.",
    startDate:"July 2017",
    endDate:"April 2019",
    technologies:["Golang", "Python", "Docker", "Redshift", "Cassandra", "RDS", "Kubernetes", "Terraform", "GRPC", "Protobuf", "OpenTracing", "SQS", "Kinesis"],
}

export let tutela_devops = {
    company: "Tutela",
    jobTitle:'Senior DevOps',
    description:"Joined the ops team to develop and maintain the core ingress API and data pipeline receiving " +
    "telemetry from mobile SDKs worldwide. The pipeline anonymized incoming data and routed it into specialized " +
    "processing streams, with data ultimately landing in GPU-backed databases for real-time geospatial visualization.",
    startDate:"August 2019",
    endDate:"October 2019",
    technologies:["Java", "Python", "Docker", "RDS", "Kubernetes", "Terraform", "Kinesis"],
}

export let tutela_lead = {
    company: "Tutela",
    jobTitle:'Lead DevOps',
    description:"Promoted to lead of the ops team within two months. Continued ownership of the ingress API " +
    "and data pipeline — an API handling 22 billion monthly invocations, receiving telemetry from mobile SDKs, " +
    "anonymizing it, and routing it into GPU-backed databases for real-time geospatial visualization. " +
    "Also responsible for hiring, mentorship, and infrastructure planning.",
    startDate:"October 2019",
    endDate:"August 2020",
    technologies:["Java", "Python", "Docker", "RDS", "Kubernetes", "Terraform", "Kinesis"],
}

export let certn_dev = {
    company: "Certn",
    jobTitle:'Senior Backend Developer',
    description:"Delivered several major backend initiatives: built and migrated payments onto a new microservice " +
        "to correct and scale the monthly reconciliation process. Architected a modular Check platform allowing " +
        "new data sources to be dynamically integrated into the system with minimal effort. Also built a NetSuite " +
        "integration layer for transaction tracking, and established the incident response program using PagerDuty.",
    startDate:"August 2020",
    endDate:"June 2022",
    technologies:["Python", "RDS", "SQS", "EC2", "ECS", "EKS", "Docker", "Lambdas", "Step Functions"],
}

export let certn_staff = {
    company: "Certn",
    jobTitle:'Staff Engineer/Developer',
    description:"Promoted to Staff Engineer to help raise the engineering bar across the organization. " +
        "Standardized best practices across teams, set up mentoring and education programs, and participated " +
        "in architecture design conversations with each team to guide the codebase toward consistent, " +
        "maintainable patterns.",
    startDate:"June 2022",
    endDate:"June 2023",
    technologies:["Python", "RDS", "SQS", "EC2", "ECS", "EKS", "Docker", "Lambdas", "Step Functions"],
}

export let intlabs_dev = {
    company: "Intlabs",
    jobTitle:'Senior Full Stack Developer',
    description:"Helped build out a microservice platform on Azure Kubernetes Service. Built preview environments " +
        "for code changes, allowing teams to test services in isolation before merging. Optimized and documented " +
        "the process for onboarding new services to the cluster.",
    startDate:"September 2023",
    endDate:"May 2024",
    technologies:["Go", "TypeScript", "React", "NestJS", "AKS", "Helm", "Terraform"],
}

export let veilstream_cto = {
    company: "VeilStream",
    jobTitle:'Co-founder / CTO',
    description:"Co-founded VeilStream, a developer tooling product that provides data sanitization for dynamic " +
        "per-branch preview environments, giving each environment realistic prod-like data without exposing " +
        "sensitive information. As CTO, responsible for technical architecture, product development, and " +
        "building out the engineering foundation.",
    startDate:"May 2024",
    endDate:"Today",
    technologies:["Golang", "Python", "TypeScript", "React", "Terraform", "AWS", "Kubernetes"],
}

function AllRoles() {
  return <BaseCompanyPage
      companyName="All Roles"
      roles={[
          minionworks_dev,
          socoloco_dev,
          socoloco_lead,
          swu_dev,
          swu_lead,
          tutela_devops,
          tutela_lead,
          certn_dev,
          certn_staff,
          intlabs_dev,
          veilstream_cto,
      ]}
   description=""/>
}

export default AllRoles

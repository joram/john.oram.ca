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
    Initially hired as a QA, the role soon expanded to include development and maintenance of feature sets for several product lines.
    <br/>
    Functional Responsibilities:
    <ul>
        <li>Feature Development</li>
        <li>Release deployment with minimal interruption</li>
        <li>Coordinate co-op students, onboarding, pair coding, code reviews, and periodic check ins</li>
    </ul>

</>

export let minionworks_dev = {
    company: "Minionworks Games",
    jobTitle:'Game Developer',
    description:"Out of university, with two friends build a prototype first person 3D physics puzzle game. " +
        "Implementing a karst (cave formations) generation algorithm to convert voxels into releastic caves.",
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
    description:"Developed the Sendwithus product, including a delivery pipeline with unreliable downstream " +
    "services. Core tasks included: Contribute to, and monitor a resilient distributed system Building an on-call " +
    "team, including its procedures and infrastructure. Designing new services or refactoring major components to " +
    "add functionality or scalability Promoting a healthy work environment for architecture and system design " +
    "discourse.",
    startDate:"January 2016",
    endDate:"July 2017",
    technologies:["Golang", "Python", "Docker", "Redshift", "Cassandra", "RDS", "Kubernetes", "Terraform", "GRPC", "Protobuf", "OpenTracing", "SQS", "Kinesis"],
}

export let swu_lead = {
    company: "Sendwithus/Dyspatch",
    jobTitle:'Backend Team Lead',
    description:"Ran a team of 3-6 devs who developed two products: Sendwithus and Dyspatch. Core tasks " +
    "included: Refactoring old and designing new microservices Supporting API ~500 million calls/month Coordinating " +
    "and constructing a Cassandra Cluster writing 2-3 billion records with a <30ms p95 response time Building out, " +
    "coordinating and documenting devops procedures and an on-call rotation Hiring, performance reviews, and " +
    "participating in company direction discussions.",
    startDate:"July 2017",
    endDate:"April 2019",
    technologies:["Golang", "Python", "Docker", "Redshift", "Cassandra", "RDS", "Kubernetes", "Terraform", "GRPC", "Protobuf", "OpenTracing", "SQS", "Kinesis"],
}

export let tutela_devops = {
    company: "Tutela",
    jobTitle:'Senior DevOps',
    description:"Working on an ops team of 4, we coordinated and ran many servers, scaled to take payloads " +
    "from many mobile devices around the world, process and index the data, and then store the data in a set of " +
    "GPU backed databases to be able to be queried and rendered for the customers.",
    startDate:"August 2019",
    endDate:"October 2019",
    technologies:["Java", "Python", "Docker", "RDS", "Kubernetes", "Terraform", "Kinesis"],
}

export let tutela_lead = {
    company: "Tutela",
    jobTitle:'Lead Web Developer',
    description:"Hired as a senior developer on the ops team, promoted to lead of the ops team " +
    "within two months. Built upon and maintained an ingress API and other core operational infrastructure. " +
    "Functional Responsibilities: " +
    "Hiring and mentorship, " +
    "Infrastructure planning, development, and deployment, " +
    "Responsible for an API with 22 billion monthly invocations",
    startDate:"October 2019",
    endDate:"August 2020",
    technologies:["Java", "Python", "Docker", "RDS", "Kubernetes", "Terraform", "Kinesis"],
}

export let certn_dev = {
    company: "Certn",
    jobTitle:'Senior Backend Developer',
    description:"Architected from the ground up a new microservice as a stitch layer to NetSuite " +
        "(accounting software). Initially working solo, eventually gaining 2-3 team members, we fleshed out a " +
        "resilient transaction tracking piece of infrastructure. Along side these projects, building out the " +
        "incident response program to handle high severity incidents using PagerDuty.",
    startDate:"August 2020",
    endDate:"June 2022",
    technologies:["Python", "RDS", "SQS", "EC2", "ECS", "EKS", "Docker", "Lambdas", "Step Functions"],
}

let certn_staff_description = <>
    <ul>
        <li>Team related coding 30%</li>
        <li>Design and estimating 10%</li>
        <li>design, estimation and support (for other teams) 25%</li>
        <li>Career building and evaluation 10%</li>
        <li>knowledge sharing 10%</li>
        <li>high level project estimation 5%</li>
        <li>ad hock support 10%</li>
    </ul>
</>
export let certn_staff = {
    company: "Certn",
    jobTitle:'Staff Engineer/Developer',
    description: certn_staff_description,

    startDate:"June 2022",
    endDate:"Today",
    technologies:["Python", "RDS", "SQS", "EC2", "ECS", "EKS", "Docker", "Lambdas", "Step Functions"],
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
      ]}
  />
}

export default AllRoles

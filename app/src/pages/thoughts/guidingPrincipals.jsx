import React from "react";
import BasePage from "../BasePage";
import {Header, List} from "semantic-ui-react";


function GuidingPrincipals() {
  return<BasePage title={"Guiding Principals"}>
      These thoughts were written by Peter Locke at Certn.
      <br/>
      <br/>
      <Header as={'h2'}> WE ARE THE DEVELOPMENT TEAM EVERY BUSINESS WANTS</Header>
      <List>
          <List.Content>
              <List.Item>We continually build trust outside the development org through clear communication with our stakeholders, intelligent product discussions, and discussing timelines early and often to avoid surprises and allow for agile . We help our business counterparts understand the cone of uncertainty</List.Item>
              <List.Item>We build amazing, high quality products. We release features that delight our customers, are easy to use, and are correct, scalable, and extensible.</List.Item>
              <List.Item>We scale with technology, not people. We aim to eliminate all predictable manual process once an idea is proven from a business perspective. The things we build scale automatically with their business growth.</List.Item>
              <List.Item>We understand the business goal behind every task. We know the customer that we are building for, and help drive to the correct requirements. We make countless micro decisions slanted in the right direction because of our business knowledge.</List.Item>
              <List.Item>We are end to end team owners of what we build. We ensure what we build is working properly for our customers in production before moving onto the next thing. We as individuals own all our teams' work whether or not we wrote the specific piece of code ourselves.</List.Item>
              <List.Item>We are agile. We phase our work in slices that bring value to the customer as early as possible.</List.Item>
              <List.Item>We say 'no' constructively through education of the downsides of what 'yes' would mean. We suggest alternatives.</List.Item>
              <List.Item>Our processes work for us, never the other way around. We continually evaluate and adjust our processes to ensure they help us meet our primary goal of building the right thing, for the right customer, at the right time.</List.Item>
          </List.Content>
      </List>

      <Header as={'h2'}>WE ARE CRAFTSPEOPLE, NOT LABOURERS</Header>
      <List>
          <List.Content>
              <List.Item>We take pride in what we build and build correctly. We don't rush. This doesn't mean we work slowly. It means we push back against any pressure to 'just get it out the door,' and do fewer things better.</List.Item>
              <List.Item>We eliminate features to accelerate timelines; we never sacrifice quality. We work with our stakeholders and team, communicating early and often to ensure the correct minimal slice for the customer is built in those cases where the timeline is inflexible.</List.Item>
              <List.Item>We adopt new technology only after proving current technology cannot solve our problem. We don't fear new technology, but we understand that every new framework, language, or component permanently increases the overall system complexity and therefore the cognitive load necessary to troubleshoot, maintain, and build in the future. We introduce carefully, and leverage what we have. We train what we introduce.</List.Item>
              <List.Item>We code for our future selves and the next developer that will be touching the code we write. We understand that coding for a rapidly growing enterprise product with multiple development teams is different than coding for ourselves. We are extremely conscious of our code readability, robustness, and maintainability and measure it by how quickly a new-to-the-code developer can get up to speed.</List.Item>
              <List.Item>We leave things better than we found it. That is, when doing any feature development, we work tech debt removal and bringing the associated code up to best practices into our estimation and coding. We understand that at times, this effort is significant and can significantly increase an estimate. We are supported by our PMs and Leads in this</List.Item>
              <List.Item>We really stick to our best practices at all layers of the system. Smells in tests, configuration, or across layers of the system make us just as uncomfortable as in the primary code.</List.Item>
              <List.Item>We always look to improve ourselves. Be it through internal collaboration, self driven learning, official training, or other methods that work for you.</List.Item>
          </List.Content>
      </List>

      <Header as={'h2'}>WE WORK SUSTAINABLY</Header>
      <List>
        <List.Content>
          <List.Item>We are honest and communicative about our stress levels. Working long hours is not a badge of honour.</List.Item>
          <List.Item>We understand that there is ebb and flow to productivity. We know we are not paid to sit in a chair for a certain number of hours each day, but rather to produce results.</List.Item>
          <List.Item>We push and give overtime when it matters and take recovery time afterward without guilt. Overtime pushes are the exception, not the norm. Management is supportive and encouraging of recovery time.</List.Item>
          <List.Item>We manage our time effectively. We take control of our calendars.</List.Item>
          <List.Item>We are not a 'butt in chair' company. We know we are paid to get a job done and provide impact, not to sit in our chair. Therefore we organize our working schedules around what works for us and for our teammates. We coordinate holiday and away time with our team before asking our manager!</List.Item>
          <List.Item>We celebrate our successes and promote a company wide culture to do the same.</List.Item>
          <List.Item>We have fun and enjoy ourselves! Otherwise why are we here?</List.Item>
          <List.Item>We ask for help. We understand everyone, at all levels, needs help!</List.Item>
        </List.Content>
      </List>

      <Header as={'h2'}>WE ARE COLLABORATORS WITHOUT EGO</Header>
      <List>
          <List.Content>
              <List.Item>We strive to share knowledge, not silo.</List.Item>
              <List.Item>We always look for ways to work together. We understand that working together through methods such as pair programming and group architecture sessions leads to higher quality results and greater personal growth.</List.Item>
              <List.Item>We are not afraid to disagree and have healthy discussions. But we commit to the chosen path whether is it ours our not.</List.Item>
              <List.Item>We are not afraid to be wrong. Being wrong is normal and an important part of a growth mindset.</List.Item>
              <List.Item>The best idea wins, and it does not matter where or from whom it originated.</List.Item>
              <List.Item>We are not afraid to give and receive honest feedback, both positive and constructive. We strive for the interpersonal trust that allows for this radical candor. We know this is hard and respect our peers and ourselves for doing it.</List.Item>
          </List.Content>
      </List>

  </BasePage>
}

export default GuidingPrincipals;

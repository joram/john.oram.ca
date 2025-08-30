import React from "react";
import BasePage from "../BasePage";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

function GuidingPrincipals() {
  return (
    <BasePage title={"Guiding Principals"}>
      <Typography paragraph>
        These thoughts were written by Peter Locke at Certn.
      </Typography>

      <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 4, mb: 2 }}>
        WE ARE THE DEVELOPMENT TEAM EVERY BUSINESS WANTS
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="We continually build trust outside the development org through clear communication with our stakeholders, intelligent product discussions, and discussing timelines early and often to avoid surprises and allow for agile . We help our business counterparts understand the cone of uncertainty" />
        </ListItem>
        <ListItem>
          <ListItemText primary="We build amazing, high quality products. We release features that delight our customers, are easy to use, and are correct, scalable, and extensible." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We scale with technology, not people. We aim to eliminate all predictable manual process once an idea is proven from a business perspective. The things we build scale automatically with their business growth." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We understand the business goal behind every task. We know the customer that we are building for, and help drive to the correct requirements. We make countless micro decisions slanted in the right direction because of our business knowledge." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We are end to end team owners of what we build. We ensure what we build is working properly for our customers in production before moving onto the next thing. We as individuals own all our teams' work whether or not we wrote the specific piece of code ourselves." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We are agile. We phase our work in slices that bring value to the customer as early as possible." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We say 'no' constructively through education of the downsides of what 'yes' would mean. We suggest alternatives." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Our processes work for us, never the other way around. We continually evaluate and adjust our processes to ensure they help us meet our primary goal of building the right thing, for the right customer, at the right time." />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 4, mb: 2 }}>
        WE ARE CRAFTSPEOPLE, NOT LABOURERS
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="We take pride in what we build and build correctly. We don't rush. This doesn't mean we work slowly. It means we push back against any pressure to 'just get it out the door,' and do fewer things better." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We eliminate features to accelerate timelines; we never sacrifice quality. We work with our stakeholders and team, communicating early and often to ensure the correct minimal slice for the customer is built in those cases where the timeline is inflexible." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We adopt new technology only after proving current technology cannot solve our problem. We don't fear new technology, but we understand that every new framework, language, or component permanently increases the overall system complexity and therefore the cognitive load necessary to troubleshoot, maintain, and build in the future. We introduce carefully, and leverage what we have. We train what we introduce." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We code for our future selves and the next developer that will be touching the code we write. We understand that coding for a rapidly growing enterprise product with multiple development teams is different than coding for ourselves. We are extremely conscious of our code readability, robustness, and maintainability and measure it by how quickly a new-to-the-code developer can get up to speed." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We leave things better than we found it. That is, when doing any feature development, we work tech debt removal and bringing the associated code up to best practices into our estimation and coding. We understand that at times, this effort is significant and can significantly increase an estimate. We are supported by our PMs and Leads in this" />
        </ListItem>
        <ListItem>
          <ListItemText primary="We really stick to our best practices at all layers of the system. Smells in tests, configuration, or across layers of the system make us just as uncomfortable as in the primary code." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We always look to improve ourselves. Be it through internal collaboration, self driven learning, official training, or other methods that work for you." />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 4, mb: 2 }}>
        WE WORK SUSTAINABLY
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="We are honest and communicative about our stress levels. Working long hours is not a badge of honour." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We understand that there is ebb and flow to productivity. We know we are not paid to sit in a chair for a certain number of hours each day, but rather to produce results." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We push and give overtime when it matters and take recovery time afterward without guilt. Overtime pushes are the exception, not the norm. Management is supportive and encouraging of recovery time." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We manage our time effectively. We take control of our calendars." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We are not a 'butt in chair' company. We know we are paid to get a job done and provide impact, not to sit in our chair. Therefore we organize our working schedules around what works for us and for our teammates. We coordinate holiday and away time with our team before asking our manager!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="We celebrate our successes and promote a company wide culture to do the same." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We have fun and enjoy ourselves! Otherwise why are we here?" />
        </ListItem>
        <ListItem>
          <ListItemText primary="We ask for help. We understand everyone, at all levels, needs help!" />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" sx={{ color: 'white', mt: 4, mb: 2 }}>
        WE ARE COLLABORATORS WITHOUT EGO
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="We strive to share knowledge, not silo." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We always look for ways to work together. We understand that working together through methods such as pair programming and group architecture sessions leads to higher quality results and greater personal growth." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We are not afraid to disagree and have healthy discussions. But we commit to the chosen path whether is it ours our not." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We are not afraid to be wrong. Being wrong is normal and an important part of a growth mindset." />
        </ListItem>
        <ListItem>
          <ListItemText primary="The best idea wins, and it does not matter where or from whom it originated." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We are not afraid to give and receive honest feedback, both positive and constructive. We strive for the interpersonal trust that allows for this radical candor. We know this is hard and respect our peers and ourselves for doing it." />
        </ListItem>
      </List>
    </BasePage>
  );
}

export default GuidingPrincipals;

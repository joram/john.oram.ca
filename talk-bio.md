# AI Meetup — Technical Track

## Talk

**Title:** Give AI Safe Access to Your Production Database

**Description:**
Production databases contain sensitive data that you can't hand directly to an LLM - but what if you didn't have to choose between powerful AI tooling and data safety? This talk covers an intermediary masking layer that sits between your LLM and your database, letting you dynamically configure access control at query time. The LLM requests access to a specific subset of data and provides a reason for needing it. That request is evaluated, filtered, and fulfilled - giving the model what it needs without exposing what it shouldn't see.


## Speaker Bio

John Oram is a software developer and Co-founder/CTO of VeilStream, based in Victoria, BC. With over 15 years of experience building secure, scalable backend systems, he has led engineering teams across companies ranging from early-stage startups to high-throughput platforms handling tens of billions of API calls per month.

He is an active member of the Victoria tech community - a channel steward with YYJ Tech an active member of Tenfold, and a volunteer conference organizer for events including Prompt Victoria. He's also one of the coordinators of the Victoria tech sector's mentorhsip program.

His current work at VeilStream focuses on data sanitization for developer environments, giving teams access to realistic, production-like data without exposing sensitive information - a problem that maps directly to the challenges of putting LLMs safely in front of real data.

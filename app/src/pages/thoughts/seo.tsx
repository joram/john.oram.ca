import React from "react";
import BasePage from "../BasePage";
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";


function SEO() {
  return <BasePage title={"SEO Best Practices"} subtitle="">
    <Link to={"https://www.linkedin.com/posts/robtcase_marketing-seo-google-activity-7063140774732824576-50O3?utm_source=share&utm_medium=member_desktop"}>
        LinkedIn Post
    </Link>

    <List>
      <List.Content>
        <List.Item>1. Don't buy backlinks - paid backlinks always come back to haunt you</List.Item>
        <List.Item>2. Avoid Keyword stuffing - overusing the same keyword on one page will eventually cause problems</List.Item>
        <List.Item>3. Avoid shallow content depth - Too little content on your pages can trigger problems</List.Item>
        <List.Item>4. Don't steal content - Content theft is detected quickly by Google, and triggers a penalty</List.Item>
        <List.Item>5. Don't make ads interfere with a users page journey - If Google detects that your website is using ad presentation methods that force a user to need to close or remove an ad to use the page…that is a problem</List.Item>
        <List.Item>6. Never hide content - hidden content on a page is a major problem. For example, if Googlebot finds white text on a white background it's a penalty</List.Item>
        <List.Item>7. Show you are a legitimate business - Make sure you have terms of use, privacy policy and contact pages accessible to the public</List.Item>
        <List.Item>8. Write URLs for humans - links should be clear to read for humans and relevant to the content on the page they point to</List.Item>
        <List.Item>9. Avoid link spamming - Websites that go around the web just dropping links in any comment section or forum not relevant to the content are now penalized</List.Item>
      </List.Content>
    </List>
  </BasePage>
}

export default SEO

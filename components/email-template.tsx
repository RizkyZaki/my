import * as React from "react";

interface EmailTemplateProps {
  userMailId: string;
  mailContent: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userMailId,
  mailContent,
}) => (
  <div>
    <h1>Message from {userMailId} !</h1>
    <br />
    <p>{mailContent}</p>
  </div>
);

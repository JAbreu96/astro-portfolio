import * as emailjs from "@emailjs/browser";

export class Emailer {
  emailSent: boolean;
  constructor() {
    this.emailSent = false;
  };

  private sendEmail = (body: { to_name: string, from_name: string, from_email: string, from_message: string }) => {

    //Add send Email logic
    emailjs
      .send(import.meta.env.PUBLIC_SERVICE_ID, import.meta.env.PUBLIC_TEMPLATE_ID, body, import.meta.env.PUBLIC_EMAIL_JS_PUBLIC_KEY)
      .then(
        (response) => {
          console.log("Message sent successfully", response.status, response.text);
          this.emailSent = true;
        },
        function (error) {
          alert("Error sending message");
          console.log(error);
        }
      );
  };

  private submitEmail = (emailParams: { to_name: string, from_email: string, from_name: string, from_message: string }) => {


    this.sendEmail({ to_name: emailParams.to_name, from_name: emailParams.from_name, from_email: emailParams.from_email, from_message: emailParams.from_message });
  };

  setUpAndSendEmailHandler = () => {
    if (this.emailSent) return;

    emailjs.init(import.meta.env.EMAIL_JS_PUBLIC_KEY);

    const form: HTMLElement | null = document.getElementById("contact-form");

    console.log("sending...");

    if (form) {

      const name: string = document.forms[0]["name"].valueOf();
      const email: string = document.forms[0]["email"].valueOf();
      const message: string = document.forms[0]["message"].valueOf();

      interface params {
        to_name: string;
        from_name: string,
        from_email: string,
        from_message: string,
      }

      const params: params = {
        to_name: "Joelchrist",
        from_name: name.value,
        from_email: email.value,
        from_message: message.value,
      };

      this.submitEmail(params);

    } else {
      throw new Error("form not found");
    }
  };

}
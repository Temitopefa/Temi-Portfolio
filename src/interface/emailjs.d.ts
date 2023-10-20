declare module '@emailjs/browser' {
    interface EmailJSResponse {
      text: string;
    }
  
    function sendForm(
      serviceID: string,
      templateID: string,
      form: HTMLFormElement | null,
      userID: string
    ): Promise<EmailJSResponse>;
  }
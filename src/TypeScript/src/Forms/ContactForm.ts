import { ContactFormContext } from "../dataverse-gen/entities/Contact";

export class ContactForm {
    static async onLoad(context: ContactFormContext): Promise<void> {
        const firstName = context.getAttribute("firstname");
        console.log(`First Name: ${firstName}`);
    }
}

/* eslint-disable*/
import { contactMetadata } from "./entities/Contact";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";
import { WhoAmIMetadata } from "./functions/WhoAmI";

export const Entities = {
  Contact: "contact",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    contact: contactMetadata,
  },
  actions: {
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
    WhoAmI: WhoAmIMetadata,
  }
};
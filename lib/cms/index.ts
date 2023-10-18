import { createClient } from "contentful";

const {
  PRODUCTION = "",
  CMS_SPACE_ID = "",
  CMS_DELIVERY_APIKEY = "",
  CMS_PREVIEW_APIKEY = "",
} = process.env;

const sandbox = PRODUCTION != "1";

export const cmsClient = createClient({
  space: CMS_SPACE_ID,
  accessToken: sandbox ? CMS_PREVIEW_APIKEY : CMS_DELIVERY_APIKEY,
  ...(sandbox ? { host: "preview.contentful.com" } : {}),
});

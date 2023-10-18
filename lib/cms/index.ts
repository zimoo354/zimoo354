import { createClient } from "contentful";
import {
  PRODUCTION,
  CMS_SPACE_ID,
  CMS_PREVIEW_APIKEY,
  CMS_DELIVERY_APIKEY,
} from "@/lib/env";

PRODUCTION;

export const cmsClient = createClient({
  space: CMS_SPACE_ID,
  accessToken: !PRODUCTION ? CMS_PREVIEW_APIKEY : CMS_DELIVERY_APIKEY,
  ...(!PRODUCTION ? { host: "preview.contentful.com" } : {}),
});

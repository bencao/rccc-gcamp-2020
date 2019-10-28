import CMS from "netlify-cms-app";
import SchedulePreview from "./preview-templates/SchedulePreview";
import SpeakersPreview from "./preview-templates/SpeakersPreview";

CMS.registerPreviewTemplate("index", SpeakersPreview);

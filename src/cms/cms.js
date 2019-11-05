import CMS from "netlify-cms-app";
import withStyled from "./with-styled";

import SchedulePreview from "./preview-templates/SchedulePreview";
import SpeakersPreview from "./preview-templates/SpeakersPreview";

CMS.registerPreviewTemplate("schedule", withStyled(SchedulePreview));
CMS.registerPreviewTemplate("speakers", withStyled(SpeakersPreview));

import { ScheduleType } from "../../api/queries/ScheduleQueries.types";
import { DefaultModalDataType } from "../../common/defaultModalData.types";
import { FollowedAnimeType } from "../../context/FollowedAnimesContext.types";

export type HomeContainerProps = {
  modalOptions: DefaultModalDataType[];
  followedAnimes: FollowedAnimeType[];
  scheduleData: ScheduleType[];
};

import axios from "axios";
import Draft from "../models/meeting/draft";
import Meeting from "../models/meeting/meeting";

class Meetings {
  async getPerGroup(groupId: string): Promise<Meeting[]> {
    const response = await axios<Meeting[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/meetings/${groupId}`
    );
    const meetings = response.data;
    return meetings;
  }

  async add(draft: Draft): Promise<Meeting> {
    const response = await axios.post(
      `${import.meta.env.VITE_REST_SERVER_URL}/meetings`,
      draft
    );
    const newMeeting = response.data;
    return newMeeting;
  }

}

const meetingsServices = new Meetings();
export default meetingsServices;

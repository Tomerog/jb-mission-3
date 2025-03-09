import axios from "axios";
import Group from "../models/group/group";

class Groups {
  async getAll(): Promise<Group[]> {
    const response = await axios(
      `${import.meta.env.VITE_REST_SERVER_URL}/groups`
    );
    const groups = response.data;
    return groups;
  }
}

const groupsServices = new Groups();
export default groupsServices;

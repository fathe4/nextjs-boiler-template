import { useQuery } from "@tanstack/react-query";
import Api from "../services/Api";
import { ALL_GROUP_RESULTS } from "./Constants";

const useGetAllGroupsResult = () =>
  useQuery([ALL_GROUP_RESULTS], () => "/", {
    // initialData: [],
  });

export { useGetAllGroupsResult };

import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../services/Api";
import { ALL_GROUP_RESULTS } from "./Constants";

const useDeleteGroupResults = () => {
  const queryClient = useQueryClient();
  //   return useMutation(() => "/", {
  //     onSuccess: () => queryClient.invalidateQueries([ALL_GROUP_RESULTS]),
  //   });
};
export { useDeleteGroupResults };

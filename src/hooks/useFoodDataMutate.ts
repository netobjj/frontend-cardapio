import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FoodData } from "../interface/FoodData";
import axios, { type AxiosPromise } from 'axios';

const API_URL = 'http://localhost:8080'

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] }); //inválida (faz um novo get) as queries que tem essas key
        }
    })

    return mutate;
}
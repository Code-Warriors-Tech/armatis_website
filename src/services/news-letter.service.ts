import apiClient from "@/api/api-client"

export const joinNewsLetterApi = async (email: string) => {
    const response = await apiClient.post('/newsletter/join', {email});
    return response.data
}

export const fetchSubscribersApi = async () => {
    const response = await apiClient.get('/newsletter/');
    return response.data
}
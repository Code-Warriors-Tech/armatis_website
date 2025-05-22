import apiClient from "@/api/api-client"
import { IContact } from "@/interface/contact.interface";

export const sendMessageApi = async (data: IContact) => {
    const response = await apiClient.post('/contact/send_message', data);
    return response.data
}

export const fetchMessagesApi = async () => {
    const response = await apiClient.get('/newsletter/');
    return response.data
}
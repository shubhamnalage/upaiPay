import { api } from "./service-config";


export function upiPayment(payload) {
    return api().post(`/payment-gateway`, JSON.stringify(payload));
  }
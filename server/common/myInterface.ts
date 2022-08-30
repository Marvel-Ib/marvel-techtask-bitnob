interface Payload {
  customerEmail: string;
  satoshis: number;
  address: string;
}

interface invoicePayload {
  request: string;
  reference: string;
  customerEmail: string;
}

export { Payload, invoicePayload };

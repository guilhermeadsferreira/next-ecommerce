export type Events = "user.created" | "user.updated" | "*";

export type EmailAddress = {
  id: string;
  email_address: string;
};

export type EventData = {
  id: string;
  first_name: string;
  last_name: string;
  email_addresses: EmailAddress[];
  primary_email_address_id: string;
  attributes: Record<string, string | number>;
};

export type Event = {
  data: EventData;
  object: "event";
  type: Events;
};

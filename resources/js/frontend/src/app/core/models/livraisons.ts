export interface Livraisons {
  isSelected: boolean;
  id: number;
  pickup_address: string;
  dropoff_address : string;
  status: string;
  receiver_name: string;
  receiver_phone: string;
  delivery_latitude: number;
  delivery_longitude: number;
  isEdit: boolean;
}






export const UserColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'pickup_address',
    type: 'text',
    label: 'Adresse de récupération',
    required: true,
  },
  {
    key: 'dropoff_address',
    type: 'text',
    label: 'Adresse de livraison',
    required: true

  },
  {
    key: 'status',
    type: 'string',
    label: 'status',
    required: true

  },

  {
    key: 'receiver_name',
    type: 'string',
    label: 'Nom de livreur',
    required: true

  },
  {
    key: 'receiver_phone',
    type: 'text',
    label: 'numéro de livreur',
    required: true
  },

  {
    key: 'delivery_latitude',
    type: 'string',
    label: 'l\'altitude de livraison',
    required: true

  },
  {
    key: 'delivery_longitude',
    type: 'string',
    label: 'longitude de livraison',
    required: true

  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

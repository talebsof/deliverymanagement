export interface DeliveryPersons {
  isSelected: boolean;
  id: number;
  name: string;
  surname: string;
  phone_number: string;
  status: string;
  isEdit: boolean;
}

export const UserColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'nom',
    required: true,
  },
  {
    key: 'surname',
    type: 'text',
    label: 'surnom',
    required: true

  },
  {
    key: 'phone_number',
    type: 'text',
    label: 'Numéro de téléphone',
    required: true,
    pattern: "^\\+?[0-9]{1,15}$"
  },
  {
    key: 'status',
    type: 'text',
    label: 'Status',
    required: true,
    pattern: '^(available|unavailable)$'
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

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
    label: 'Name',
    required: true,
  },
  {
    key: 'surname',
    type: 'text',
    label: 'surname',
    required: true

  },
  {
    key: 'phone_number',
    type: 'number',
    label: 'phone number',
    required: true
  },
  {
    key: 'status',
    type: 'string',
    label: 'status',
    required: true
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

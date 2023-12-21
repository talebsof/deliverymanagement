export interface Livraisons {
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
  },
  {
    key: 'phone_number',
    type: 'text',
    label: 'phone number',
    required: true
  },
  {
    key: 'status',
    type: 'string',
    label: 'status',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

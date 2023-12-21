export interface Tournes {
  isSelected: boolean;
  id: number;
  start_date: string;
  end_date: string;
  starting_point_latitude: number;
  starting_point_longitude: number;
  isEdit: boolean;
}
export const UserColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },


  {
    key: 'start_date',
    type: 'string',
    label: 'Date de démarrage',
    required: true,
  },
  {
    key: 'end_date',
    type: 'string',
    label: 'Date de fin',
    required: true
  },
  {
    key: 'starting_point_latitude',
    type: 'number',
    label: 'l\altitude de point de démarrage',
    required: true
  },
  {
    key: 'starting_point_longitude',
    type: 'number',
    label: 'longitude de point de démarrage',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

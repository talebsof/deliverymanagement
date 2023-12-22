export interface Tournes {
  isSelected: boolean;
  id: number;
  start_date: string;
  end_date: string;
  starting_point_latitude: number;
  starting_point_longitude: number;
  isEdit: boolean;
}


export interface ApiResponse<Tournes> {
  data: Tournes;
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
    pattern:"^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"

  },
  {
    key: 'end_date',
    type: 'string',
    label: 'Date de fin',
    required: true,
    pattern:"^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
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

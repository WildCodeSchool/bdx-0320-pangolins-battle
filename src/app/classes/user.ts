export class User {
  id: number;
  email: string;
  admin: boolean;
  lastname: string;
  firstname: string;
  github: string;
  banished: boolean;
  fullname: string;
  main_role: string;
  current_crew: Currentcrew;
  authorities: any[];
}

interface Currentcrew {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  start_date: string;
  opened: boolean;
}

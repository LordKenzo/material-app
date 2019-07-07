export interface Employee {
  $key?: string;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  department: number;
  hireDate: Date;
  isPermanent: boolean;
}

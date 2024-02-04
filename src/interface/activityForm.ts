export interface Activity {
  description: string;
  timeSpent: string;
}

export interface FormData {
  user: {
    name: string;
    age: number;
    contactNumber: string;
  };
  activities: Activity[];
  isSubmitted: boolean;
}

export interface FormDataDisplay {
  data: FormData;
}

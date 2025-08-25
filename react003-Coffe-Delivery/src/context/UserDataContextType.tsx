type userData = {
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
}| null;

type userCart = {
  id: number | null;
  name: string | null;
  description: string | null;
  tags: string[] | null;
  price: number | null;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
} | [];

export interface userDataContextType {
  userData: userData | null;
  userCart: userCart | [];
}


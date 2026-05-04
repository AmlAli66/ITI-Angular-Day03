export interface User {
    id?: number;
    firstName: string;
    email: string;
    password: string;
    role?: 'admin' | 'user';
}

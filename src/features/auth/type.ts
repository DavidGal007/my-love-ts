export type authUser = {
    email: string;
    password: string;
    username: string;
}

export type LoginUser = {
    email: string;
    password: string;
}

export interface authProps {
    carrentUser: authUser[];
    isLoggedIn: boolean;
    status: 'success' | 'loading' | 'failed';
}
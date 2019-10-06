export class UserModel {
    id!: number;
    github_username!: string;
    name?: string;
    image_url?: string;
    age!: number;
    email!: string;
    password!: string;
    bio?: string;    
    gitInfo?: any;
}
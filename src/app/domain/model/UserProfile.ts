export type UserProfile = {
    id: number;
    role: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    job_desc: string;
    address: string;
    mobile: string;
    registration_date: Date;
    profile_image_url: string;
    confirmed: number;
};
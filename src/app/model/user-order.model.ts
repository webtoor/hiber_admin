export interface UserOrder {
    id: string;
    subject:string;
    dtprojectstart:Date;
    dtprojectend:Date;
    created_at:Date;
    projecttype: string;
    user_client : {
        username : string;
    }
}

import { DataSource } from 'typeorm';
export declare const dataBase: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];

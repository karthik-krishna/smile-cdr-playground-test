import { IItem } from './IItem';

export interface IQuestion {
    "resourceType": String,
    "id": String,
    "url": String,
    "status": String,
    "subjectType": String[],
    "date": String,
    "item" ?: IItem[]
}


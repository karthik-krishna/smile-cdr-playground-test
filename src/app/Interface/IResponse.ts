import {IItem} from './IItem'

export interface IResponse {
    "id":Number,
    "status":String,
    "authored":Date,
    "author":String,
    "subject":String,
    "source":String,
    "item" ?:IItem[]
}

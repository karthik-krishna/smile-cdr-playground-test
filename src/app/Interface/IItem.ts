export interface IItem {
    "linkId":String,
    "text":String,
    "type":String,
    "answer"?:String,
    "item" ?: IItem[]
}
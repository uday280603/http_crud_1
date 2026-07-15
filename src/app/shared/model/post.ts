

export interface Ipost{
    title: string,
    body : string,
    userId : number,
    id : string
}

export interface IpostRes{
    [key : string] : Ipost
}
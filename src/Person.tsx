interface propsPerson{
    name: string,
    email: string,
    age: number,
    isMarried: boolean,
    friends: string[],
    country: enumCountry
}

export enum enumCountry{
    alg = "Algeria",
    can = "Canada",
    brz = "Brazil"
}

export const Person = (props: propsPerson) =>{
    return(
        <div>
            <h1>Name : {props.name} </h1>
            <h1>Email : {props.email} </h1>
            <h1>Age : {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} married </h1>
            {props.friends.map((friend: string)=>
                <h1>{friend}</h1>
            )}
            <h1>Country : {props.country}</h1>
        </div>
    )
}
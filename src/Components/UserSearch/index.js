import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Search } from "./style";

export default function SearchUser(){
    const [value, setValue] = useState("");    
    const [key, setKey] = useState(true);
    
    const time = 300;
    const qntCharacters = 3;
    console.log (value); 
    return (
      <Search>
            <DebounceInput
                debounceTimeout={time}
                value={value}
                forceNotifyByEnter={true}
                forceNotifyOnBlur={true}
                minLength={qntCharacters}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => setKey(e.key)}
                placeholder ="Search for people and friends"
            />           
      </Search>
           
      
    );  
}

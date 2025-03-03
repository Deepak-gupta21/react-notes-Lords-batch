import InputA from "./InputA";
import InputB from "./InputB";
import Input from "./Input";


import { useState } from "react";
// function Parent() {
//     const [text, setText] = useState("");
//     return (
//       <div>
//         <InputA />
//         <InputB />
//       </div>
//     );
//   }
  
//   export default Parent;



function Parent() {
    const [text, setText] = useState("");
  
    return (
      <div>
        <Input label="Input A" value={text} onChange={setText} />
        <Input label="Input B" value={text} onChange={setText} />
        <Input label="Input C" value={text} onChange={setText} />
        <Input label="Input D" value={text} onChange={setText} />
      </div>
    );
  }
  
  export default Parent;
  
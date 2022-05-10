import React from "react";
import Showcard from "./Showcard";
import Coursedat from "./Coursedat";

function Javatech(){
    return(
        <>
           <Showcard
                    key={Coursedat[0].id}
                    imgsrc={Coursedat[0].imgsrc}
                    title={Coursedat[0].title}
                    desc={Coursedat[0].desc}
                    link={Coursedat[0].link} />  
        </>
    );
}

export default Javatech;
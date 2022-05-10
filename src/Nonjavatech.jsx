import React from "react";
import Showcard from "./Showcard";
import Coursedat from "./Coursedat";

function Nonjavatech(){
    return(
        <>
           <Showcard
                    key={Coursedat[2].id}
                    imgsrc={Coursedat[2].imgsrc}
                    title={Coursedat[2].title}
                    desc={Coursedat[2].desc}
                    link={Coursedat[2].link} />  
        </>
    );
}

export default Nonjavatech;
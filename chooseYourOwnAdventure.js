var user = prompt("Which way does it hang?").toUpperCase();

switch(user) {
        case 'LEFT':
            var skids = prompt("Skid marks in your trousers? YES or NO?").toUpperCase();
            var icing = prompt("Icing in your shorts? YES or NO?").toUpperCase();
            if (skids ==="YES" || icing === "YES") {
        console.log("I'm right handed");
            }
            else
            {
            console.log("You're bullshitting me? You're right handed");
            }
        break;
        
        case 'RIGHT':
           var skids = prompt("Skid marks in your trousers? YES or NO?").toUpperCase();
            var icing = prompt("Icing in your shorts? YES or NO?").toUpperCase();
            if (skids ==="YES" || icing === "YES") {
        console.log("I'm left handed");
            }
            else
            {
            console.log("You're bullshitting me? You're left handed")
            }
        break;
        
        case 'CENTRE':
           var skids = prompt("Skid marks in your trousers? YES or NO?").toUpperCase();
            var icing = prompt("Icing in your shorts? YES or NO?").toUpperCase();
            if (skids ==="YES" && icing === "YES") {
        console.log("You're a baby");
            }
            else
            {
            console.log("You're bullshitting me? You're a baby")
            }
        break;
        
        default:
          var skids = prompt("Skid marks in your trousers? YES or NO?").toUpperCase();
            var icing = prompt("Icing in your shorts? YES or NO?").toUpperCase();
            if (skids ==="YES" && icing === "YES") {
        console.log("I'm always hard and it never hangs");
            }
            else
            {
            console.log("You're bullshitting me? You're always hard and it never hangs")
            }
       
     
}

const sub =
   [{
      gym: true,
      shop: false,
      theatre: false
   },
   {
      gym: false,
      shop: true,
      theatre: true
   },
   {
      gym: false,
      shop: false,
      theatre: false
   },
   {
      gym: false,
      shop: false,
      theatre: true
   }]

   let response = ["gym", "shop", "theatre"];
   
   for (let x=0; x<sub.length; x++){
      console.log(sub[x].response[x]); 
   }
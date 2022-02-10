const fs = require("fs")


for(let i = 1; i < 5; i++){
  let value = "ape";
  if(i == 1 ){
    value = "Gold"
  }
  else if( i == 2){
    value = "Silver"
  }
  else if( i == 3){
    value = "Bronze"
  }

  object = {        
      "name": "ApeNFT",
      "description": "Prize awarded to the Ape, who dared to confront volatile crypto markets during the Apelympics trading tournament.", 
      "image": `https://gateway.pinata.cloud/ipfs/QmWkadBW6fndoJS9YfaocNhLQACJGT17DXwtxLm7fDCTF1/${i}.jpg`, 
      "attributes": [
          {
          "trait_type": "rarity",
          "value":`${value}`
          }
      ] 
  }
  let metadata = JSON.stringify(object)
  let PATH = `C:/Users/Misirov/Desktop/apelympics/metadata/${i}.json`
  fs.writeFileSync(PATH, metadata)

}



// log to introduce as input in constructor
for(let i = 1; i < 5; i++){
  console.log(`"https://gateway.pinata.cloud/ipfs/QmWkadBW6fndoJS9YfaocNhLQACJGT17DXwtxLm7fDCTF1/${i}.jpg",`)
}
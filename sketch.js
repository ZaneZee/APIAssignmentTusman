
var req = "https://us.api.battle.net/wow/guild/Silvermoon/Midnight?fields=members&locale=en_US&apikey=fhmcuhc437ja44qbuvc98urpc5ywkkze";

//var somethings;
let stuff;
let stuff2;
let auctionCount = 0;
let row = 0;
let auctionHolders = [];

function preload(){
  loadJSON(req, datareceived);
  stuff2 = loadJSON("auctions.json");
}

function datareceived(data){
  stuff = data;
}


function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  colorMode(HSB);
  background(207, 90, 54);
  fill(207, 90, 30);
  rect(10, 70, 200, 880);
  rect(220, 70, 100, 880);
  fill(0, 0, 100);
  text("Midnight Guild Members", 10, 60);
  text("Players Listing Items", 220, 60);
  textSize(100);
  text("Midnight's Auction Listings", 340, 450);
  textSize(12);
  //text()
  for(var i = 0 ; i < stuff.members.length ; i++)
  {
    if(i > 42 && row < 2){
      row++
    }
      text(stuff.members[i].character.name, 30+40*row, 100+(20*i)-(row*440));
      for (var j = 0 ; j < stuff2.auctions.length ; j++){
          if(stuff2.auctions[j].owner == stuff.members[i].character.name){
            auctionCount++;
            if(!auctionHolders.includes(stuff2.auctions[j].owner)){
              auctionHolders.push(stuff2.auctions[j].owner);
              text(stuff2.auctions[j].owner, 230, 80+auctionHolders.length*20);
            }
          }
      }
  }
    // put setup code here
  textSize(30);
  text(stuff.name + " is currently listing " + auctionCount + " items on the auction house.", 420, 520);
  console.log(stuff);
  console.log(stuff2);
  console.log(auctionCount);
  console.log("Auction Holders: " + auctionHolders);
}

function draw() {
  //console.log(alldata);
  //background(125);
  //text(auctionCount, 200, 200);

}

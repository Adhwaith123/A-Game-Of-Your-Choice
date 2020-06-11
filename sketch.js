var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5995f2e3-b2d8-461d-a135-62d411aa4c58","abe28293-30de-4905-a0f0-4cfb533f071f","4a62b274-13fc-43c5-8f66-996ae1d2f877","2f19ceb8-1f1e-4018-848f-663830bb2b9e","0c44dde1-9b06-4367-a2e9-956cde1f9f12","2e6d71bd-5cc9-46ae-aae3-f2ec77149f73","3112297c-2d83-4f9f-984c-861a9cdac549","63fb91fc-9749-4abd-a91a-d8c225f98878","db58914f-9bd0-4e17-9cfe-45e3b1b454d0","ed5dedc5-c65e-472c-8a83-2e4baaa2ab61","d5e92dd1-f555-45c2-abc7-0b929c6f24d8","55d931dc-0eab-4ded-8932-05bc0940ef5b","3e5d8bd3-87f1-4209-8d94-d5ea14c92027","53cdee2f-8efc-4e8a-b8f4-bb47895712fb"],"propsByKey":{"5995f2e3-b2d8-461d-a135-62d411aa4c58":{"name":"back","sourceUrl":"assets/api/v1/animation-library/gamelab/6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI/category_backgrounds/background_scifi.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6R1r6_thyaqHGORcm3JlEVMzjsWX0mFI/category_backgrounds/background_scifi.png"},"abe28293-30de-4905-a0f0-4cfb533f071f":{"name":"alien","sourceUrl":"assets/api/v1/animation-library/gamelab/TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8/category_characters/alienYellow_walk.png","frameSize":{"x":72,"y":88},"frameCount":2,"looping":true,"frameDelay":2,"version":"TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":88},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TTOrBb1JCuhtwAqNuzKsowo7I.aS1lR8/category_characters/alienYellow_walk.png"},"4a62b274-13fc-43c5-8f66-996ae1d2f877":{"name":"alien1","sourceUrl":null,"frameSize":{"x":72,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"cYoHESRrrXEDWXjmaUdiyDEEQTRyUDDr","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":88},"rootRelativePath":"assets/4a62b274-13fc-43c5-8f66-996ae1d2f877.png"},"2f19ceb8-1f1e-4018-848f-663830bb2b9e":{"name":"obstacle1","sourceUrl":null,"frameSize":{"x":68,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"6v4NMM3izphiZoyaFriFTbkXY.SAysqU","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":94},"rootRelativePath":"assets/2f19ceb8-1f1e-4018-848f-663830bb2b9e.png"},"0c44dde1-9b06-4367-a2e9-956cde1f9f12":{"name":"obstacle2","sourceUrl":null,"frameSize":{"x":68,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"EoD.PlkoIQGVC3GGTMIVpIUW2eYsgOTP","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":94},"rootRelativePath":"assets/0c44dde1-9b06-4367-a2e9-956cde1f9f12.png"},"2e6d71bd-5cc9-46ae-aae3-f2ec77149f73":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":68,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"vzSZfiTUOTsVoHEGw8oIrlYItqn_9VyA","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":97},"rootRelativePath":"assets/2e6d71bd-5cc9-46ae-aae3-f2ec77149f73.png"},"3112297c-2d83-4f9f-984c-861a9cdac549":{"name":"obstacle4","sourceUrl":null,"frameSize":{"x":68,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"aaBtNZTMOGBZZ4L.INLUV4PQWN2G4nFa","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":94},"rootRelativePath":"assets/3112297c-2d83-4f9f-984c-861a9cdac549.png"},"63fb91fc-9749-4abd-a91a-d8c225f98878":{"name":"obstacle5","sourceUrl":null,"frameSize":{"x":72,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"7EOrC4IBD_3j69iLsCUYx6rCz2TXVlJA","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":98},"rootRelativePath":"assets/63fb91fc-9749-4abd-a91a-d8c225f98878.png"},"db58914f-9bd0-4e17-9cfe-45e3b1b454d0":{"name":"obstacle6","sourceUrl":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png"},"ed5dedc5-c65e-472c-8a83-2e4baaa2ab61":{"name":"obstacle7","sourceUrl":"assets/api/v1/animation-library/gamelab/BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI/category_animals/giraffe_tall.png","frameSize":{"x":160,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BBmKOPJ9oewaMqta5vRbB9dpRUF0J9qI/category_animals/giraffe_tall.png"},"d5e92dd1-f555-45c2-abc7-0b929c6f24d8":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"r5zDpFCAv4c.W1rgDh5wXAlf9FHOqHcu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d5e92dd1-f555-45c2-abc7-0b929c6f24d8.png"},"55d931dc-0eab-4ded-8932-05bc0940ef5b":{"name":"restart","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"q7Zw78c1k4mKcGWsMhSfkAw_N1yvtKuh","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/55d931dc-0eab-4ded-8932-05bc0940ef5b.png"},"3e5d8bd3-87f1-4209-8d94-d5ea14c92027":{"name":"clouds","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6AzvzaOU0jHO9ngD6a68uyGdOi4mdRjF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3e5d8bd3-87f1-4209-8d94-d5ea14c92027.png"},"53cdee2f-8efc-4e8a-b8f4-bb47895712fb":{"name":"ground","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"BGzR10tyvxaM.eODa3cIG9qR_9lzo2tJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/53cdee2f-8efc-4e8a-b8f4-bb47895712fb.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var PLAY = 1;
var END = 0;
var gameState = PLAY;

//var back = createSprite(200,200,400,400);
//back.setAnimation("back");



var alien = createSprite(200,380,20,50);
alien.setAnimation("alien");
 
 

alien.scale = 0.5;
alien.x = 50;


var ground = createSprite(200,380,400,20);
ground.x = ground.width /2;

var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = true;
ground.setAnimation("ground");
var ObstaclesGroup = createGroup();
//var CloudsGroup = createGroup();

textSize(18);
textFont("calibrie");
textStyle(BOLD);

var count = 0;

function draw() {
 
  background("black");
  
  text("Score: "+ count, 250, 100);
  console.log(gameState);
  
  if(gameState === PLAY){
       count = count + Math.round(World.frameRate/60);
    ground.velocityX = -6;

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space") && alien.y >= 359){
     alien.velocityY = -14 ;
      playSound("jump.mp3");
    }
    
            if(ObstaclesGroup.isTouching(alien)){
              gameState = END;
             
            }
  alien.velocityY = alien.velocityY + 0.8;
    spawnObstacles();
    
  }
  else if(gameState === END) {
    text("YOU LOOSE",150,200);
    ground.velocityX = 0;
    ObstaclesGroup.setVelocityXEach(0);
   alien.velocityY = 0;
  ObstaclesGroup.setLifetimeEach(-1);
 alien.setAnimation("alien1");
  var Gameover = createSprite(200,155,10,10);
Gameover.setAnimation("gameOver");
Gameover.scale = 0.5;

  }
  
 alien.collide(invisibleGround);
  drawSprites();

}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -(6 + 3* count/100);
   
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    ObstaclesGroup.add(obstacle);
  }
}

  


  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

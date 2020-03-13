var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 115},
                { "type": "sawblade", "x": 600, "y": groundY  - 105},
                { "type": "sawblade", "x": 750, "y": groundY - 115},
                { "type": "sawblade", "x": 400, "y": groundY - 110},
                { "type": "sawblade", "x": 900, "y": groundY - 115},
                { "type": "sawblade", "x": 1900, "y": groundY - 115},
                 { "type": "sawblade", "x": 2900, "y": groundY - 115},
                 { "type": "sawblade", "x": 3900, "y": groundY - 115},
                   
                { "type": "spikes", "x": 1100, "y": groundY},
                { "type": "spikes", "x": 2200, "y": groundY},
                { "type": "spikes", "x": 2700, "y": groundY},
                { "type": "spikes", "x": 3200, "y": groundY},
                { "type": "spikes", "x": 3800, "y": groundY},
                
                { "type": "enemy", "x": 900, "y": groundY - 40},
                { "type": "enemy", "x": 12100, "y": groundY - 40},
                { "type": "enemy", "x": 3000, "y": groundY - 40},
                { "type": "enemy", "x": 3000, "y": groundY - 40},
                
                { "type": "enemy2", "x": 400, "y": groundY - 40},
                { "type": "enemy2", "x": 2700, "y": groundY - 40},
                { "type": "enemy2", "x": 3560, "y": groundY - 40},
                { "type": "enemy2", "x": 1900, "y": groundY - 40},
                { "type": "enemy2", "x": 800, "y": groundY - 40},
            ]
        };
        

        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
            function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);  
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            }
            
        
        function createSpikes(x,y) {
            var hitZoneSize = 15;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
                
                game.addGameItem(myObstacle);
                
            var obstacleImage = draw.bitmap('img/spikes.png');
                myObstacle.addChild(obstacleImage);
                obstacleImage.x = -40;
                obstacleImage.y = -28;
        }
        
          function createEnemy (x,y) {
            var enemy =  game.createGameItem('enemy',25);
            var blaster = draw.bitmap('img/Morelull (4).gif');
            blaster.x = -85;
            blaster.y = -100;
            enemy.addChild(blaster);
            
            enemy.x = x;
            enemy.y = y;
            
            game.addGameItem(enemy);       
            enemy.velocityX = -1;
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            };  
        }
        
        function createEnemy2 (x,y) {
            var enemy2 =  game.createGameItem('enemy2',25);
            var blaster = draw.bitmap('img/onion monster (1).png');
            blaster.x = -85;
            blaster.y = -100;
            enemy2.addChild(blaster);
            
            enemy2.x = x;
            enemy2.y = y;
            
            game.addGameItem(enemy2);       
            enemy2.velocityX = -1;
            
            enemy2.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy2.fadeOut();
            };
            enemy2.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy2.fadeOut();
            };  
            
        }
        
        
                
 
        for (var i = 0; i <= levelData.gameItems.length-1; i++) {
            var gameItem = levelData.gameItems[i];
            
             if (gameItem.type === 'sawblade') {
               createSawBlade(gameItem.x,gameItem.y);
            }
            
            if (gameItem.type === 'spikes') {
               createSpikes(gameItem.x,gameItem.y);
            }
            
            if (gameItem.type === 'enemy') {
               createEnemy(gameItem.x,gameItem.y);
            }
            
            if (gameItem.type === 'enemy2') {
               createEnemy2(gameItem.x,gameItem.y);
            } 
            
            if (gameItem.type === 'reward') {
               createReward(gameItem.x,gameItem.y);
            }
            
            
         }    
        
        
        
        
            
           
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}

 
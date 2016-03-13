/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function(){
    //agarra el canvas
    var canvas = document.getElementById('renderCanvas');
    
    //Crear obejeto engine de BabylonJS
    var engine = new BABYLON.Engine(canvas, true);
    
    //Crear escena
    var scene =new BABYLON.Scene(engine);
    
    //Crear camara
    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);
    
    camera.attachControl(canvas);
    
    //Luz de ambiente
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    
    var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene);
    
    //crear un esfera
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;
    
    var sphere2 = BABYLON.Mesh.CreateSphere('sphere2', 16, 4, scene);
    sphere2.position = new BABYLON.Vector3(3, 3, 3);
    
    
    engine.runRenderLoop(function(){
        scene.render();
    });
} 
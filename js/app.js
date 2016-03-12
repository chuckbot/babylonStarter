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
    
    //Luz de ambiente
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    
    //crear un esfera
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;
    
    engine.runRenderLoop(function(){
        scene.render();
    });
} 
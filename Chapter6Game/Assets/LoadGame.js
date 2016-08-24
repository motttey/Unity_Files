#pragma strict

public var sceneName : String;

function LoadGame(){
	UIController.gameOver = false;
	Application.LoadLevel(sceneName);
	Score.score = 0;
}

function Start () {

}

function Update () {

}
#pragma strict

public static var dead : boolean;

function Start () {
	dead = false;
}

function Update () {

}

function OnTringgerEnter(col:Collider){
	if(col.gameObject.tag == "Hiyoko"){
		UIController.gameOver = true;
		dead = true;
	}

}
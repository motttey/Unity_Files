﻿#pragma strict

function OnTriggerEnter (col : Collider) {
	if( col.gameObject.tag == "Player" ){
		Application.LoadLevel( Application.loadedLevel );
	}
}

function Start () {

}

function Update () {

}
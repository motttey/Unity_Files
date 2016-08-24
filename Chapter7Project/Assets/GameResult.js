#pragma strict

import UnityEngine.UI;

private var highscore : int;
public var resultTime : Text;
public var bestTime : Text;
public var parts : GameObject;

function Start () {
	if (PlayerPrefs.HasKey("HighScore")){
		highscore = PlayerPrefs.GetInt("HighScore");
	} else {
		highscore = 999;
	}

}

function Update () {

	if (GoalArea.goal){
		parts.SetActive(true);
		var result = Mathf.FloorToInt(Timer.time);
		resultTime.text = "ResultTime : " + result;
		bestTime.text = "BestTime : " + highscore;

		//rewrite highscore
		if(highscore > result){
			PlayerPrefs.SetInt("HighScore", result);
		} 
	}
}

function OnRetry(){
	Application.LoadLevel("Main");
}
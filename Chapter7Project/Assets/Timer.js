#pragma strict
import UnityEngine.UI;

public static var time : float;

function Start () {
	time = 0;
}

function Update () {
	//yet goal
	if(GoalArea.goal == false){

		//passed time
		time += Time.deltaTime;
	}

	var t : int = Mathf.FloorToInt(time);
	var uiText : Text = GetComponent.<Text>();
	uiText.text = "Time : " + t.ToString();
	
}
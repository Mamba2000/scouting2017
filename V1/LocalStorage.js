// Global Variables //
var jObj;												// JSON object
function initialize()
///////////////////
//               //
// Initialize //
//               //
///////////////////
{
	var jStr = '{"ScoutName":"","Event":"","TeamNo":0,"match":0,"robot":0,"Alliance":"RED","auto":{"GearPlacement":"","PassLine":false,';
	jStr = jStr.concat('"HighScores":0,"HighMisses":0,"LowScores":0,"noShow":false,"deadBot":false},"tele":{"gears":');
	jStr = jStr.concat('[{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""},{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""}');
	jStr = jStr.concat('{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""},{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""},';
	jStr = jStr.concat('{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""},{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""},';
	jStr = jStr.concat('{"GearPlacement":"","TimeStamp":"00:00:00.000","Path":""},],"HighScores":0,"HighMisses":0,"LowScores":0,"hopperDump":0,');
	jStr = jStr.concat('"fuelAcquire":0,"gearAcquire":0,"ShotLocation":"","playedDefense":false,"deadBot":false,"yellowCard":false,"redCard":false},');
	jStr = jStr.concat('"ClimbLocation":"","ClimbSuccess":false,"ClimbTime":"00:00.000","foulPoints":0}');
	jObj = JSON.parse(jStr);
}
function endTeleOp()
////////////////////////
//                    //
// End Teleop //
//                    //
////////////////////////
//
//  Come here when the "SUBMIT" button is pressed
{
	var LSName = jObj.Event.concat(jObj.teamNo);
	LSName = LSName.concat("_");
	LSName = LSName.concat(match);
	LSName = LSName.concat("Object");
/*	localStorage.setItem(LSName, JSON.stringify(jObj));
	window.location.href = "SplashSheet.html";		*/
}
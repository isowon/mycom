gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.localVariables = [];
gdjs.Untitled_32scene2Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene2Code.GDplayerObjects1= [];
gdjs.Untitled_32scene2Code.GDplayerObjects2= [];
gdjs.Untitled_32scene2Code.GD_959500Objects1= [];
gdjs.Untitled_32scene2Code.GD_959500Objects2= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewText2Objects2= [];


gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32scene2Code.GDplayerObjects1});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GD_9595959500Objects1Objects = Hashtable.newFrom({"_00": gdjs.Untitled_32scene2Code.GD_959500Objects1});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.Untitled_32scene2Code.GDNewText2Objects1});
gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "NumpadAdd");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32scene2Code.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32scene2Code.GDplayerObjects1.length !== 0 ? gdjs.Untitled_32scene2Code.GDplayerObjects1[0] : null), true, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Soulworker BGM - Maneater Garden extended Ver..mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_00"), gdjs.Untitled_32scene2Code.GD_959500Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32scene2Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDplayerObjects1Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GD_9595959500Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene2Code.GD_959500Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene2Code.GD_959500Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene2Code.GD_959500Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32scene2Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDNewText2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDplayerObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDplayerObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_959500Objects1.length = 0;
gdjs.Untitled_32scene2Code.GD_959500Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewText2Objects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene2Code.GDplayerObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDplayerObjects2.length = 0;
gdjs.Untitled_32scene2Code.GD_959500Objects1.length = 0;
gdjs.Untitled_32scene2Code.GD_959500Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;

import Math from "./Math";
import UI from "./UI";
import Time from "./Time";
import Data from "./Data";
import Events from "./Reactivity/Events";
import Use from "./Reactivity/Use";
import Graphics from "./Graphics";
import {SPA} from "./App/Router";
import { 
    __UI__,
    __Target__,
 } from "./App/Globals";
import ZikoUIElement from "./UI/ZikoUIElement.js";
import { App } from "./App";
const Ziko={
    App,
    Math,
    UI,
    Time,
    Graphics,
    Events,
    Use,
    Data,
    SPA,
}
globalThis.__Ziko__=Ziko;
globalThis.__UI__=__UI__;
globalThis.__Target__=__Target__;
function ExtractAll(){
    UI.ExtractAll();
    Math.ExtractAll();
    Time.ExtractAll();
    Events.ExtractAll();
    Use.ExtractAll();
    Graphics.ExtractAll();
    Data.ExtractAll()
    return this;
}
function RemoveAll(){
    UI.RemoveAll();
    Math.RemoveAll();
    Time.RemoveAll();
    Events.RemoveAll();
    Use.RemoveAll();
    Graphics.RemoveAll();
    Data.RemoveAll()
}
export {
    Ziko,
    App,
    Math,
    UI,
    Time,
    Graphics,
    Events,
    Data,
    ZikoUIElement,
    SPA,
    ExtractAll,
    RemoveAll
};
 export * from "./Math"
 export * from "./UI";
 export * from "./Graphics";
 export * from "./Time"
 export * from "./Data"
 export * from "./App"



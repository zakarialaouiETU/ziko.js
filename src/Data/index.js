import { 
    markdown2html
 } from "./Converter";
import parseXML from "./Parser/xml";
import { preload } from "./preload";
const Data={
    markdown2html,
    preload,
    parseXML,
    ExtractAll:function(){
        for (let i = 0; i < Object.keys(this).length; i++) {
            globalThis[Object.keys(this)[i]] = Object.values(this)[i];
        }
        return this;
    },
    RemoveAll:function(){
        for (let i = 0; i < Object.keys(this).length; i++) delete globalThis[Object.keys(this)[i]];   
        return this;
    }
}
export{
    parseXML,
    preload,
}
export default Data
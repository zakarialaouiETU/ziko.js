import { ZikoUIFlex } from "../UI/CustomElement/Flex.js";
import { Seo } from "./Seo/index.js";
class ZikoUIApp extends ZikoUIFlex{
    constructor(){
        super("main");
        this.root=document.documentElement;
        this.head=null;
        this.#init();
        this.seo=Seo(this);
        Object.assign(this.cache,{
            theme:null,
            isRoot:true
        });
        this.render();
    }
    #init(){
        this.root.setAttribute("data-engine","zikojs");
        const head=this.root.getElementsByTagName("head")[0];
        this.head=head?head:this.head=document.createElement("head");
        if(!head)this.root.insertBefore(this.head,document.body);
        const title=this.head.getElementsByTagName("title")[0];
        this.Title=title?title:document.createElement("title");
        if(!title)this.head.append(this.Title);
    }
    title(title=this.title.textContent){
        this.Title.textContent=title;
        return this;
    }
    prefetch(){

    }
    description(){

    }
}
const App=(...UIElement)=>new ZikoUIApp().append(...UIElement)
export {App};
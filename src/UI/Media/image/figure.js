import ZikoUIElement from "../../ZikoUIElement";
class ZikoUIFigure extends ZikoUIElement{
    constructor(src,caption){
      super("figure","figure")
      this.img=src.width("100%").element;
      this.caption=document.createElement("figcaption");
      this.caption.append(caption.element)
      this.element.append(this.img);
      this.element.append(this.caption);
      this.render();
    }
}
const figure =(image,caption) =>new ZikoUIFigure(image,caption);
export{
    figure,
    ZikoUIFigure
}
import ZikoUIElement from "../../ZikoUIElement.js";
class ZikoUIVideo extends ZikoUIElement {
    constructor(src="", w = "100%", h = "50vh") {
      super("video","video");
      if (src.nodeName === "VIDEO") this.element.setAttribute("src", src.src);
      else this.element.setAttribute("src", src);
      if (typeof w == "number") w += "%";
      if (typeof h == "number") h += "%";
      this.style({ width: w, height: h });
      this.render();
    }
    useControls(enabled = true) {
      this.element.controls = enabled;
      return this;
    }
    play() {
      this.element.play();
      return this;
    }
    pause() {
      this.element.pause();
      return this;
    }
    poster(src=""){
      this.element.poster=src;
      return this;
    }
    usePIP(e){
      this.element.requestPictureInPicture(e);
      return this;
    }
  }
const video = (src, width, height) => new ZikoUIVideo(src, width, height);
export {
  video,
  ZikoUIVideo
}
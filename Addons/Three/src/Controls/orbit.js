import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


class ZikoThreeOrbitControls{
    #TARGET
    constructor(target){
        this.#TARGET=target;
        this.control=new OrbitControls(target.camera.currentCamera,target.rendererTarget.domElement);
        this.isPaused=false;
        this.saved_state={
            position:new THREE.Vector3(),
            quaternion:new THREE.Quaternion()
        }
        this.onChange()

    }
    save(){
        this.saved_state.position.copy(this.#TARGET.camera.currentCamera.position);
        this.saved_state.quaternion.copy(this.#TARGET.camera.currentCamera.quaternion);
        return this;
    }
    useState(state,renderGl=true,renderCss=true){
		this.#TARGET.camera.currentCamera.position.copy(state.position);
        this.#TARGET.camera.currentCamera.quaternion.copy(state.quaternion);
		this.#TARGET.camera.currentCamera.updateMatrixWorld();
		if(renderGl)this.#TARGET?.renderGl()
		if(renderCss)this.#TARGET?.renderCss()
	}
    restore(renderGl=false,renderCss=false){
        this.useState(this.saved_state,renderGl,renderCss)
        return this;
    }
    enable(){
        this.restore();
        this.control.enabled=true;
        return this;
    }
    disable(){
        this.save()
        this.control.enabled=false;
        return this;
    }
    pause(){
        this.isPaused=true;
        return this;
    }
    resume(){
        this.isPaused=false;
        return this;
    }
    dispose(){
        this.save();
        this.control.dispose();
        return this;
    }
    on(){
        this.control=new OrbitControls(this.#TARGET.camera.currentCamera,this.#TARGET.rendererTarget.domElement);
        this.restore();
        return this;
    }
    onChange(handler){
        this.control.addEventListener("change",()=>{
            if(!this.isPaused){
                this.#TARGET.renderGl()?.renderCss()
                if(handler)handler()
            }
        });
        return this;
    }
}
const ZikoOrbitControls=target=>new ZikoThreeOrbitControls(target);
export {ZikoOrbitControls}
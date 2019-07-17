import { Scene, Camera, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

class Renderer {
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    cube: Mesh

    constructor() {
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        const geo: BoxGeometry = new BoxGeometry(1, 1, 1);
        const material: MeshBasicMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new Mesh( geo, material);
        this.scene.add(this.cube);

        this.camera.position.z = 5;

        this.render = this.render.bind(this)
    }

    render() {
        // this.renderがundifined
        requestAnimationFrame(this.render);

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        
        this.renderer.render(this.scene, this.camera);
    }
}

export default Renderer;
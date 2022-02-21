<template>
  <div id="canvas-container">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';
// import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export default {
  name: 'The3DModel',
  data() {
    return {
      isLoaded: false
    };
  },

  methods: {
    main() {
      // const gui = new dat.GUI();

      const canvas = document.getElementById('canvas');
      const scene = new THREE.Scene();
      const loader = new GLTFLoader();

      loader.load(
        'main-shirt.gltf',
        (gltf) => {
          gltf.scene.scale.set(0.0515, 0.05, 0.05);
          scene.add(gltf.scene);
        },
        (xhr) => {
          const loaded = (xhr.loaded / xhr.total) * 100;
          if (loaded == 100) {
            this.isLoaded = true;
          }
        }
      );

      const light = new THREE.DirectionalLight(0xffffff, 2);
      light.castShadows = true;
      light.position.set(-4, 0.05, 5);

      const light2 = new THREE.HemisphereLight(0xe7e9ee, 0xffffff, 1);
      scene.add(light2);

      // gui
      //   .add(light, 'intensity')
      //   .min(0)
      //   .max(10)
      //   .step(0.001)
      //   .name('lightIntensity');
      // gui.add(light.position, 'x').min(-10).max(10).step(0.001).name('lightX');
      // gui.add(light.position, 'y').min(-10).max(10).step(0.001).name('lightY');
      // gui.add(light.position, 'z').min(-10).max(10).step(0.001).name('lightZ');

      const sizes = { width: 500, height: 500 };

      const camera = new THREE.PerspectiveCamera(
        80,
        sizes.width / sizes.height,
        0.1,
        100
      );

      camera.position.set(0, 0.25, 1.5);
      camera.rotation.set(-0.15, 0, 0);
      scene.add(camera);

      camera.add(light);

      const renderer = new THREE.WebGL1Renderer({
        canvas,
        alpha: true,
        antialias: true
      });

      renderer.setClearColor(0x000000, 0);
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.physicallyCorrectLights = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.update();
      // controls.enableDamping = true;

      //  let x = camera.position.x;
      //   let z = camera.position.z;

      const frame = () => {
        //  time *= 0.001;
        //  const speed = 0.5;
        //  const rotSpeed = time * speed;

        // camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
        // camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
        camera.lookAt(0, 0, 0);
        // controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(frame);
      };

      frame();
    }
  },
  mounted() {
    this.main();
  },
  computed: {
    isLoading() {
      return this.isLoaded;
    }
  }
};
</script>

<style scoped>
#canvas {
  width: 100%;
  height: 100%;
  display: block;
}

#canvas-container {
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  z-index: 2;
}
</style>

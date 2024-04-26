import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

@Component({
  selector: 'app-gowtham',
  standalone: true,
  imports: [],
  templateUrl: './gowtham.component.html',
  styleUrl: './gowtham.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class GowthamComponent implements OnInit, OnDestroy {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private group!: THREE.Group;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initThree();
    this.addResizeListener();
    this.loadObject();
    this.loadHDRTexture();
    this.addLights();
    this.animate();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onWindowResize);
    this.renderer.dispose();
  }

  private initThree(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.elementRef.nativeElement.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 0, 10);
    this.scene.add(this.camera);
    this.scene.fog = new THREE.FogExp2(0x6d1900, 0.15);
  }

  private addResizeListener(): void {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private loadObject(): void {
    const objloader = new OBJLoader();
    objloader.load(
      'https://raw.githubusercontent.com/miroleon/peace-of-mind/main/assets/buddha.obj',
      (object) => {
        console.log('Object loaded:', object);
        const material1 = new THREE.MeshStandardMaterial({
          roughness: 0,
          metalness: 0.5,
          envMapIntensity: 10
        });
        const mesh = object.children[0] as THREE.Mesh;
        mesh.material = material1;
        mesh.scale.setScalar(20);
        mesh.position.set(0, -0.25, 0);
        this.scene.add(mesh);
      },
      undefined,
      (error) => {
        console.error('Error loading object:', error);
      }
    );
  }

  private loadHDRTexture(): void {
    const hdrEquirect = new RGBELoader()
      .setPath('https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/')
      .load('ml_gradient_freebie_01.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        this.scene.environment = texture;
      });
  }

  private addLights(): void {
    const pointlight = new THREE.PointLight(0x85ccb8, 7.5, 20);
    pointlight.position.set(0, 3, 2);
    this.scene.add(pointlight);

    const pointlight2 = new THREE.PointLight(0x9f85cc, 7.5, 20);
    pointlight2.position.set(0, 3, 2);
    this.scene.add(pointlight2);
  }

  private animate(): void {
    const update = () => {
      requestAnimationFrame(update);

      this.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y += 0.01;
        }
      });

      this.renderer.render(this.scene, this.camera);
    };

    update();
  }
}

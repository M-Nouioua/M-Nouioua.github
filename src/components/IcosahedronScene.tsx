import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function IcosahedronScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const meshRef = useRef<THREE.Mesh | null>(null)
  const mesh2Ref = useRef<THREE.Mesh | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const frameRef = useRef<number>(0)
  const mousePos = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0.001, y: 0.001 })

  const BASE_ROTATION = 0.001
  const MAX_ROTATION = 0.015
  const icosahedronSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 20

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0A0A0B)
    sceneRef.current = scene

    // OrthographicCamera
    const aspect = window.innerWidth / window.innerHeight
    const frustumSize = 50
    const camera = new THREE.OrthographicCamera(
      -frustumSize * aspect / 2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Inner icosahedron
    const geometry = new THREE.IcosahedronGeometry(icosahedronSize, 0)
    const material = new THREE.MeshBasicMaterial({
      color: 0x5A8A9A,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    meshRef.current = mesh

    // Outer icosahedron
    const geometry2 = new THREE.IcosahedronGeometry(icosahedronSize * 1.1, 0)
    const material2 = new THREE.MeshBasicMaterial({
      color: 0xC4956A,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const mesh2 = new THREE.Mesh(geometry2, material2)
    scene.add(mesh2)
    mesh2Ref.current = mesh2

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const scrollProgress = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)

      // Rotation speed
      const targetSpeed = BASE_ROTATION + (scrollProgress * MAX_ROTATION)
      targetRotation.current.x += (targetSpeed - targetRotation.current.x) * 0.1
      targetRotation.current.y += (targetSpeed - targetRotation.current.y) * 0.1

      // Rotate meshes
      mesh.rotation.x += targetRotation.current.x
      mesh.rotation.y += targetRotation.current.y
      mesh2.rotation.x -= targetRotation.current.x * 0.5
      mesh2.rotation.y += targetRotation.current.y * 0.8

      // Mouse tilt
      const targetTiltX = mousePos.current.y * 0.5
      const targetTiltY = mousePos.current.x * 0.5
      mesh.rotation.x += (targetTiltX - mesh.rotation.x) * 0.05
      mesh.rotation.y += (targetTiltY - mesh.rotation.y) * 0.05
      mesh2.rotation.x += (targetTiltX - mesh2.rotation.x) * 0.03
      mesh2.rotation.y += (targetTiltY - mesh2.rotation.y) * 0.03

      // Scroll-driven position
      const targetY = scrollProgress * 10
      mesh.position.y += (targetY - mesh.position.y) * 0.1
      mesh2.position.y = mesh.position.y

      // Scroll-driven scale
      const targetScale = 1 - (scrollProgress * 0.5)
      const currentScale = mesh.scale.x + (targetScale - mesh.scale.x) * 0.1
      mesh.scale.setScalar(currentScale)
      mesh2.scale.setScalar(currentScale)

      // Scroll-driven opacity
      const targetOpacity = 1 - (scrollProgress * 2)
      const currentOpacity = Math.max(0.1, targetOpacity)
      mesh.material.opacity += (currentOpacity - mesh.material.opacity) * 0.1
      mesh2.material.opacity += ((currentOpacity * 0.3) - mesh2.material.opacity) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Event handlers
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onResize = () => {
      const newAspect = window.innerWidth / window.innerHeight
      camera.left = -frustumSize * newAspect / 2
      camera.right = frustumSize * newAspect / 2
      camera.top = frustumSize / 2
      camera.bottom = -frustumSize / 2
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      geometry2.dispose()
      material2.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [icosahedronSize])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

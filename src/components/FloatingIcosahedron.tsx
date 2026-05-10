import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface FloatingIcosahedronProps {
  size?: number
  color?: string
  opacity?: number
  speed?: number
  left?: string
  top?: string
  right?: string
  bottom?: string
  wireframeDensity?: number
}

export default function FloatingIcosahedron({
  size = 3,
  color = '#C4956A',
  opacity = 0.15,
  speed = 0.003,
  left,
  top,
  right,
  bottom,
  wireframeDensity = 0,
}: FloatingIcosahedronProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const containerSize = size * 30
    renderer.setSize(containerSize, containerSize)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    container.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(size, wireframeDensity)
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: opacity,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const geometry2 = new THREE.IcosahedronGeometry(size * 0.7, wireframeDensity)
    const material2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: opacity * 0.5,
    })
    const mesh2 = new THREE.Mesh(geometry2, material2)
    scene.add(mesh2)

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      mesh.rotation.x += speed
      mesh.rotation.y += speed * 1.3
      mesh2.rotation.x -= speed * 0.7
      mesh2.rotation.y += speed * 0.5
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      geometry.dispose()
      material.dispose()
      geometry2.dispose()
      material2.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [size, color, opacity, speed, wireframeDensity])

  const style: React.CSSProperties = {
    position: 'absolute',
    width: size * 30,
    height: size * 30,
    pointerEvents: 'none',
    zIndex: 0,
    opacity: 0.6,
  }
  if (left !== undefined) style.left = left
  if (top !== undefined) style.top = top
  if (right !== undefined) style.right = right
  if (bottom !== undefined) style.bottom = bottom

  return <div ref={containerRef} style={style} />
}

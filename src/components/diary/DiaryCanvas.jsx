import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

const DiaryCanvas = forwardRef(function DiaryCanvas({ tool, color }, ref) {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const drawingRef = useRef(false)
  const historyRef = useRef([])

  const setup = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = Math.floor(rect.width * dpr)
    canvas.height = Math.floor(rect.height * dpr)

    const ctx = canvas.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    ctxRef.current = ctx
    pushHistory()
  }

  useEffect(() => {
    setup()
    const onResize = () => setup()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const applyStyle = () => {
    const ctx = ctxRef.current
    if (!ctx) return
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.strokeStyle = 'rgba(0,0,0,1)'
      ctx.lineWidth = 20
    } else {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = color
      ctx.lineWidth = 2
    }
  }

  const pushHistory = () => {
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    const rect = canvas.getBoundingClientRect()
    historyRef.current.push(ctx.getImageData(0, 0, Math.floor(rect.width), Math.floor(rect.height)))
    if (historyRef.current.length > 50) historyRef.current.shift()
  }

  const undo = () => {
    const ctx = ctxRef.current
    if (!ctx) return
    if (historyRef.current.length <= 1) return
    historyRef.current.pop()
    const prev = historyRef.current[historyRef.current.length - 1]
    ctx.putImageData(prev, 0, 0)
  }

  const exportBlob = async () => {
    const canvas = canvasRef.current
    if (!canvas) return null
    return await new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1.0))
  }

  useImperativeHandle(ref, () => ({ undo, exportBlob }))

  const onDown = (e) => {
    e.preventDefault()
    drawingRef.current = true
    applyStyle()
    const { x, y } = getPos(e)
    const ctx = ctxRef.current
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const onMove = (e) => {
    if (!drawingRef.current) return
    e.preventDefault()
    const { x, y } = getPos(e)
    const ctx = ctxRef.current
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const onUp = (e) => {
    if (!drawingRef.current) return
    e.preventDefault()
    drawingRef.current = false
    pushHistory()
  }

  return (
    <canvas
      ref={canvasRef}
      className='w-full h-full'
      style={{ touchAction: 'none' }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onPointerLeave={onUp}
    />
  )
})

export default DiaryCanvas

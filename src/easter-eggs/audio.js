export function createAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)()
}

export function playNotes(notes) {
  try {
    const ctx = createAudioContext()
    let time = ctx.currentTime
    notes.forEach(({ freq, dur, type = 'triangle', volume = 0.3 }) => {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = type
      osc.frequency.setValueAtTime(freq, time)
      gain.gain.setValueAtTime(volume, time)
      gain.gain.exponentialRampToValueAtTime(0.001, time + dur)
      osc.start(time)
      osc.stop(time + dur)
      time += dur * 0.9
    })
  } catch (e) {
    console.warn('AudioContext not available', e)
  }
}

export function playZeldaJingle() {
  const audio = new Audio('/sounds/zelda-secret.mp3')
  audio.volume = 0.6
  audio.play().catch(e => console.warn('Audio play failed:', e))
}

export function playHadoken() {
  try {
    const ctx  = createAudioContext()
    const buf  = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2)
    }
    const src  = ctx.createBufferSource()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 400
    filter.Q.value = 0.5
    src.buffer = buf
    src.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    gain.gain.setValueAtTime(0.6, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
    src.start()
  } catch (e) {
    console.warn('AudioContext not available', e)
  }
}
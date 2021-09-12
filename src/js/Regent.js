export default class Regent {
    constructor(signal, receiver) {
        this._on = signal
        this._call = receiver

        for (let i = 0; i < this._on.length; i++) {
            if (document[`accessProp_${i}`] && document[`accessMethod_${i}`]) document.removeEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`])

            document[`accessProp_${i}`] = this._on[i]
            document[`accessMethod_${i}`] = this._call[i]

            document.addEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`])
        }
    }
}

export function accessFrame(listener) {
    if (document.accessFrame) gsap.ticker.remove(document.accessFrame)

    document.accessFrame = listener
    
    gsap.ticker.add(document.accessFrame)
}

export function silencer() {return}
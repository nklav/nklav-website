export default class Regent {
    constructor(signal, receiver) {
        if (signal.length == 2) signal.splice(1, 0, 'custom')
        if (signal.length == 1 && signal.includes('keydown')) signal.unshift('custom')

        this._on = signal

        if (receiver.length == 2) {
            this._scrollSnap = receiver[0]
            this._call = [this._callScrollSnap.bind(this), this._callKeyScroll.bind(this), receiver[1]]
            this._e = new Event(this._on[1])
        }

        if (receiver.length == 1 && signal.includes('keydown')) {
            this._call = [this._callKeyScroll.bind(this), receiver[0]]
            this._e = new Event(this._on[0])
        }

        if (receiver.length == 1 && signal.includes('scroll')) {
            this._scrollSnap = receiver[0]
            this._call = [this._callScrollSnap.bind(this)]
        }

        for (let i = 0; i < this._on.length; i++) {
            if (document[`accessProp_${i}`] && document[`accessMethod_${i}`]) document.removeEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`])

            document[`accessProp_${i}`] = this._on[i]
            document[`accessMethod_${i}`] = this._call[i]

            if (this._on.length == 3 && i < 2) document.addEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`])
            if (this._on.length == 2 && i < 1) document.addEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`])
            if (this._on.length == 1) document.addEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`])
        }

        if (this._on.length == 3 || 2) document.dispatchEvent(this._e)
    }

    _callScrollSnap() {if (this._on.length == 3 || 1) this._scrollSnap()}

    _callKeyScroll() {
        if (this._on.length == 3) document.addEventListener(document.accessProp_2, document.accessMethod_2)
        if (this._on.length == 2) document.addEventListener(document.accessProp_1, document.accessMethod_1)
    }
}

export function accessFrame(listener) {
    if (document.accessFrame) gsap.ticker.remove(document.accessFrame)
    document.accessFrame = listener
    gsap.ticker.add(document.accessFrame)
}

export function silencer() {return}
export default class Regent {
    constructor(on, call) {
        this._on = on;
        this._call = call;

        for (let i = 0; i < this._on.length; i++) {
            if (document[`accessProp_${i}`] && document[`accessMethod_${i}`]) document.removeEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`]);

            document[`accessProp_${i}`] = this._on[i];
            document[`accessMethod_${i}`] = this._call[i];

            document.addEventListener(document[`accessProp_${i}`], document[`accessMethod_${i}`]);
        }
    }
}

export function accessFrame(call, remain) {
    if (document.accessFrame) gsap.ticker.remove(document.accessFrame);

    document.accessFrame = call;
    
    gsap.ticker.add(document.accessFrame);

    if (remain) gsap.ticker.add(remain);
}

export function silencer() {
    return;
}
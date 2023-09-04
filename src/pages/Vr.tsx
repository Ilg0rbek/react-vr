import { useRef, useState } from "react";
import { Pannellum } from "pannellum-react";
import './style.css';
import image from "./rasm.jpg"
const Vr = () => {
    
    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const panImage = useRef<any>(null);

    return (
        <div>
            <Pannellum
                width='60%'
                height='60vh'
                image={image}
                pitch={10}
                yaw={180}
                hfov={110}
                autoRotate={2}
                autoLoad
                disableKeyboardCtrl
                // @ts-ignore
                ref={panImage}
                onMouseup = {(event: any) => {
                    setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
                    setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
                }}
            >
            </Pannellum>
        </div>
    )
}

export default Vr;
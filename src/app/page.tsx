"use client"
import { useEffect, useRef, useState } from 'react';
import { ThreeJSStore } from './store';
import { useRouter } from 'next/navigation';

export default function ThreeJSPage() {
    const threeJSStore = useRef<ThreeJSStore | null>(null);
    const [isBrowser, setIsBrowser] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsBrowser(true);

        threeJSStore.current = new ThreeJSStore();

        // Render the scene
        threeJSStore.current.animate();

        // Clean up
        return () => {
            if (threeJSStore.current?.renderer) {
                threeJSStore.current.renderer.dispose();
            }
        };
    }, [router]);

    return (
        <div ref={(el) => {
            if (el && threeJSStore.current?.renderer && isBrowser) {
                el.appendChild(threeJSStore.current.renderer.domElement);
            }
        }} />
    );
}
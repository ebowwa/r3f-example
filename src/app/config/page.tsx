"use client"
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Config, LightingConfig, SceneObjects, ControlsLimits } from '../types';
import { useThreeJSStore } from './store';

const DynamicThreeJSConfig = dynamic(
    async () => {
        return (props: { threeJSConfig: Config; threeJSLightingConfig: LightingConfig; threeJSSceneConfig: SceneObjects; threeJSControlsLimits: ControlsLimits }) => {
            // Check if threeJSConfig is defined and has the required properties
            if (
                !props.threeJSConfig ||
                !props.threeJSConfig.renderer ||
                typeof props.threeJSConfig.renderer.width !== 'number' ||
                typeof props.threeJSConfig.renderer.height !== 'number'
            ) {
                return <div>Error: Invalid threeJSConfig</div>;
            }

            return (
                <div>
                    <p>Renderer Width: {props.threeJSConfig.renderer.width}</p>
                    <p>Renderer Height: {props.threeJSConfig.renderer.height}</p>
                    <p>Ambient Light Color: {props.threeJSLightingConfig.ambientLight.color}</p>
                    <p>Directional Light Color: {props.threeJSLightingConfig.directionalLight.color}</p>
                    <p>Directional Light Intensity: {props.threeJSLightingConfig.directionalLight.intensity}</p>
                    <p>Directional Light Position X: {props.threeJSLightingConfig.directionalLight.position.x}</p>
                    <p>Directional Light Position Y: {props.threeJSLightingConfig.directionalLight.position.y}</p>
                    <p>Directional Light Position Z: {props.threeJSLightingConfig.directionalLight.position.z}</p>
                    <p>Space Boi URL: {props.threeJSSceneConfig.spaceBoi.url}</p>
                    <p>Space Boi Position X: {props.threeJSSceneConfig.spaceBoi.position.x}</p>
                    <p>Space Boi Position Y: {props.threeJSSceneConfig.spaceBoi.position.y}</p>
                    <p>Space Boi Position Z: {props.threeJSSceneConfig.spaceBoi.position.z}</p>
                    <p>Space Boi Rotation X: {props.threeJSSceneConfig.spaceBoi.rotation.x}</p>
                    <p>Space Boi Rotation Y: {props.threeJSSceneConfig.spaceBoi.rotation.y}</p>
                    <p>Space Boi Rotation Z: {props.threeJSSceneConfig.spaceBoi.rotation.z}</p>
                    <p>Space Boi Visible: {props.threeJSSceneConfig.spaceBoi.visible.toString()}</p>
                    <p>Space Boi Cast Shadow: {props.threeJSSceneConfig.spaceBoi.castShadow.toString()}</p>
                    <p>Space Boi Receive Shadow: {props.threeJSSceneConfig.spaceBoi.receiveShadow.toString()}</p>
                    <p>Space Boi Animation Y: {props.threeJSSceneConfig.spaceBoi.animation.y}</p>
                    <p>Space Boi Animation Duration: {props.threeJSSceneConfig.spaceBoi.animation.duration}</p>
                    <p>Space Boi Animation Repeat: {props.threeJSSceneConfig.spaceBoi.animation.repeat}</p>
                    <p>Space Boi Animation Ease: {props.threeJSSceneConfig.spaceBoi.animation.ease}</p>
                    <p>Twitter Logo URL: {props.threeJSSceneConfig.twitterLogo.url}</p>
                    <p>Twitter Logo Position X: {props.threeJSSceneConfig.twitterLogo.position.x}</p>
                    <p>Twitter Logo Position Y: {props.threeJSSceneConfig.twitterLogo.position.y}</p>
                    <p>Twitter Logo Position Z: {props.threeJSSceneConfig.twitterLogo.position.z}</p>
                    <p>Twitter Logo Rotation X: {props.threeJSSceneConfig.twitterLogo.rotation.x}</p>
                    <p>Twitter Logo Rotation Y: {props.threeJSSceneConfig.twitterLogo.rotation.y}</p>
                    <p>Twitter Logo Rotation Z: {props.threeJSSceneConfig.twitterLogo.rotation.z}</p>
                    <p>Twitter Logo Visible: {props.threeJSSceneConfig.twitterLogo.visible.toString()}</p>
                    <p>Twitter Logo Cast Shadow: {props.threeJSSceneConfig.twitterLogo.castShadow.toString()}</p>
                    <p>Twitter Logo Receive Shadow: {props.threeJSSceneConfig.twitterLogo.receiveShadow.toString()}</p>
                    <p>Twitter Logo Animation Y: {props.threeJSSceneConfig.twitterLogo.animation.y}</p>
                    <p>Twitter Logo Animation Duration: {props.threeJSSceneConfig.twitterLogo.animation.duration}</p>
                    <p>Twitter Logo Animation Repeat: {props.threeJSSceneConfig.twitterLogo.animation.repeat}</p>
                    <p>Twitter Logo Animation Ease: {props.threeJSSceneConfig.twitterLogo.animation.ease}</p>
                    <p>Twitter Logo Redirect URL: {props.threeJSSceneConfig.twitterLogo.redirectUrl}</p>
                    <p>Controls Max Pan: {props.threeJSControlsLimits.maxPan}</p>
                    <p>Controls Max Tilt: {props.threeJSControlsLimits.maxTilt}</p>
                </div>
            );
        };
    },
    {
        suspense: true,
    }
);

export default function DashboardPage() {
    const threeJSConfig = useThreeJSStore((state) => state.threeJSConfig);
    const threeJSLightingConfig = useThreeJSStore((state) => state.threeJSLightingConfig);
    const threeJSSceneConfig = useThreeJSStore((state) => state.threeJSSceneConfig);
    const threeJSControlsLimits = useThreeJSStore((state) => state.threeJSControlsLimits);

    return (
        <div>
            <h2>Three.js Configuration</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <DynamicThreeJSConfig
                    threeJSConfig={threeJSConfig}
                    threeJSLightingConfig={threeJSLightingConfig}
                    threeJSSceneConfig={threeJSSceneConfig}
                    threeJSControlsLimits={threeJSControlsLimits}
                />
            </Suspense>
        </div>
    );
}
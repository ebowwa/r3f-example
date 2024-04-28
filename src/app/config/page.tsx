// app/config/page.tsx
"use client"
import { useState, useEffect } from 'react';
import {
    RendererConfig,
    CameraConfig,
    ControlsConfig,
    Config,
} from '../types';

const CONFIG_FILE_PATH = '../threeJSConfig.json';

export default function ConfigPage() {
    const [config, setConfig] = useState<Config | null>(null);

    useEffect(() => {
        // Read data from JSON file
        readData();
    }, []);

    const readData = async () => {
        try {
            const response = await fetch(CONFIG_FILE_PATH);
            const data = await response.json();
            setConfig(data);
        } catch (error) {
            console.error('Error reading data:', error);
        }
    };

    const createData = async (newConfig: Config) => {
        try {
            const response = await fetch(CONFIG_FILE_PATH, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newConfig),
            });
            const createdConfig = await response.json();
            setConfig(createdConfig);
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    const updateData = async (updatedConfig: Config) => {
        try {
            const response = await fetch(CONFIG_FILE_PATH, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedConfig),
            });
            const updatedData = await response.json();
            setConfig(updatedData);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const deleteData = async () => {
        try {
            await fetch(CONFIG_FILE_PATH, {
                method: 'DELETE',
            });
            setConfig(null);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    if (!config) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Configuration</h1>
            <pre>{JSON.stringify(config, null, 2)}</pre>
            <button
                onClick={() =>
                    createData({
                        renderer: { width: 1024, height: 768 },
                        camera: { position: { z: 10 } },
                        controls: { maxPan: 60, maxTilt: 60 },
                    })
                }
            >
                Create
            </button>
            <button
                onClick={() =>
                    updateData({
                        ...config,
                        camera: { position: { z: 15 } },
                    })
                }
            >
                Update
            </button>
            <button onClick={deleteData}>Delete</button>
        </div>
    );
}
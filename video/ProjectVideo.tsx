import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    staticFile,
    Sequence,
} from 'remotion';
import { ThreeCanvas } from '@remotion/three';
import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export type ProjectVideoProps = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    highlights?: string[];
};

const Project3DCard: React.FC<{ image: string; floatOffset?: number }> = ({ image, floatOffset = 0 }) => {
    const frame = useCurrentFrame();
    const texture = useLoader(THREE.TextureLoader, image.startsWith('/') ? staticFile(image) : image);

    // Dynamic animations based on frame
    const floatY = Math.sin((frame + floatOffset) / 20) * 0.15;
    const rotationY = Math.sin(frame / 40) * 0.3;
    const rotationX = Math.sin(frame / 60) * 0.1;

    const scale = interpolate(frame, [0, 30], [0, 1.5], {
        extrapolateRight: 'clamp',
    }) + Math.sin(frame / 30) * 0.03;

    return (
        <group position={[0, floatY, 0]} rotation={[rotationX, rotationY, 0]} scale={scale}>
            <mesh castShadow receiveShadow>
                <boxGeometry args={[3.8, 2.2, 0.08]} />
                <meshStandardMaterial attach="material-0" color="#222" />
                <meshStandardMaterial attach="material-1" color="#222" />
                <meshStandardMaterial attach="material-2" color="#222" />
                <meshStandardMaterial attach="material-3" color="#222" />
                <meshStandardMaterial attach="material-4" map={texture} />
                <meshStandardMaterial attach="material-5" color="#111" />
            </mesh>

            {/* Glossy overlay */}
            <mesh position={[0, 0, 0.041]}>
                <planeGeometry args={[3.8, 2.2]} />
                <meshStandardMaterial color="white" transparent opacity={0.05} roughness={0.01} metalness={0.8} />
            </mesh>

            {/* Blue neon outline */}
            <mesh position={[0, 0, -0.01]}>
                <boxGeometry args={[3.85, 2.25, 0.06]} />
                <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
            </mesh>
        </group>
    );
};

export const ProjectVideo: React.FC<ProjectVideoProps> = ({
    title,
    description,
    image,
    tags,
    highlights = [],
}) => {
    const frame = useCurrentFrame();
    const { width, height, fps } = useVideoConfig();

    // Transitions between scenes
    const scene1Opacity = interpolate(frame, [0, 20, 80, 100], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    const scene2Opacity = interpolate(frame, [90, 110, 210, 230], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    const scene3Opacity = interpolate(frame, [220, 240, 280, 300], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill className="bg-[#020202] font-sans text-white overflow-hidden">
            {/* Shared 3D Scene - Constant in background but transforms per scene */}
            <AbsoluteFill style={{ opacity: 0.6 }}>
                <ThreeCanvas width={width} height={height}>
                    <ambientLight intensity={0.6} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
                    <spotLight position={[-10, 10, 15]} angle={0.3} penumbra={1} intensity={2} castShadow />
                    <React.Suspense fallback={null}>
                        <Project3DCard image={image} />
                    </React.Suspense>
                </ThreeCanvas>
            </AbsoluteFill>

            {/* Modern Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

            {/* Scene 1: Introduction */}
            <Sequence from={0} durationInFrames={100}>
                <AbsoluteFill className="flex flex-col justify-center items-center p-20 text-center" style={{ opacity: scene1Opacity }}>
                    <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
                        {title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-blue-400 font-medium tracking-widest uppercase">
                        {tags[0]} • Case Study
                    </p>
                </AbsoluteFill>
            </Sequence>

            {/* Scene 2: Key Highlights / Solving the Problem */}
            <Sequence from={90} durationInFrames={140}>
                <AbsoluteFill className="flex flex-col justify-center p-20" style={{ opacity: scene2Opacity }}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400 border-l-8 border-blue-500 pl-8">
                        Solving the Challenge
                    </h2>
                    <div className="space-y-8">
                        {highlights.map((highlight, i) => {
                            const itemDelay = 100 + i * 20;
                            const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 15], [0, 1], { extrapolateRight: 'clamp' });
                            const itemX = interpolate(frame, [itemDelay, itemDelay + 15], [-50, 0], { extrapolateRight: 'clamp' });

                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-6"
                                    style={{ opacity: itemOpacity, transform: `translateX(${itemX}px)` }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-black">
                                        {i + 1}
                                    </div>
                                    <p className="text-3xl md:text-5xl font-semibold text-gray-100">
                                        {highlight}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </AbsoluteFill>
            </Sequence>

            {/* Scene 3: Tech Stack & Impact */}
            <Sequence from={220} durationInFrames={80}>
                <AbsoluteFill className="flex flex-col justify-end p-20 pb-24" style={{ opacity: scene3Opacity }}>
                    <p className="text-2xl text-blue-400 mb-8 font-bold tracking-widest uppercase">Modern Tech Stack</p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        {tags.map((tag, i) => {
                            const tagDelay = 230 + i * 5;
                            const tagOpacity = interpolate(frame, [tagDelay, tagDelay + 10], [0, 1], { extrapolateRight: 'clamp' });
                            const tagScale = interpolate(frame, [tagDelay, tagDelay + 10], [0.5, 1], { extrapolateRight: 'clamp' });

                            return (
                                <span
                                    key={tag}
                                    className="px-6 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-xl font-bold"
                                    style={{ opacity: tagOpacity, transform: `scale(${tagScale})` }}
                                >
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black leading-none">
                        Driving Digital <br /> <span className="text-blue-500">Innovation.</span>
                    </h3>
                </AbsoluteFill>
            </Sequence>

            {/* Shared Progress Indicator */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-white/5 overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.8)]"
                    style={{ width: `${(frame / 300) * 100}%` }}
                />
            </div>
        </AbsoluteFill>
    );
};

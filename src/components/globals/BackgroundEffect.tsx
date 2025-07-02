const BackgroundEffect = () => {
    return (
        <>
            {/* 1. Púrpura arriba (ej. #351CE3) */}
            <div
                className="absolute top-0 left-0 w-full h-[1000px] z-[-1] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(53, 28, 227, 0.6) 0%, transparent 70%)',
                    filter: 'blur(120px)',
                    mixBlendMode: 'screen',
                }}
            ></div>


            {/* 2. Rosa intenso (#D504BD) más abajo */}
            <div
                className="absolute top-[700px] left-[-200px] w-[1400px] h-[1200px] opacity-40 z-[-1] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #D504BD 80%, transparent 100%)',
                    transform: 'rotate(-23deg)',
                    mixBlendMode: 'overlay',
                }}
            />

            {/* 3. Magenta con morado (#D60E79 → #8713AC) */}
            <div
                className="absolute top-[1300px] left-[-100px] w-[1500px] h-[1400px] opacity-60 z-[-1] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #D60E79 80%, #8713AC 0%)',
                    transform: 'rotate(-71.2deg)',
                    mixBlendMode: 'overlay',
                }}
            />

            {/* 4. Azul (#4B1AD4) más arriba */}
            <div
                className="absolute top-[200px] left-[150px] w-[1000px] h-[1000px] opacity-50 z-[-1] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #4B1AD4 80%, transparent 100%)',
                    mixBlendMode: 'overlay',
                }}
            />

            {/* 5. Azul más oscuro (#0600FF) - fondo más global */}
            <div
                className="absolute top-[-1000px] left-[1000px] w-[3000px] h-[3000px] opacity-50 z-[-1] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #0600FF 80%, transparent 100%)',
                    transform: 'rotate(-76.22deg)',
                    mixBlendMode: 'luminosity',
                }}
            />
        </>
    );
};

export default BackgroundEffect;

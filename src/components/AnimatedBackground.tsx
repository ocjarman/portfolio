import '@/styles/AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="gradient-mesh" />
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
    </div>
  );
};

export default AnimatedBackground;

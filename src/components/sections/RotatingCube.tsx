import "./RotatingCube.css";

type RotatingCubeProps = {
  images: [string, string, string, string, string, string];
};

const faceNames = [
  "front",
  "back",
  "right",
  "left",
  "top",
  "bottom",
] as const;

const RotatingCube = ({ images }: RotatingCubeProps) => {
  return (
    <div
      className="flipfin-cube-stage"
      aria-label="Rotating Flip Fin product gallery"
    >
      <div className="flipfin-cube">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`flipfin-cube-face flipfin-cube-face--${faceNames[index]}`}
          >
            <img
              src={image}
              alt={`Flip Fin product view ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingCube;
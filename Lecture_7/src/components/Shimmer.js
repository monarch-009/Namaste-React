import React from "react";

const Shimmer = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.shimmerHeader}></div>

      {/* Card List */}
      <div style={styles.cardList}>
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div style={styles.card} key={index}>
              <div style={styles.image}></div>
              <div style={styles.textLine}></div>
              <div style={styles.textLine}></div>
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "16px",
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  },
  shimmerHeader: {
    width: "100%",
    height: "120px",
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
    borderRadius: "8px",
  },
  cardList: {
    marginTop: "16px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "16px",
  },
  card: {
    padding: "16px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  image: {
    width: "100%",
    height: "150px",
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
    borderRadius: "8px",
  },
  textLine: {
    width: "100%",
    height: "20px",
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
    borderRadius: "4px",
  },
};

// Add shimmer animation
const shimmerAnimation = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

const StyleTag = () => <style>{shimmerAnimation}</style>;

const App = () => (
  <>
    <StyleTag />
    <Shimmer />
  </>
);

export default App;

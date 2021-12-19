import iconMusic from "../assets/images/icon-music.svg";
import hero from "../assets/images/hero.svg";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#D6E0FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 600,
          width: 400,
          borderRadius: 20,
          backgroundColor: "white",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div>
          <img
            style={{
              height: 200,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            src={hero}
            alt=""
          />
        </div>
        <div
          style={{
            marginBottom: 20,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: 22, marginTop: 30 }}>
            Order Summary
          </span>
          <span
            style={{
              fontWeight: "light",
              fontSize: 17,
              marginTop: 15,
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </span>
        </div>
        <div
          style={{
            backgroundColor: "lightgray",
            height: 70,
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 6,
            marginTop: 12,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ height: 40, width: 40, marginRight: 8 }}
              src={iconMusic}
              alt=""
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "bold" }}>Annual Plan</span>
              <span style={{ fontWeight: "light" }}>$59.99/year</span>
            </div>
          </div>
          <div>
            <a href="/" alt="change">
              Change
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 15,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              backgroundColor: "blue",
              borderRadius: "8px",
              width: "70%",
              height: "48px",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "sans-serif",
              cursor: "pointer",
            }}
          >
            Proceed to Payment
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              width: "70%",
              height: "48px",
              color: "grey",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "sans-serif",
              cursor: "pointer",
            }}
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

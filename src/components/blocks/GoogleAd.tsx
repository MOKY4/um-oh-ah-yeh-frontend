import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(`Ad push error: ${err}`);
    }
  }, []);
  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        style={{
          background: "#e9e9e9",
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          width: 300,
          height: 50,
        }}
      >
        광고 표시 영역
      </div>
    );
  }
  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "inline-block",
        width: 300,
        height: 50,
        alignContent: "center",
      }}
      data-ad-client="ca-pub-1919598055512436"
      data-ad-slot="5598385343"
    ></ins>
  );
};

export default GoogleAd;

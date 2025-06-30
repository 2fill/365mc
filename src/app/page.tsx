export default function Page() {
  return (
    <div className="main">
      <div className="main-box">
        <img src="/Jibang-1.png" alt="Jibang1" className="Jibang-img-1" />
        <div className="order-box">
          <div className="order-item">
              <div className="circle-1">1</div>
              <div className="text-1">Demographics</div>
          </div>
          <div className="order-item">
            <div className="circle-2">2</div>
            <div className="text-2">
              Liposuction<br />
              Information</div>
          </div>
          <div className="order-item">
            <div className="circle-3">3</div>
            <div className="text-3">
              Body<br />
              composition
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
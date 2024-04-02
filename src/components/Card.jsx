import qrCode from "../assets/qr-code.png";

export default function Card({ title, description }) {
  return (
    <div className="bg-fe-white rounded-[20px] flex-grow p-4 text-center max-w-[320px] h-[497px]">
      <img src={qrCode} alt="qr code" className="rounded-[20px]" />
      <h1 className="text-fe-db text-[22px] font-bold pb-[16px] pt-[24px]"> {title} </h1>
      <h2 className="text-[15px] text-fe-gb tracking-[0.19px] px-4"> {description} </h2>
    </div>
  );
}

Card.propTypes = {
  title: "",
  description: "",
};

Card.defaultProps = {
  title: "",
  description: "",
};

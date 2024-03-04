import React from "react";
import PaymentMethods from "../../assets/icons/payment-types.svg";
import PlayStore from "../../assets/icons/play-store.svg";
import AppStore from "../../assets/icons/app-store.svg";
import Logo from "../../assets/images/logo.png";
import Youtube from "../../assets/icons/youtube.png";
import Whatsapp from "../../assets/icons/whatsapp.png";
import Facebook from "../../assets/icons/facebook.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Instagram from "../../assets/icons/instagram.png";
import X from "../../assets/icons/x.png";
import Headset from "../../assets/icons/headset.png";
import Caja from "../../assets/images/caja.svg";
import UcuzaBilet from "../../assets/images/ucuza-bilet.svg";
import DidimTur from "../../assets/images/didim-tur.svg";
import OtelPuan from "../../assets/images/otel-puan.svg";
import OdaMax from "../../assets/images/oda-max.svg";
import HotelAgent from "../../assets/images/hotel-agent.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white bg-slate-800 ">
      <div className="flex flex-wrap gap-5 items-center justify-center bg-slate-600 ml-auto mr-auto pt-10 pb-10">
        <Link to={"https://hotelagent.com/"} target="_blank" className="mb-5">
          <img
            src={HotelAgent}
            alt="HotelAgent"
            width={96}
            height={38}
            className="cursor-pointer"
          />
        </Link>
        <Link
          to={"https://cajabymaxxroyal.com/tr/"}
          target="_blank"
          className="mb-5"
        >
          <img
            src={Caja}
            alt="Caja"
            width={96}
            height={38}
            className="cursor-pointer"
          />
        </Link>
        <Link
          to={"https://www.ucuzabilet.com/"}
          target="_blank"
          className="mb-5"
        >
          <img
            src={UcuzaBilet}
            alt="UcuzaBilet"
            width={96}
            height={38}
            className="cursor-pointer"
          />
        </Link>
        <Link to={"https://www.didimtur.com/"} target="_blank" className="mb-5">
          <img
            src={DidimTur}
            alt="DidimTur"
            width={96}
            height={38}
            className="cursor-pointer"
          />
        </Link>
        <Link to={"https://www.otelpuan.com/"} target="_blank" className="mb-5">
          <img
            src={OtelPuan}
            alt="OtelPuan"
            width={96}
            height={38}
            className="cursor-pointer"
          />
        </Link>
        <Link to={"https://www.odamax.com/"} target="_blank" className="mb-5">
          <img
            src={OdaMax}
            alt="OdaMax"
            width={96}
            height={38}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="bg-slate-800 pt-10 pb-10 pl-10 pr-10 ">
        <div className="flex flex-wrap gap-5 justify-between items-center mb-2 small-view-center-aligment">
          <div className="social-media-icons flex gap-3 ">
            <Link to={"https://www.facebook.com/otelfiyatcom"} target="_blank">
              <img
                src={Facebook}
                alt="Facebook"
                width={33}
                height={33}
                className="cursor-pointer"
              />
            </Link>
            <Link to={"https://twitter.com/otelfiyat"} target="_blank">
              <img
                src={X}
                alt="X"
                width={33}
                height={33}
                className="cursor-pointer"
              />
            </Link>
            <Link to={"https://www.instagram.com/otelfiyat/"} target="_blank">
              <img
                src={Instagram}
                alt="Instagram"
                width={33}
                height={33}
                className="cursor-pointer"
              />
            </Link>
            <Link to={"https://www.youtube.com/"} target="_blank">
              <img
                src={Youtube}
                alt="Youtube"
                width={33}
                height={33}
                className="cursor-pointer"
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/otelfiyat.com"}
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="Linkedin"
                width={33}
                height={33}
                className="cursor-pointer"
              />
            </Link>
            <Link
              to={"https://api.whatsapp.com/send?phone=444444444"}
              target="_blank"
            >
              <img
                src={Whatsapp}
                alt="Whatsapp"
                width={33}
                height={33}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <img
              src={Headset}
              alt="Support"
              style={{ width: "33px", height: "33px" }}
            />
            <div className="text-lg">
              <Link to={"tel:444444444"}>444 444 444</Link>
              <div>En ucuz fiyatla!</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-10 items-center mb-2 text-xs">
            <Link to="/">
              <img
                src={Logo}
                alt="axess"
                height={40}
                width={126}
                className="cursor-pointer"
              />
            </Link>
            <div>OtelFiyat Seyahat Acentası Belge No: 23212333</div>
          </div>
          <div className="mb-2 text-xs">
            Copyright © 2024 Ets Ersoy Turistik Servisleri A.Ş. Tüm hakları
            saklıdır.{" "}
            <Link to={"/usage-agreement"} className="text-[blue]">
              Kullanım Sözleşmesi
            </Link>{" "}
            |{" "}
            <Link to={"/confidentiality-agreement"} className="text-[blue]">
              Gizlilik Sözleşmesi
            </Link>{" "}
            |{" "}
            <Link to={"/protection-of-personal-data"} className="text-[blue]">
              Kişisel Verilerin Korunması
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-center small-view-center-aligment">
          <div className="payment-methods flex gap-5">
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.hoteltonight.android.prod&hl=tr&gl=US"
              }
              target="_blank"
            >
              <img src={PlayStore} alt="PlayStore" className="cursor-pointer" />
            </Link>

            <Link
              to={"https://apps.apple.com/tr/app/tatilfiyat"}
              target="_blank"
            >
              <img src={AppStore} alt="AppStore" className="cursor-pointer" />
            </Link>
          </div>
          <div>
            <img
              src={PaymentMethods}
              alt="PaymentMethods"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import AboutImg from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div>
      <img src={AboutImg} width={"100%"} />
      <div className="grid grid-cols-1 gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto pl-10 pr-10">
        <h1 className="text-3xl font-bold dark:text-white text-indigo-700">
          Otelfiyat.com
        </h1>
        <p className="text-gray-800 text-sm">
          2004&nbsp; Yılından bu yana turizm sektöründe hizmet veren İdeal Tur
          AŞ bünyesinde kurulan &nbsp;
          <span className="notranslate">OtelFiyat.com</span>&nbsp; Sizlere En
          uygun Otel fiyatları üzerinden Rezervasyon işleminizi
          tamamlayabileceğiniz web portalı hizmetini sunmaktadır.
        </p>
        <h1 className="text-3xl font-bold dark:text-white text-indigo-700">
          Ekibimiz
        </h1>
        <p className="text-gray-800 text-sm">
          Ankara ve İzmirde bulunan 2 Çağrı Merkezimizde, Alanında Uzman
          Kadromuzla, Toplam 200 kişilik bir ekiple, Türkiye'nin tüm
          bölgelerindeki 5000'in üzerinde tesise dilerseniz Online, dilerseniz
          de telefonda rezervasyonlarınızı tamamlayabilirsiniz.
        </p>
        <h1 className="text-3xl font-bold dark:text-white text-indigo-700">
          Kapsamlı Otel Arama Motoru
        </h1>
        <p className="text-gray-800 text-sm">
          OtelFiyat.com Otel Arama Motorunda Dilediğiniz bölgelere yada fiyat
          aralığına göre tesislerin sorgulamasını yapabilir ve Butik Otellerden
          Ultra Lüks Tesislere, Kayak Otellerinden Termal Kaplıca Otellerine
          kadar bir çok farklı ürünün tüm detay özelliklerine göre arama
          gerçekleştirebilir ve aradığınız özelliklere sahip oteli kolayca
          bulabilirsiniz.
        </p>
        <h1 className="text-3xl font-bold dark:text-white text-indigo-700">
          Her Rezervasyonda %5 Parapuan Avantajı
        </h1>
        <p className="text-gray-800 text-sm">
          OtelFiyat.com üzerinden üye olarak tamamladığınız rezervasyonlarda, En
          uygun fiyatlar üzerinden Extra %5 fiyat indirimine sahip olursunuz ve
          Üyelik hesabınızda biriken para puanlarınızı Sonraki
          rezervasyonlarınızda kullanabilirsiniz.
        </p>
        <h1 className="text-3xl font-bold dark:text-white text-indigo-700">
          Firma Künyesi
        </h1>
        <p className="text-gray-800 text-sm">
          Firma Ünvanı İdeal Tur Turizm Tic. AŞ Merkez Tel : 0 312 442 11 66
          Adres : Necatibey Cad No: 19/4 Kızılay ANKARA Şube Tel : 0 232 218 00
          80 Adres : Gazi Bulvarı No:95 Münir Birsel Plaza A Blok Kat 6 Alsancak
          İZMİR Firma Kuruluş Yılı : 2004 Ticaret Odası : Ankara Ticaret Odası
          Ticaret Sicil Numarası : 191480 Vergi Dairesi ve Numarası : Mithatpaşa
          VD 470 062 30 64 Üyeliklerimiz ve Belge No : Türsab (3304) IATA
          (88-2-1307-5)
        </p>
      </div>
    </div>
  );
};

export default About;

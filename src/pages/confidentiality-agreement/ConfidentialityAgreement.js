import React from "react";
import AgreementImgTwo from "../../assets/images/agreement-image-two.jpg";

const ConfidentialityAgreement = () => {
  return (
    <div>
      <img src={AgreementImgTwo} width={"100%"} />
      <div class="grid grid-cols-1 gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto pl-10 pr-10">
        <h3 class="text-3xl font-bold dark:text-white">GİZLİLİK SÖZLEŞMESİ</h3>
        <p>
          <strong>1. Kişisel Verilerin Toplanması ve İşlenmesi</strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], bu web sitesini veya uygulamayı kullanarak kişisel
          verilerinizi toplayabilir ve işleyebilir. Kişisel verilerinizi işlemek
          için açık rızanızı alacağız veya yasal bir dayanak bulunacaktır.
        </p>

        <p>
          <strong>2. Kişisel Verilerin Kullanım Amaçları</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Kişisel verileriniz, yalnızca belirli amaçlar doğrultusunda
          kullanılacaktır. Bu amaçlar, hizmetlerimizi sunmak, geliştirmek ve
          iyileştirmek, müşteri desteği sağlamak ve yasal gereksinimlere
          uymaktır.
        </p>

        <p>
          <strong>3. Kişisel Verilerin Korunması</strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], kişisel verilerinizi güvenli bir şekilde korumak için
          gerekli teknik ve organizasyonel önlemleri alır. Veri güvenliğini
          sağlamak için uygun fiziksel, elektronik ve yönetimsel prosedürler
          uygulanır.
        </p>

        <p>
          <strong>4. Kişisel Verilerin Paylaşımı</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Kişisel verileriniz, yalnızca gizlilik sözleşmemizde belirtilen
          amaçlar doğrultusunda üçüncü taraflarla paylaşılabilir. Bu
          paylaşımlar, yasal gereksinimlere uygun olarak veya açık rızanızla
          gerçekleştirilecektir.
        </p>

        <p>
          <strong>5. Çerezler ve Benzer Teknolojiler</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Bu web sitesi veya uygulama, çerezler ve benzer teknolojiler
          kullanarak kullanıcı deneyimini iyileştirmek ve siteyi analiz etmek
          için bilgileri toplayabilir.
        </p>

        <p>
          <strong>6. Kişisel Verilere Erişim ve Düzeltme Hakkı</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Veri sahipleri, kişisel verilerine erişme ve bunları düzeltme hakkına
          sahiptirler. Ayrıca, kişisel verilerinin silinmesini veya işlenmesine
          itiraz etme hakkına da sahiptirler.
        </p>

        <p>
          <strong>7. Değişiklikler</strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], bu gizlilik sözleşmesini dilediği zaman değiştirme
          hakkını saklı tutar. Değişiklikler yayınlandığında, yeni politikalar
          yürürlüğe girer ve sitemizde ilan edilir.
        </p>

        <p>
          <strong>8. İletişim</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Gizlilik sözleşmemizle ilgili herhangi bir sorunuz veya endişeniz
          varsa, lütfen [Şirketin iletişim bilgileri] üzerinden bizimle
          iletişime geçiniz.
        </p>
        <p class="text-gray-800 text-sm">
          Bu gizlilik sözleşmesi, [Şirket Adı] ile kullanıcılar arasında yapılan
          anlaşmanın bir parçasıdır.
        </p>
      </div>
    </div>
  );
};

export default ConfidentialityAgreement;

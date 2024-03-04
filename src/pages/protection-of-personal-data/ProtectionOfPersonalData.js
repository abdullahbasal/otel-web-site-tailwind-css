import React from "react";
import AgreementImgThree from "../../assets/images/agreement-image-three.jpg";

const ProtectionOfPersonalData = () => {
  return (
    <div>
      <img src={AgreementImgThree} width={"100%"} />
      <div class="grid grid-cols-1 gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto pl-10 pr-10">
        <h3 class="text-3xl font-bold dark:text-white ">
          KİŞİSEL VERİLERİN KORUNMASI
        </h3>
        <p>
          <strong>
            1. Kişisel Verilerin İşlenmesine İlişkin Genel İlkeler
          </strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], kişisel verilerin işlenmesi sırasında gizliliği,
          bütünlüğü ve güvenliğini sağlamak için gerekli tedbirleri almaktadır.
        </p>

        <p>
          <strong>2. Kişisel Veri İşleme Amaçları</strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], kişisel verileri yalnızca belirli, açık ve yasal amaçlar
          için işlemekte ve bu amaçlar dışında kullanmamaktadır.
        </p>

        <p>
          <strong>3. Kişisel Verilerin Toplanması ve Kullanılması</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Kişisel veriler, yalnızca belirli ve meşru amaçlar için toplanmakta ve
          işlenmektedir. Veri toplama ve işleme süreçlerinde şeffaflık ilkesine
          uyulmaktadır.
        </p>

        <p>
          <strong>4. Kişisel Verilerin Paylaşımı</strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], kişisel verileri yalnızca yasal gereklilikler veya
          kullanıcıların açık rızası doğrultusunda üçüncü taraflarla
          paylaşmaktadır.
        </p>

        <p>
          <strong>5. Kişisel Veri Güvenliği</strong>
        </p>
        <p class="text-gray-800 text-sm">
          [Şirket Adı], kişisel verilerin güvenliğini sağlamak için gerekli
          teknik ve organizasyonel önlemleri almaktadır.
        </p>

        <p>
          <strong>6. Kişisel Veri Saklama Süreleri</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Kişisel veriler, sadece gerekli olan süre boyunca saklanmakta ve daha
          fazla işlenmemektedir.
        </p>

        <p>
          <strong>7. Veri Sahibi Hakları</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Veri sahipleri, kişisel verileriyle ilgili belirli haklara
          sahiptirler, bunlar arasında veriye erişim, düzeltme ve silme hakkı
          bulunmaktadır.
        </p>

        <p>
          <strong>8. İletişim</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Kişisel verilerin korunmasıyla ilgili herhangi bir sorunuz veya
          endişeniz varsa, lütfen [Şirketin iletişim bilgileri] üzerinden
          bizimle iletişime geçiniz.
        </p>
        <p class="text-gray-800 text-sm">
          Bu Kişisel Verilerin Korunması metni, [Şirket Adı] ile kullanıcılar
          arasında yapılan anlaşmanın bir parçasıdır.
        </p>
      </div>
    </div>
  );
};

export default ProtectionOfPersonalData;

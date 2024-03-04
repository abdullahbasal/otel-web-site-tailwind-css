import React from "react";
import AgreementImgOne from "../../assets/images/agreement-image-one.jpg";

const UsageAgreement = () => {
  return (
    <div>
      <img src={AgreementImgOne} width={"100%"} />
      <div class="grid grid-cols-1 gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto pl-10 pr-10">
        <h3 class="text-3xl font-bold dark:text-white ">KULLANIM SÖZLEŞMESİ</h3>
        <p>
          <strong>1. Kabul Edilen Şartlar</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Bu web sitesini veya uygulamayı kullanarak, bu Kullanım Sözleşmesi'nin
          tüm koşullarını kabul etmiş sayılırsınız. Eğer bu koşulları kabul
          etmiyorsanız, lütfen bu web sitesini veya uygulamayı kullanmayınız.
        </p>

        <p t>
          <strong>2. Hizmetlerin Kullanımı</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Şirket tarafından sunulan hizmetlerin kullanımı, yalnızca yasal
          amaçlar için kullanılmalıdır. Kullanıcılar, hizmetlerin kötüye
          kullanımı veya yasadışı faaliyetler için kullanılmasını önlemekle
          yükümlüdür.
        </p>
        <p>
          <strong>3. Hizmetlerin Değiştirilmesi veya Sonlandırılması</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Şirket, hizmetleri herhangi bir zamanda önceden bildirim yapmaksızın
          değiştirme, askıya alma veya sonlandırma hakkını saklı tutar.
        </p>

        <p>
          <strong>4. Gizlilik Politikası</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Şirket'in gizlilik politikası, bu Sözleşme'nin bir parçasıdır.
          Kullanıcılar, Şirket'in gizlilik politikasını kabul ederek hizmetleri
          kullanır.
        </p>

        <p>
          <strong>5. Sorumluluk Sınırı</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Şirket, hizmetlerin kullanımından kaynaklanan doğrudan veya dolaylı
          herhangi bir zarardan sorumlu değildir.
        </p>

        <p>
          <strong>6. Değişiklikler</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Şirket, bu Kullanım Sözleşmesi'ni dilediği zaman değiştirme hakkını
          saklı tutar. Değişiklikler yürürlüğe girdiğinde, kullanıcılar yeni
          koşulları kabul etmiş sayılır.
        </p>

        <p>
          <strong>7. Uygulanabilir Kanunlar</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Bu Kullanım Sözleşmesi, [Şirket'in bulunduğu ülke]'daki kanunlar
          uyarınca yorumlanacaktır.
        </p>

        <p>
          <strong>8. İletişim</strong>
        </p>
        <p class="text-gray-800 text-sm">
          Bu Kullanım Sözleşmesi ile ilgili herhangi bir soru veya endişeniz
          varsa, lütfen [Şirketin iletişim bilgileri] üzerinden bizimle
          iletişime geçiniz.
        </p>
        <p class="text-gray-800 text-sm">
          Bu Kullanım Sözleşmesi, taraflar arasında yapılan anlaşmanın tamamını
          oluşturur ve taraflar arasında önceki tüm sözlü veya yazılı
          anlaşmaların yerini alır.
        </p>
      </div>
    </div>
  );
};

export default UsageAgreement;

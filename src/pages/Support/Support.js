import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SupportImg from "../../assets/images/support.jpg";

const Support = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <img src={SupportImg} width={"100%"} />
      <div className="grid grid-cols-1 gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto pl-10 pr-10">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Otel odasının fiyatlarını nerede görebilirim?
          </AccordionHeader>
          <AccordionBody>
            Arama yaptığınızda, konaklamak istediğiniz tarihler arasında otel
            odasının toplam tutarını görebilirsiniz. Aramanıza uygun oteli
            seçtikten sonra otel detay sayfasında farklı oda tiplerinin
            fiyatlarını inceleyebilirsiniz.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Nasıl rezervasyon yapabilirim?
          </AccordionHeader>
          <AccordionBody>
            Arama yaparak tercih ettiğiniz tarihlere ve özelliklere uygun oteli
            bulduktan sonra, otelin detay sayfasından odanızı seçerek kolayca
            rezervasyon yapabilirsiniz.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Ödemeyi nasıl yapabilirim?
          </AccordionHeader>
          <AccordionBody>
            Tercihlerinize uygun odayı seçtikten sonra kredi kartı bilgilerinizi
            girerek güvenli bir şekilde ödeme yapabilirsiniz.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            Telefon ile otel rezervasyonu yapabilir miyim?
          </AccordionHeader>
          <AccordionBody>
            08.30-22.00 saatleri arasında 0444 444 44 44 numaralı telefondan
            çağrı merkezimize ulaşarak otel rezervasyonunu telefon ile de
            yaptırabilirsiniz.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            Otel rezervasyonumun iadesi veya değişiklik için ne yapmam
            gerekiyor?
          </AccordionHeader>
          <AccordionBody>
            Hangi kredi kartları ile rezervasyon yapabilirim?
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            Tüm bankaların kredi kartlarıyla rezervasyon işlemlerinizi
            gerçekleştirebilirsiniz.
          </AccordionHeader>
          <AccordionBody>
            Tercihlerinize uygun odayı seçtikten sonra kredi kartı bilgilerinizi
            girerek güvenli bir şekilde ödeme yapabilirsiniz.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7}>
          <AccordionHeader onClick={() => handleOpen(7)}>
            Onay e-postamı bulamadığım durumda ne yapmalıyım?
          </AccordionHeader>
          <AccordionBody>
            Onay e-postanızı bulamamanız durumunda +90 444 444 44 44 numaralı
            telefondan çağrı merkezimizi arayarak seyahat danışmanlarımızdan
            onay e-postanızın tekrar gönderilmesini isteyebilirsiniz.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Support;

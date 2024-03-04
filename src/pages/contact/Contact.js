import React from "react";
import Map from "../../components/map/Map";
import { Card, CardBody, Typography } from "@material-tailwind/react";
export default function Contact() {
  return (
    <div>
      <Map height={500} width={"100%"} lat={38.4241022} lng={27.1415059} />
      <div className="flex flex-wrap gap-5 items-center justify-center  ml-auto mr-auto pt-10 pb-10">
        <h1 className="text-2xl border-b-2 pb-2">İLETİŞİM</h1>
      </div>
      <div className="flex flex-wrap  gap-10 items-center justify-center mt-10 mb-10 ">
        <Card className="mt-6 w-96 min-h-48">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Ankara Ofisimiz - 0444 444 44 44
            </Typography>
            <Typography className="text-sm">
              info@otelfiyat.com
              <br />
              Gazi Bulvarı No:95 Münir Birsel Plaza A Blok Kat 6 35280
              <br />
              Çankaya - Konak/İzmir
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96 min-h-48">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              <div> İzmir Ofisimiz - 0444 444 44 44</div>
            </Typography>
            <Typography className="text-sm">
              info@otelfiyat.com
              <br />
              Necatibey Cad No: 19/4 Kızılay
              <br />
              06420 Kızılay - Çankaya/Ankara
              <br />
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

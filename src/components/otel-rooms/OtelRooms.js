import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const OtelRooms = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Card
        className="w-full max-w-[48rem] flex-row mb-4 cursor-pointer"
        style={{ minWidth: "265px" }}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={
              "https://www.otelfiyat.com/media/oda_resim/buyuk/1557219375-1467800506-ttt_room1.jpg"
            }
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Deluxe Oda
          </Typography>

          <Typography color="gray" className="mb-8 font-normal">
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Kablosuz İnternet
            </span>
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Mini bar
            </span>
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Televizyon
            </span>
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Termal Su
            </span>
          </Typography>
          <Button variant="text" className="flex items-center gap-2">
            Fiyat Al
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 1024 1024"
              fill="#000000"
              className="icon"
              version="1.1"
            >
              <path
                d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                fill=""
              />
            </svg>
          </Button>
        </CardBody>
      </Card>
      <Card
        className="w-full max-w-[48rem] flex-row mb-4 cursor-pointer"
        style={{ minWidth: "265px" }}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={
              "https://www.otelfiyat.com/media/oda_resim/buyuk/1557219375-1467800506-ttt_room1.jpg"
            }
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Ekonomik Oda
          </Typography>

          <Typography color="gray" className="mb-8 font-normal">
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Kablosuz İnternet
            </span>
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Televizyon
            </span>
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Termal Su
            </span>
          </Typography>
          <Button variant="text" className="flex items-center gap-2">
            Fiyat Al
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 1024 1024"
              fill="#000000"
              className="icon"
              version="1.1"
            >
              <path
                d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                fill=""
              />
            </svg>
          </Button>
        </CardBody>
      </Card>
      <Card
        className="w-full max-w-[48rem] flex-row mb-4 cursor-pointer"
        style={{ minWidth: "265px" }}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={
              "https://www.otelfiyat.com/media/oda_resim/buyuk/1557219375-1467800506-ttt_room1.jpg"
            }
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Standart Oda
          </Typography>

          <Typography color="gray" className="mb-8 font-normal">
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Kablosuz İnternet
            </span>
            <span className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
              Televizyon
            </span>
          </Typography>
          <Button variant="text" className="flex items-center gap-2">
            Fiyat Al
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 1024 1024"
              fill="#000000"
              className="icon"
              version="1.1"
            >
              <path
                d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                fill=""
              />
            </svg>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OtelRooms;

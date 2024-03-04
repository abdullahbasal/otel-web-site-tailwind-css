import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HotelCard({
  imgUrl,
  name,
  description,
  city,
  price,
  stars,
  currency,
  onClick,
}) {
  return (
    <Card
      className="w-full max-w-[48rem] flex-row mb-4 cursor-pointer"
      style={{ minWidth: "265px" }}
      onClick={onClick}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={imgUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {city}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {description}
          <br />
          {price + " " + currency}
          <br />
          {Array.from({ length: stars }, () => "⭐").join("")}
        </Typography>
        <Button variant="text" className="flex items-center gap-2">
          Oteli incele
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardBody>
    </Card>
  );
}

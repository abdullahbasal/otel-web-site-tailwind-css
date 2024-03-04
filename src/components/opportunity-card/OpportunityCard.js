import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const OpportunityCard = ({ title, img }) => {
  return (
    <Card className="mt-6 ">
      <CardHeader className="relative">
        <img src={img} alt="card-image" width={"100%"} height={"100%"} />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default OpportunityCard;

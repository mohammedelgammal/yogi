// mui
import { Container, Grid } from "@mui/material";
// common components
import Spacer from "../../../../CommonComponents/Spacer/Spacer";

// data
import data from "./Data/data";

// styling
import Style from "./BannerPartners.module.css";

const BannerPartners = () => {
  return (
    <Container className={Style.bannerPartners}>
      <Spacer lg />
      <h2 className={Style.heading}>
        Thousands of teams worldwide are using Hugi
      </h2>
      <Spacer lg />
      <Grid container spacing={10}>
        {data.map(({ src }, index) => (
          <Grid item key={index} lg={3} md={6} sm={12}>
            <div
              className={Style.partner}
              style={{ backgroundImage: `url(${src})` }}
            />
          </Grid>
        ))}
      </Grid>
      <Spacer lg />
    </Container>
  );
};

export default BannerPartners;

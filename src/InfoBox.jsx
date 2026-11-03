import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=800&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?auto=format&fit=crop&w=800&q=60";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=60";

  let imageURL;
  let WeatherIcon;
  let iconColor;

  if (info.humidity > 80) {
    imageURL = RAIN_URL;
    WeatherIcon = ThunderstormIcon;
    iconColor = "#1976d2";
  } else if (info.temp > 15) {
    imageURL = HOT_URL;
    WeatherIcon = WbSunnyIcon;
    iconColor = "#f9a825";
  } else {
    imageURL = COLD_URL;
    WeatherIcon = AcUnitIcon;
    iconColor = "#29b6f6";
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={imageURL} title="weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{info.city}</b>{" "}
              <WeatherIcon
                sx={{ color: iconColor, verticalAlign: "middle" }}
              />
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <p>
                Temperature <b>{info.temp} &deg;C</b>
              </p>
              <p>
                Humidity <b>{info.humidity}%</b>
              </p>
              <p>
                Min. Temp. <b>{info.tempMin} &deg;C</b>
              </p>
              <p>
                Max. Temp. <b>{info.tempMax} &deg;C</b>
              </p>
              <p>
                The weather can be described as <b>{info.weather}</b> & feels
                like <b>{info.feelsLike} &deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
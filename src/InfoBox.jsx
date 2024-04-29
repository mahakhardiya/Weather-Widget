import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL = "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className='card-container'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={info.humidity> 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Times New Roman"}}>
            <b>{info.city}</b>&nbsp;
            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>
              Temperature: {info.temp}&deg;C
            </p>
            <p>
              Humidity: {info.humidity}
            </p>
            <p>
              Min Temp: {info.tempMin}&deg;C
            </p>
            <p>
              Max Temp: {info.tempMax}&deg;C
            </p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
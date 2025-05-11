import express, { json, urlencoded } from "express";

const app = express();
const port = 3000;
const laptopJSON = `[
  {
    "id": 1,
    "Denumire": "ASUS TUF A15 FA506NF",
    "Display": {
      "Dimensiune": "15.6 inch",
      "Rezolutie": "Full HD 1920x1080",
      "Rata_refresh": "144 Hz",
      "Tehnologie": "IPS Level",
      "Anti_glare": true
    },
    "Procesor": {
      "Model": "AMD Ryzen 5 7535HS",
      "Nuclee": 6,
      "Threaduri": 12,
      "Frecventa_max": "4.55 GHz"
    },
    "Memorie_RAM": {
      "Capacitate": "16 GB DDR5",
      "Frecventa": "4800 MHz",
      "Extensibila": "pana la 32 GB"
    },
    "Stocare": {
      "SSD": "512 GB M.2 PCIe"
    },
    "Placa_video": {
      "Model": "NVIDIA GeForce RTX 2050",
      "Memorie": "4 GB GDDR6"
    },
    "Conectivitate": {
      "WiFi": "802.11ax",
      "Bluetooth": "5.3",
      "Porturi": ["3x USB 3.2", "1x USB-C", "HDMI", "RJ-45", "Audio Jack combo"]
    },
    "Baterie": "48 Whr",
    "Greutate": "2.3 kg",
    "Tastatura": "RGB iluminata, cu bloc numeric",
    "Camera_web": "720p HD",
    "Sistem_operare": "Fara OS",
    "Garantie": "24 luni"
  },
  {
    "id": 2,
    "Denumire": "MSI Cyborg 15 A12UC",
    "Display": {
      "Dimensiune": "15.6 inch",
      "Rezolutie": "Full HD 1920x1080",
      "Rata_refresh": "144 Hz",
      "Tehnologie": "IPS Level",
      "Anti_glare": true
    },
    "Procesor": {
      "Model": "Intel Core i5-12450H",
      "Nuclee": 8,
      "Threaduri": 12,
      "Frecventa_max": "4.40 GHz"
    },
    "Memorie_RAM": {
      "Capacitate": "16 GB DDR5",
      "Slot_1": "8 GB",
      "Slot_2": "8 GB"
    },
    "Stocare": {
      "SSD": "512 GB M.2 PCIe"
    },
    "Placa_video": {
      "Model": "NVIDIA GeForce RTX 3050",
      "Memorie": "4 GB GDDR6"
    },
    "Conectivitate": {
      "WiFi": "802.11ax",
      "Bluetooth": "5.2",
      "Porturi": ["2x USB 3.2", "1x USB-C", "HDMI", "RJ-45"]
    },
    "Baterie": "53.5 Whr",
    "Greutate": "1.98 kg",
    "Tastatura": "Iluminata, cu bloc numeric",
    "Camera_web": "HD",
    "Sistem_operare": "Free DOS",
    "Garantie": "24 luni"
  },
  {
    "id": 3,
    "Denumire": "Lenovo LOQ 15IAX9",
    "Display": {
      "Dimensiune": "15.6 inch",
      "Rezolutie": "Full HD 1920x1080",
      "Rata_refresh": "144 Hz",
      "Tehnologie": "IPS",
      "Anti_glare": true,
      "Luminozitate": "300 nits",
      "GSync": true,
      "sRGB": "100%"
    },
    "Procesor": {
      "Model": "Intel Core i5-12450HX",
      "Nuclee": 8,
      "Threaduri": 12,
      "Frecventa_max": "4.40 GHz"
    },
    "Memorie_RAM": {
      "Capacitate": "12 GB DDR5",
      "Frecventa": "4800 MHz",
      "Slot_1": "12 GB"
    },
    "Stocare": {
      "SSD": "512 GB M.2 PCIe"
    },
    "Placa_video": {
      "Model": "NVIDIA GeForce RTX 2050",
      "Memorie": "4 GB GDDR6"
    },
    "Conectivitate": {
      "WiFi": "802.11ax",
      "Bluetooth": "5.2",
      "Porturi": ["3x USB 3.2", "1x USB-C", "HDMI", "RJ-45", "Audio Jack combo"]
    },
    "Baterie": "60 Whr",
    "Greutate": "2.38 kg",
    "Tastatura": "Iluminata (White), cu bloc numeric",
    "Camera_web": "720p HD cu E-shutter",
    "Sistem_operare": "Fara OS",
    "Garantie": "24 luni"
  }
]
`;

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { laptop: data });
});

app.post("/post", (req, res) => {
  switch (req.body.choice) {
    case "tuf":
      data = JSON.parse(laptopJSON)[0];
      break;
    case "cyborg":
      data = JSON.parse(laptopJSON)[1];
      break;
    case "loq":
      data = JSON.parse(laptopJSON)[2];
      break;
    default:
      console.log("Error sending data on /post");
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import { useSelector } from 'react-redux'
import L from 'leaflet'
import 'leaflet-routing-machine'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import randomColor from 'randomcolor'
import Routing from '../../lib/routingMap'
import './Map.scss'

const Map = () => {
  const selected = useSelector((state) => state.delivery.selected)
  const startPoint = selected?.startPoint.coordinates
  const endPoint = selected?.endPoint.coordinates
  const startPointPopup = selected?.startPoint.location
  const endPointPopup = selected?.endPoint.location

  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.8.0/dist/images/'

  const startIcon = new L.Icon({
    iconUrl: require('../../assets/img/marker_start.png'),
    iconSize: new L.Point(35, 35),
  })

  const stopIcon = new L.Icon({
    iconUrl: require('../../assets/img/marker_stop.png'),
    iconSize: new L.Point(35, 35),
  })

  return (
    <MapContainer center={[47.23135, 39.82328]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selected && (
        <div>
          <Marker position={startPoint} icon={startIcon}>
            <Popup>{startPointPopup}</Popup>
          </Marker>
          <Routing
            start={startPoint}
            stop={endPoint}
            polyline={{
              color: randomColor({ luminosity: 'dark' }),
              opacity: 0.6,
              weight: 4,
            }}
          />
          <Marker position={endPoint} icon={stopIcon}>
            <Popup>{endPointPopup}</Popup>
          </Marker>
        </div>
      )}
    </MapContainer>
  )
}

export default Map

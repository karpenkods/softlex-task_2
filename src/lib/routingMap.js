import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet-routing-machine'

const Routing = ({ start, stop, polyline }) => {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(...start), L.latLng(...stop)],
      lineOptions: {
        styles: [polyline],
      },
      addWaypoints: false,
    }).addTo(map)

    return () => map.removeControl(routingControl)
  }, [map, start, stop, polyline])

  return null
}

export default Routing

import React, {
    Component
} from 'react';
import {
    Map,
    GoogleApiWrapper,
    InfoWindow,
    Marker
} from 'google-maps-react';

const mapStyles = {
    width: '30%',
    height: '30%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { lat: 0, lng: 0  }
        
    }
    componentDidMount() {
         var midPoint = function (latitude1, longitude1, latitude2, longitude2) {
             var DEG_TO_RAD = Math.PI / 180; // To convert degrees to radians.

             // Convert latitude and longitudes to radians:
             var lat1 = latitude1 * DEG_TO_RAD;
             var lat2 = latitude2 * DEG_TO_RAD;
             var lng1 = longitude1 * DEG_TO_RAD;
             var dLng = (longitude2 - longitude1) * DEG_TO_RAD; // Diff in longtitude.

             // Calculate mid-point:
             var bx = Math.cos(lat2) * Math.cos(dLng);
             var by = Math.cos(lat2) * Math.sin(dLng);
             var lat = Math.atan2(
                 Math.sin(lat1) + Math.sin(lat2),
                 Math.sqrt((Math.cos(lat1) + bx) * (Math.cos(lat1) + bx) + by * by));
             var lng = lng1 + Math.atan2(by, Math.cos(lat1) + bx);
            // debugger
             return ({
                 latitude: lat / DEG_TO_RAD,
                 longitude: (lng / DEG_TO_RAD)
             });
            }
             if (this.props.location2) {
                //  debugger
                 const lat1 = this.props.location.lat
                 const lng1 = this.props.location.lng
                 const lat2 = this.props.location2.lat
                 const lng2 = this.props.location2.lng
                 var midLocation = midPoint(lat1, lng1, lat2, lng2)
                //  console.log(midLocation)

                 this.setState({
                     "lat": midLocation.latitude,
                     "lng": midLocation.longitude
                 })
                //  debugger
         } else {
            //  debugger
             const lat = this.props.location.lat
             const lng = this.props.location.lng
             this.setState({
                         "lat": this.props.location.lat,
                         "lng": this.props.location.lng,
                     })
         }
    }
    render() {
        // debugger
        const lat =this.state.lat 
        const lng = this.state.lng 
        // alert(lat, lng)
        console.log(this.state)
        return ( this.state.lat === 0 || this.state.lat === undefined ? <div>loading...</div> : <
            Map google = {
                this.props.google
            }
            zoom = {
                6
            }
            style = {
                mapStyles
            }
            initialCenter =  { 
                {
                    lat, lng
                }
            }
            />
        );
    }
}





export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxH_jNC-exop7-UMWFbzOnH2HZFBPSTXs'
})(MapContainer);
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Booking = () => {
    const [map, setMap] = useState(null);
    const [fromMarker, setFromMarker] = useState(null);
    const [toMarker, setToMarker] = useState(null);
    const mapContainer = useRef(null);

    const initMap = () => {
        const mapOptions = {
            center: { lat: 0, lng: 0 },
            zoom: 10,
        };
        const gmaps = new window.google.maps.Map(mapContainer.current, mapOptions);

        const fromInput = document.getElementById("fromInput");
        const toInput = document.getElementById("toInput");

        const autocompleteFrom = new window.google.maps.places.Autocomplete(fromInput);
        const autocompleteTo = new window.google.maps.places.Autocomplete(toInput);

        const fromMarkerOptions = {
            map: gmaps,
            draggable: true,
            title: "From Location",
        };
        const fromMarker = new window.google.maps.Marker(fromMarkerOptions);

        const toMarkerOptions = {
            map: gmaps,
            draggable: true,
            title: "To Location",
        };
        const toMarker = new window.google.maps.Marker(toMarkerOptions);

        autocompleteFrom.addListener("place_changed", () => {
            const place = autocompleteFrom.getPlace();
            if (place.geometry) {
                fromMarker.setPosition(place.geometry.location);
                gmaps.setCenter(place.geometry.location);
            }
        });

        autocompleteTo.addListener("place_changed", () => {
            const place = autocompleteTo.getPlace();
            if (place.geometry) {
                toMarker.setPosition(place.geometry.location);
                gmaps.setCenter(place.geometry.location);
            }
        });

        setMap(gmaps);
        setFromMarker(fromMarker);
        setToMarker(toMarker);
    };

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCOMTOU_5ydEqEW_FLwRv7mok-WuR3vPGs&libraries=places`;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, []);
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: "70px"
    }

    const formStyle = {
        width: "50%",
        padding: "20px",
    }

    return (
        <section style={containerStyle}>
            <form style={formStyle}>
                <h1>Book New Armada</h1>
                <div className="mb-3">
                    <label className="form-label">From</label>
                    <input
                        type="text"
                        className="form-control"
                        name="from"
                        id="fromInput"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">To</label>
                    <input
                        type="text"
                        className="form-control"
                        id="toInput"
                        name="to"
                        required
                    />
                </div>
                <div ref={mapContainer} style={{ height: "300px" }}></div>
                <div className="mb-3">
                    <label className="form-label">Select Armada</label>
                    <select className="form-select" name="imgUrl" required>
                        <option value="">Pilih Armada</option>
                        <option value="armada1">Armada 1</option>
                        <option value="armada2">Armada 2</option>
                        <option value="armada3">Armada 3</option>
                    </select>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to="/" type="submit" className="btn btn-primary">Submit</Link>
                    <Link to="/" type="submit" className="btn btn-danger ">Cancel</Link>
                </div>
            </form>
        </section>
    )
}

export default Booking
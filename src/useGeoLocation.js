import { useState } from "react";
function useGeolocation() {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const { lat, lng } = position;
  const [isLoading, setIsLoading] = useState(false);

  if (!navigator.geolocation)
    return setError("Your browser does not support geolocation");
  setIsLoading(true);
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
      setIsLoading(false);
    },
    (error) => {
      setError(error.message);
      setIsLoading(false);
    }
  );
  return { lat, lng, isLoading, error };
}

// returns an object with 4 paramters

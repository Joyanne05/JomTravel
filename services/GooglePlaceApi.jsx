import {GOOGLE_PLACE_API_KEY} from '@env';

export const GetPhotoRef = async (placeName) => {
    try {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(placeName)}&key=${GOOGLE_PLACE_API_KEY}`
      );
      const result = await resp.json();
      
      if (result?.results?.[0]?.photos) {
        const photoReference = result.results[0].photos[0].photo_reference;
        return photoReference;
      } else {
        console.warn("No photo reference found for the place.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching photo reference:", error);
      return null;
    }
  };
  
const maxLatitude = 51.088288;
const minLatitude = 41.367611;

const maxLongitude = 9.551403;
const minLongitude = -4.793256;

export const transformLatToMapTopPosition = (currentLatitude: number): number => {
    return ((maxLatitude - currentLatitude) / (maxLatitude - minLatitude)) * 100;
};

export const transformLongToMapLeftPosition = (currentLongitude: number): number => {
    if (minLongitude < 0) {
        return ((currentLongitude + Math.abs(minLongitude)) / (maxLongitude + Math.abs(minLongitude))) * 100;
    } else {
        return ((currentLongitude - minLongitude) / (maxLongitude - minLongitude)) * 100;
    }
};

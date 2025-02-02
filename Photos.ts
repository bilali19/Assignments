function sortPhotos(photos: string[]): string[] {
    // Helper function to extract year and number from a photo filename
    const parsePhoto = (photo: string) => {
        const year = parseInt(photo.substring(0, 4)); // Get the first 4 characters (year)
        const number = parseInt(photo.substring(8)); // Get the number after "img" (characters from index 8 onwards)
        return { year, number };
    };

    // Edge case: If there are no photos, return an empty array
    if (photos.length === 0) return [];

    // Sort the photos by year first, then by number
    const sortedPhotos = photos
        .map(photo => ({ photo, ...parsePhoto(photo) }))  // Convert each photo to an object with year and number
        .sort((a, b) => {
            if (a.year === b.year) {
                return a.number - b.number; // Sort by number if years are the same
            }
            return a.year - b.year; // Sort by year
        });

    // Get the most recent year and the highest photo number for that year
    const mostRecentYear = sortedPhotos[sortedPhotos.length - 1].year;
    const mostRecentNumber = sortedPhotos
        .filter(photo => photo.year === mostRecentYear) // Filter photos from the most recent year
        .reduce((max, photo) => Math.max(max, photo.number), -1); // Find the max number for the most recent year

    // Generate the next photo in the sequence
    const nextPhoto = `${mostRecentYear}.img${mostRecentNumber + 1}`;

    // Get the last 5 photos from the sorted list for the most recent year
    const recentPhotos = sortedPhotos
        .slice(-5) // Get the last 5 from the sorted list
        .map(photo => photo.photo); // Extract the original photo names

    return [...recentPhotos, nextPhoto];
}


console.log(sortPhotos(["2016.img1", "2016.img2", "2015.img3", "2016.img4", "2013.img5"]));

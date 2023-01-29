export function filterRestaurantData(restaurants, searchText) {
    return restaurants.filter((rest) => {
        return rest?.data?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
}

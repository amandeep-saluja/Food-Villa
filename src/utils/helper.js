export function filterRestaurantData(restaurants, searchText) {
    return restaurants.filter((rest) => {
        // console.log(rest?.data?.name?.toLowerCase(), searchText?.toLowerCase());
        return rest?.data?.name?.toLowerCase().includes(searchText?.toLowerCase());
    });
}

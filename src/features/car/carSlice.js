import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carItems: ['Model S', 'Model 3', 'Model Y', 'Model X']
}


const carSlice = createSlice({
    name : "car",
    initialState,
}
)


// export const selectCars = state=> state.item.carsItem
export default carSlice.reducer
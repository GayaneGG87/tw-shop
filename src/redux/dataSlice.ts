import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import localData from "../data/data.json"; // Import local JSON file
import { 
  IPerson,
  IAbout,
  INavMenu,
  IProjects,
  ISkill } from "src/types/types";

  const { navMenu, person, about, projects, courses } = localData
// Define TypeScript type for data
interface Item {
  id: number;
  name: string;
  value: string;
}

// Define initial state from JSON file
interface DataState {
  person:IPerson,
  navMenu:INavMenu[],
  about: IAbout,
  projects:IProjects[],
}
interface LocalData extends DataState {
  isOpenMobileNav: boolean
}

const initialState: LocalData = {
  person: person,
  navMenu: navMenu,
  about:about,
  projects,
  isOpenMobileNav: false
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

   
    setOpenNav: (state, action:PayloadAction<boolean>)=>{
      state.isOpenMobileNav = action.payload
    }
  },
});

export const { setOpenNav } = dataSlice.actions;
export default dataSlice.reducer;

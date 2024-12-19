import { configureStore, createSlice } from "@reduxjs/toolkit";
const data = [
     {
          id:1001,
          img:"https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg",
          schoolName:"La Martiniere College",
          city:"Lucknow",
          state:"Uttar Pradesh",
          phoneNo:9919342299,
          email:"principal@lamartinierelucknow.org",
          address:"La Martiniere Hazratganj"
     },
     {
          id:1002,
          img:"https://uniformapp.in/admin_area/school_images/Lucknow_Public_School_Vinamra_Khand_Lucknow_image1_43.jpeg",
          schoolName:"Lucknow Public School Vinamra Khand",
          city:"Lucknow",
          state:"Uttar Pradesh",
          phoneNo:8429830069,
          email:"lpc_gtnr@yahoo.in",
          address:"Vinamra Khand, Gomti Nagar, Lucknow"
     },
     {
          id:1003,
          img:"https://uniformapp.in/admin_area/school_images/Fortune_World_School_Noida_image1_159.jpeg",
          schoolName:"Fortune World School",
          city:"Noida",
          state:"Uttar Pradesh",
          phoneNo:9650299686,
          email:"school@fortuneworldschool.com",
          address:"Express Way, Sector-105, Noida"
     },
     {
          id:1004,
          img:"https://uniformapp.in/admin_area/school_images/Sapphire_International_School_Noida_Noida_image1_193.jpeg",
          schoolName:"Sapphire International School",
          city:"Noida",
          state:"Uttar Pradesh",
          phoneNo:9650546546,
          email:"info@sapphireschool.in",
          address:"SS-1, Sector 70, Noida"
     },
     {
          id:1005,
          img:"https://uniformapp.in/admin_area/school_images/LPS%20Amrapali%20Yojna%20Building%20Photo%20copy.jpg",
          schoolName:"Lucknow Public School Amrapali Yojna",
          city:"Lucknow",
          state:"Uttar Pradesh",
          phoneNo:9044061201,
          email:"principalamrapali.lps@gmail.com",
          address:"Lucknow- 226101, Amrapali Yojna"
     },
     {
          id:1006,
          img:"https://uniformapp.in/admin_area/school_images/Lucknow_Public_School_Vrindavan_Yojna_Lucknow_image1_1225.jpeg",
          schoolName:"Lucknow Public School Vrindavan Yojna",
          city:"Lucknow",
          state:"Uttar Pradesh",
          phoneNo:9044069616,
          email:"principallpsvy@gmail.com",
          address:"Sector 9, Raebareli Road, Vrindavan Yojana, Lucknow"
     },
     {
          id:1007,
          img:"https://uniformapp.in/admin_area/school_images/The_Asian_School_Dehradun_image1_2250.jpeg",
          schoolName:"The Asian School",
          city:"Dehradun",
          state:"Uttarakhand",
          phoneNo:9717430184,
          email:"info@theasianschool.net",
          address:"Asian Acres, Vasant (indira Nagar)"
     },
     {
          id:1008,
          img:"https://uniformapp.in/admin_area/school_images/b-block2.jpg",
          schoolName:"Lucknow Public School Amrapali Yojna",
          city:"Lucknow",
          state:"Uttar Pradesh",
          phoneNo:9044061201,
          email:"principalamrapali.lps@gmail.com",
          address:"Sec -E, Amrapali Yojna, Hardoi Road,"
     }
]
const reducer1 = createSlice({
     name:"schoolData",
     initialState:{data:data},
     reducers:{
          addSchool:(state,action)=>{
               state.data.push(action.payload);
          }
     }
});
export const {addSchool} = reducer1.actions;
const store = configureStore({reducer:{
     a:reducer1.reducer,
}})
export default store;
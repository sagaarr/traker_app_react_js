// All un-protected routes will be defined in here 
export const openRoute = {
    signIn:"/sign-in",
   privacyPolicy:"/privacyPolicy",
    fourOfour:"*"
};

// All protected routes will be defiend 
export const protectedRoutes = {
  editDriver:"/edit_driver_details",
  createUser:"/create_user" ,
  users:"/users",
  getAllAmbulances:"/ambulances",
  ambulanceCrew:"/create-crew",  
  createAmbulance:"/create-ambulance",
  dailyReport:"/daily-report",
  patentReport:'/patent-report'
};

// Any new user access need tobe added to the system need to pass a string element in here to give permission 
export const userAccess = {
    admin:"admin",
    test:"test"
}
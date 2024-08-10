import axios from "axios";
export const signupHandler = async (name, email, password, farmName, location, contactNumber) => {
  try {
    const response = await axios.post("http://localhost:8080/addNewUser", {
      name: name,           
      email: email,         
      password: password,   
      farmname: farmName,   
      location: location,   
      contactnumber: contactNumber 
    });

    if (response.status === 201) {
      localStorage.setItem('UserData', JSON.stringify(response.data));
      return true;
    } else {
      console.log(response.data);
      return false;
    }
  } catch (error) {
    console.error('Signup failed:', error.message);
    return false;
  }
};

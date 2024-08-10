import axios from "axios";

export const loginHandler = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8080/login", {
      email: email,  
      password: password
    });

    if (response.status === 200) {
      localStorage.setItem('UserData', JSON.stringify(response.data));
      console.log('Login successful');
      return { success: true, message: response.data };
    } else {
      console.log('Login failed:', response.data);
      return { success: false, message: response.data };
    }
  } catch (error) {
    console.error('Login failed:', error.message);
    // alert('Login request failed');
    return { success: false, message: 'Login request failed' };
  }
};

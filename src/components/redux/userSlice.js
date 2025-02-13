import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//createasyncThunk bir fonksiyonu çalıştırdığımızda cevap gelene kadar beklemeye yarıyor


export const login = createAsyncThunk('user/login',async({email,password})=>{
      console.log("email",email)
      console.log("password",password)
  try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email,password)

      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData ={
        token,
        user:user,
      }
      return userData

  } catch (error) {
    console.log("userslice line 22",error)
    throw error
    
  }
}) 





const initialState = {
  email: '',
  password: '',
  isAuth:false,
  isLoading:false,
  token: null,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {

    const lowercaseEmail = action.payload.toLowerCase()
      state.email=lowercaseEmail ;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setisAuth:(state,action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(login.pending, (state)=>{
      state.isLoading = true
      state.isAuth = false
    })
    .addCase(login.fulfilled, (state,action)=>{
      state.isLoading = false
      state.isAuth = true
      state.user = action.payload.user
      state.token = action.payload.token
    })
    .addCase(login.rejected, ()=>{
      state.isLoading = false
      state.isAuth = false
      state.error = action.error.message
    })
  }
});

export const { setEmail, setPassword, setisAuth} = userSlice.actions;
export default userSlice.reducer;

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

const Verify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const activationToken = location.state?.activationToken; // Retrieve activationToken from state
   
  // If activationToken is not found, show an error
  useEffect(() => {
    if (!activationToken) {
      toast.error("Activation token is missing. Please check your link.");
      navigate("/Register");  // Redirect user to signup page if token is missing
    }
  }, [activationToken, navigate]);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4001/api/auth/verify",{ otp, activationToken },

      );

      if (res.data.success) {
        toast.success("Verification successful!");
        navigate("/Login"); // Redirect to login page
      }
    } catch (err) {
      console.error("Verification Error:", err);
      toast.error(
        err.response?.data?.message || "Verification failed. Please try again."
      );
    }
  };

return(
  <div className="w-full min-h-screen bg-gradient-to-b from-[#AEDDFF] to-white flex justify-center items-center py-10 px-6">
  <form
    onSubmit={handleOtpSubmit}
    className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col items-center"
  >
    <h1 className="text-2xl font-extrabold text-[#444B59] uppercase tracking-widest mb-6">
      Verify Your Account
    </h1>
    <div className="w-full flex flex-col space-y-4">
      <Label className="text-[#444B59] text-lg font-semibold tracking-wide">
        Enter OTP
      </Label>
      <Input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full h-14 px-4 text-base border-2 border-[#789ADE] rounded-full focus:outline-none"
      />
    </div>
    <Button
      type="submit"
      className="w-full h-14 mt-6 bg-[#8699DA] text-white font-extrabold text-lg rounded-full hover:bg-[#789ADE] shadow-inner"
    >
      Verify
    </Button>
  </form>
</div>
)
}

export default Verify;

'use client';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { GradientButton } from '@/components/custom-button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const OtpForm = () => {
  const router = useRouter();

  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simple guard
    if (otp.length !== 6) {
      // you can replace this with a toast
      alert('Please enter the 6-digit code.');
      return;
    }

    console.log('OTP submitted:', otp);
    // call your verify API here
    router.push('/new-password');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <div className="w-full text-center space-y-2">
        <p className="text-sm ">Enter the verification code</p>
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <GradientButton type="submit" className="w-full py-3 rounded-md">
        Verify Code
      </GradientButton>
      <button
        type="button"
        className="text-xs text-[#7A3FAE] hover:underline"
        // hook this up to your resend API
        onClick={() => console.log('Resend code')}
      >
        Didn&apos;t receive the code? Resend
      </button>
    </form>
  );
};

export default OtpForm;

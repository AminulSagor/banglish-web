import { BaggageClaim } from 'lucide-react';
import Link from 'next/link';
import AuthHeader from '../_components/auth-header';
import AuthSubHeader from '../_components/auth-subheader';
import OtpForm from '../_components/otp-form';
import { Button } from '@/components/ui/button';

const OtpPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center">
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              {/* Heading */}
              <div>
                <AuthHeader>Enter Verification Code</AuthHeader>
                <AuthSubHeader>
                  We’ve sent a 6-digit code to your email / phone
                </AuthSubHeader>
              </div>

              <div className="bg-white p-8 border border-[#C99DFF] rounded-md max-w-lg min-w-lg shadow-md">
                <OtpForm />
                <div className="text-center">
                  <Button
                    type="button"
                    variant={'link'}
                    className="text-[#7A3FAE] hover:underline"
                  >
                    <Link href="/signin">Back to Sign In</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;

import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import AuthHeader from "../_components/auth-header";
import AuthSubHeader from "../_components/auth-subheader";
import OtpForm from "../_components/otp-form";

const OtpPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center">
      <div className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-8">
              {/* Icon */}
              <div className="flex items-center justify-center">
                <BaggageClaim size={100} className="text-purple-400" />
              </div>

              {/* Heading */}
              <div>
                <AuthHeader>Enter Verification Code</AuthHeader>
                <AuthSubHeader>
                  We’ve sent a 6-digit code to your email / phone
                </AuthSubHeader>
              </div>

              <div className="bg-white p-8 border border-[#C99DFF] rounded-2xl max-w-xl min-w-xl shadow-md">
                <OtpForm />
                <div className="text-center py-8">
                  <Link
                    href="/auth/signin"
                    className="text-[#7A3FAE] hover:underline"
                  >
                    Back to Sign In
                  </Link>
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

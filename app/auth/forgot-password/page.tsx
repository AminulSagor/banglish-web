import { BaggageClaim } from "lucide-react";
import AuthHeader from "../_components/auth-header";
import AuthSubHeader from "../_components/auth-subheader";
import SocialSignUp from "../_components/social-signup";
import Link from "next/link";
import SigninForm from "../_components/signin-form";
import ForgotPasswordForm from "../_components/forgot-password-form";

const ForgotPasswordPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center ">
      <div className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-8">
              <div className="flex items-center justify-center">
                <BaggageClaim size={100} className="text-purple-400" />
              </div>
              <div>
                <AuthHeader>Forgot Password </AuthHeader>
                <AuthSubHeader>Enter your email below</AuthSubHeader>
              </div>
              <div className="bg-white p-8 border border-[#C99DFF] rounded-2xl max-w-xl min-w-xl shadow-md">
                <ForgotPasswordForm />
                <div className="text-center py-8">
                  <Link
                    href="/auth/signup"
                    className="text-[#7A3FAE] hover:underline"
                  >
                    Don&apos;t have an account? Register
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

export default ForgotPasswordPage;

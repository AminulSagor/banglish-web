import { BaggageClaim } from "lucide-react";
import AuthHeader from "../_components/auth-header";
import AuthSubHeader from "../_components/auth-subheader";
import NewPasswordForm from "../_components/new-password-form";

const NewPasswordPage = () => {
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
                <AuthHeader>Set New Password</AuthHeader>
                <AuthSubHeader>Must be atleast 6 characters long</AuthSubHeader>
              </div>
              <div className="bg-white p-8 border border-[#C99DFF] rounded-2xl max-w-xl min-w-xl shadow-md">
                <NewPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;

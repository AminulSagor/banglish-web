import { BaggageClaim } from 'lucide-react';
import AuthHeader from '../_components/auth-header';
import AuthSubHeader from '../_components/auth-subheader';
import NewPasswordForm from '../_components/new-password-form';

const NewPasswordPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center ">
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <div>
                <AuthHeader>Set New Password</AuthHeader>
                <AuthSubHeader>Must be atleast 6 characters long</AuthSubHeader>
              </div>
              <div className="bg-white px-8 py-4 border border-[#C99DFF] rounded-md max-w-lg min-w-lg shadow-md">
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

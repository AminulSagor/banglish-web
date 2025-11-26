import { BaggageClaim } from 'lucide-react';
import AuthHeader from '../_components/auth-header';
import AuthSubHeader from '../_components/auth-subheader';
import Link from 'next/link';
import ForgotPasswordForm from '../_components/forgot-password-form';
import { Button } from '@/components/ui/button';

const ForgotPasswordPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center">
      <div className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <div>
                <AuthHeader>Forgot Password </AuthHeader>
                <AuthSubHeader>Enter your email below</AuthSubHeader>
              </div>
              <div className="bg-white px-8 py-4 border border-[#C99DFF] rounded-md max-w-lg min-w-lg shadow-md">
                <ForgotPasswordForm />
                <div className="text-center">
                  <Button
                    type="button"
                    variant={'link'}
                    className="text-[#7A3FAE] "
                  >
                    <Link href="/signup">
                      Don&apos;t have an account? Register
                    </Link>
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

export default ForgotPasswordPage;

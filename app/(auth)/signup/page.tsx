import { Button } from '@/components/ui/button';
import AuthHeader from '../_components/auth-header';
import AuthSubHeader from '../_components/auth-subheader';
import SignupForm from '../_components/signup-form';
import SocialSignUp from '../_components/social-signup';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center ">
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <div>
                <AuthHeader>Sign Up</AuthHeader>
                <AuthSubHeader>
                  Learn the Language you want to learn
                </AuthSubHeader>
              </div>
              <div className="bg-white px-8 py-4 border border-[#C99DFF] rounded-md max-w-lg min-w-lg shadow-md">
                <SignupForm />
                <div className="py-4">
                  <SocialSignUp />
                </div>
                <div className="text-center">
                  <Button className="text-[#7A3FAE]" variant={'link'} asChild>
                    <Link href="/signin" className="">
                      Already have an account? Login
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

export default SignupPage;

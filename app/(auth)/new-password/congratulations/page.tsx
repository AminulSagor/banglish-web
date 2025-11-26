import Link from 'next/link';
import { GradientButton } from '@/components/custom-button';
import Image from 'next/image';

const CongratulationsPage = () => {
  return (
    <div className="bg-[#F1ECF9] min-h-screen flex flex-col items-center justify-center">
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              {/* Icon */}

              {/* Heading */}

              <div className="bg-white p-8 border border-[#C99DFF] rounded-md max-w-xl min-w-xl shadow-md">
                <div className="space-y-1">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="verified "
                      src={'/verified.png'}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center text-[#7A3FAE]">
                    All Set!
                  </h2>
                  <p className="text-xl font-normal  text-center text-[#7A3FAE]">
                    Your password has been reset
                  </p>

                  <Link href="/">
                    <GradientButton
                      type="submit"
                      className="w-full py-3 rounded-md"
                    >
                      Go to Rooms
                    </GradientButton>
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

export default CongratulationsPage;
